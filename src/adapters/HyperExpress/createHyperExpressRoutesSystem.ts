import { Wings } from "../../structures/Wings";
import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesSystem({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.post("/api/update", (req, res) => {
    // POST /api/update
    emit(WingsEvents.updateConfiguration, req, res);
  });

  router.get("/api/system", (req, res) => {
    // GET /api/system
    emit(WingsEvents.getSystemInformation, req, res);
  });

  router.get("/api/servers", (req, res) => {
    // GET /api/servers
    emit(WingsEvents.getServers, req, res);
  });

  router.post("/api/servers", (req, res) => {
    // POST /api/servers
    emit(WingsEvents.createServer, req, res);
  });
}