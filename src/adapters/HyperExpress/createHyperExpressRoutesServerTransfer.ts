import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesServerTransfer(wings: Wings, router: Router) {
  router.post("/:server/transfer", (req, res) => {
    // POST /api/servers/:server/transfer
  });

  router.delete("/:server/transfer", (req, res) => {
    // DELETE /api/servers/:server/transfer
  });
}