import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesTransfers(wings: Wings, router: Router) {
  router.post("/api/transfers", (req, res) => {
    // POST /api/transfers
  });
  
  router.delete("/api/transfers/:server", (req, res) => {
    // DELETE /api/transfers/:server
  });
}