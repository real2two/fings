import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesSystem(wings: Wings, router: Router) {
  router.post("/api/update", (req, res) => {
    // POST /api/update
  });

  router.get("/api/system", (req, res) => {
    // GET /api/system
    const args = {
      headers: req.headers,
      body: req.body,
      status: (status: number) => {
        res.status(status);
        return args;
      },
      send: (body: string) => {
        res.send(body);
        return args;
      },
      json: (body: object) => {
        res.json(body);
        return args;
      },
    };
    wings.emit(WingsEvents.getSystemInformation, args);
  });

  router.get("/api/servers", (req, res) => {
    // GET /api/servers
  });

  router.post("/api/servers", (req, res) => {
    // POST /api/servers
  });
}