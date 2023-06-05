import { Router } from "hyper-express";
import { WingsEvents } from "../../structures/WingsEvents";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServerBackup({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.post("/:server/backup", (req, res) => {
    // POST /api/servers/:server/backup
    emit(WingsEvents.createServerBackup, req, res);
  });
  
  router.post("/:server/backup/:backup/restore", (req, res) => {
    // POST /api/servers/:server/backup/:backup/restore
    emit(WingsEvents.restoreServerBackup, req, res);
  });

  router.delete("/:server/backup/:backup", (req, res) => {
    // DELETE /api/servers/:server/backup/:backup
    emit(WingsEvents.deleteServerBackup, req, res);
  });
}