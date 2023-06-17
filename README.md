# Fings

Create your own "fake" Wings instances and panel remote routes, which you can customize what it does.

This should not be used in production, and this is still in development.

## Example code

```ts
// Import this library

import {
  Wings, // includes FTP, but they won't work unless you make it.
  WingsAdapter,
  WingsEvents, // contains object with official adapters
  WingsBodyCheck, // Body checker
} from "fings"; // name subjected to change.

// Import other libraries

import HyperExpress from "hyper-express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

// Constants

const PANEL_URL = "http://CHANGEME-domain";
const TOKEN_ID = "CHANGEME-tokenid";
const TOKEN = "CHANGEME-token";

const AUTHORIZATION = `Bearer ${TOKEN_ID}.${TOKEN}`;

const UNAUTHOIRZED_MESSAGE = {
  error: "The required authorization heads were not present in the request."
};

// Code

const wings = new Wings();

wings.setAuthorization(data => { // { type, eventName, headers, body, status, sendStatus, send, json }
  // WebSockets skip this function.

  if (data.type === "token") {
    // bearer token stuff
    if (data.headers?.authorization !== `Bearer ${TOKEN}`) {
      data.status(403).json(UNAUTHOIRZED_MESSAGE);
      return false;
    }
  } else if (data.type === "jwt") {
    // do jwt stuff
    let jwtToken;
    if (data.eventName === WingsEvents.startServerTransfer) {
      if (data.headers?.authorization && data.headers.authorization.startsWith("Bearer ")) {
        jwtToken = data.headers.authorization.slice("Bearer ".length);
      }
    } else {
      jwtToken = data.query.token;
    }
    try {
      if (!jwtToken) throw new Error("Missing JWT token");
      const decoded = jwt.verify(jwtToken, TOKEN);
      if (typeof decoded !== "object") throw new Error("Decoded JWT value isn't an object");
      data.jwt = decoded; // Authorization header MUST give the JWT value to data, since Fings doesn't handle JWTs.
    } catch(err) {
      data.status(403).json(UNAUTHOIRZED_MESSAGE);
      return false;
    }
  }

  if (!WingsBodyCheck.check(data.eventName, data)) {
    data
      .status(400)
      .json({
        error: "An unexpected error was encountered while processing this request",
        request_id: uuidv4()
      });
    return false;
  }

  return true;
});

wings.on(WingsEvents.getSystemInformation, res => { // { headers, body, status, sendStatus, send, json }
  res.json({
    architecture: "amd64",
    cpu_count: 1000000,
    kernel_version: "2.69.1-00-generic",
    os: "awesome",
    version: "1.0.0"
  });
});

wings.on(WingsEvents.createServer, async data => {
  const getServerInfoRequest = await fetch(`${PANEL_URL}/api/remote/servers/${data.body.uuid}`, {
    headers: {
      authorization: AUTHORIZATION,
      accept: "application/vnd.pterodactyl.v1+json",
      "accept-encoding": "gzip"
    }
  });
  console.log("Create server > getServerInfoRequest", await getServerInfoRequest.json());

  const installationStatusRequest = await fetch(`${PANEL_URL}/api/remote/servers/${data.body.uuid}/install`, {
    method: "post",
    headers: {
      authorization: AUTHORIZATION,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      successful: true,
      reinstall: true
    })
  });
  console.log(`Create server > installationStatusRequest`, installationStatusRequest.status);

  data.sendStatus(202);
});

wings.on(WingsEvents.openServerConsole, ws => {
  console.log("joined jwt");

  let authorized = false;
  ws.onMessage(({ event, args }) => {
    console.log("ws", event, args); // does this work?

    switch (event) {
      case "auth":
        const jwtToken = args[0];
        console.log(jwtToken)
        try {
          const decoded = jwt.verify(jwtToken, TOKEN);
          if (typeof decoded !== "object") throw new Error("Decoded JWT value isn't an object");
          console.log("ws jwt", decoded);
        } catch(err) {
          return ws.close();
        }
        authorized = true;
        ws.json({
          event: "auth success",
        });
        break;
      case "send logs":
        ws.json({
          event: "daemon message",
          args: ["this is a very cool test message"]
        });
        break;
      case "send stats":
        ws.json({
          event: "stats",
          args: [JSON.stringify({
            memory_bytes: 0,
            memory_limit_bytes: 21,
            cpu_absolute: 0,
            network: {
              rx_bytes: 0,
              tx_bytes: 0
            },
            uptime: 0,
            state: "offline",
            disk_bytes: 69,
          })]
        });
        break;
    }
  });
  ws.onClose(() => {
    console.log("left ws"); // does this work?
  });
});

wings.on(WingsEvents.getServerFileDirectory, async data => {
  data.json([]);
});

wings.on(WingsEvents.uploadFile, async data => {
  try {
    await data.acceptUpload("temp"); // Saves file in folder temp.
    data.sendStatus(200);
  } catch(err) { // Necessary.
    console.error(err);
  }
});

wings.on(WingsEvents.deleteServer, async data => {
  data.sendStatus(204);
});

// Setup HyperExpress

const app = new HyperExpress.Server({
  max_body_length: 1e+8, // 100mb
});

app.use((req, res, next) => {
  if (req.headers.origin) {
    res.header("vary", "Origin");
    res.header("Access-Control-Allow-Headers", req.headers["access-control-request-headers"]);
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", "true");
  }
  next();
});

app.options("/*", (req, res) => {
  res.send("");
});

app.use(
  WingsAdapter.createHyperExpressClient(wings) // Use HyperExpress adapter to open the Wings routes.
);

app.all("*", (req, res) => {
  res.status(404).send("404 page not found");
});

app.listen(8080)
  .then(socket => console.log("Webserver started on port 8080"))
  .catch(err => console.log("Failed to start webserver on port 8080"));
```
