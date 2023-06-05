import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServerOptions({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.get("/:server/logs", (req, res) => {
    // GET /api/servers/:server/logs
  });

  router.post("/:server/power", (req, res) => {
    // POST /api/servers/:server/power
  });

  router.post("/:server/commands", (req, res) => {
    // POST /api/servers/:server/commands
  });

  router.post("/:server/install", (req, res) => {
    // POST /api/servers/:server/install
  });

  router.post("/:server/reinstall", (req, res) => {
    // POST /api/servers/:server/reinstall
  });

  router.post("/:server/sync", (req, res) => {
    // POST /api/servers/:server/sync
  });

  router.post("/:server/ws/deny", (req, res) => {
    // POST /api/servers/:server/ws/deny
  });
}