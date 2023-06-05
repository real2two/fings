import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServerTransfer({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.post("/:server/transfer", (req, res) => {
    // POST /api/servers/:server/transfer
    emit(WingsEvents.createServerTransfer, req, res);
  });

  router.delete("/:server/transfer", (req, res) => {
    // DELETE /api/servers/:server/transfer
    emit(WingsEvents.deleteOutgoingServerTransfer, req, res);
  });
}