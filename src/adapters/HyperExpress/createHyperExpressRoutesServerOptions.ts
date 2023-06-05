import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServerOptions({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.get("/:server/logs", (req, res) => {
    // GET /api/servers/:server/logs
    emit(WingsEvents.getServerLogs, req, res);
  });

  router.post("/:server/power", (req, res) => {
    // POST /api/servers/:server/power
    emit(WingsEvents.changeServerPowerState, req, res);
  });

  router.post("/:server/commands", (req, res) => {
    // POST /api/servers/:server/commands
    emit(WingsEvents.sendServerCommand, req, res);
  });

  router.post("/:server/install", (req, res) => {
    // POST /api/servers/:server/install
    emit(WingsEvents.performServerInstall, req, res);
  });

  router.post("/:server/reinstall", (req, res) => {
    // POST /api/servers/:server/reinstall
    emit(WingsEvents.performServerReinstall, req, res);
  });

  router.post("/:server/sync", (req, res) => {
    // POST /api/servers/:server/sync
    emit(WingsEvents.triggerServerSync, req, res);
  });

  router.post("/:server/ws/deny", (req, res) => {
    // POST /api/servers/:server/ws/deny
    emit(WingsEvents.revokeServerJTIs, req, res);
  });
}