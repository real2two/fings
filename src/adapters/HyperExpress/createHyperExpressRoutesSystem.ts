import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesSystem(wings: Wings, router: Router) {
  router.post("/api/update", (req, res) => {
    // POST /api/update
  });

  router.get("/api/system", (req, res) => {
    // GET /api/system
    wings.emit(WingsEvents.getSystemInformation, {
      headers: req.headers,
      body: req.body,
      status: (status: number) => res.status(status),
      send: (body: string) => res.send(body),
      json: (body: object) => res.json(body),
    });
  });

  router.get("/api/servers", (req, res) => {
    // GET /api/servers
  });

  router.post("/api/servers", (req, res) => {
    // POST /api/servers
  });
}