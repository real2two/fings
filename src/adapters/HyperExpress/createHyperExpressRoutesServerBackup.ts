import { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesServerBackup(wings: Wings, router: Router) {
  router.post("/:server/backup", (req, res) => {
    // POST /api/servers/:server/backup
  });
  
  router.post("/:server/backup/:backup/restore", (req, res) => {
    // POST /api/servers/:server/backup/:backup/restore
  });

  router.delete("/:server/backup/:backup", (req, res) => {
    // DELETE /api/servers/:server/backup/:backup
  });
}