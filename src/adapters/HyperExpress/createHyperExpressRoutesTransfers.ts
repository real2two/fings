import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesTransfers({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.post("/api/transfers", (req, res) => {
    // POST /api/transfers
    emit(WingsEvents.startServerTransfer, req, res);
  });
  
  router.delete("/api/transfers/:server", (req, res) => {
    // DELETE /api/transfers/:server
    emit(WingsEvents.deleteIncomingServerTransfer, req, res);
  });
}