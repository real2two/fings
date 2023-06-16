import { Router } from "hyper-express";
import {
  createHyperExpressRoutesServerBackup,
  createHyperExpressRoutesServerFiles,
  createHyperExpressRoutesServerOptions,
  createHyperExpressRoutesServerTransfer,
} from "./";
import { WingsEvents } from "../../structures/WingsEvents";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServer({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  const serverRouter = new Router();

  router.get("/:server", (req, res) => {
    // GET /api/servers/:server
    emit(WingsEvents.getServerDetails, req, res);
  });
  
  router.delete("/:server", (req, res) => {
    // DELETE /api/servers/:server
    emit(WingsEvents.deleteServer, req, res);
  });
  
  createHyperExpressRoutesServerBackup({ wings, emit, router: serverRouter });
  createHyperExpressRoutesServerFiles({ wings, emit, router: serverRouter });
  createHyperExpressRoutesServerOptions({ wings, emit, router: serverRouter });
  createHyperExpressRoutesServerTransfer({ wings, emit, router: serverRouter });

  router.use("/api/servers", serverRouter);
}