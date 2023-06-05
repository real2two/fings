import { Wings } from "../../structures/Wings";
import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesSystem({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.post("/api/update", (req, res) => {
    // POST /api/update
  });

  router.get("/api/system", (req, res) => {
    // GET /api/system
    emit(WingsEvents.getSystemInformation, req, res);
  });

  router.get("/api/servers", (req, res) => {
    // GET /api/servers
  });

  router.post("/api/servers", (req, res) => {
    // POST /api/servers
  });
}