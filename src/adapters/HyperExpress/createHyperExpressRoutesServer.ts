import {
  createHyperExpressRoutesServerBackup,
  createHyperExpressRoutesServerFiles,
  createHyperExpressRoutesServerOptions,
  createHyperExpressRoutesServerTransfer,
} from "./";
import { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesServer(wings: Wings, router: Router) {
  const serverRouter = new Router();

  router.get("/:server", (req, res) => {
    // GET /api/servers/:server
  });
  
  router.delete("/:server", (req, res) => {
    // DELETE /api/servers/:server
  });
  
  createHyperExpressRoutesServerBackup(wings, router);
  createHyperExpressRoutesServerFiles(wings, router);
  createHyperExpressRoutesServerOptions(wings, router);
  createHyperExpressRoutesServerTransfer(wings, router);

  router.use("/api/servers", serverRouter);
}