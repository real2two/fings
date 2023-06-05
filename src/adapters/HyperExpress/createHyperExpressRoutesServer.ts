import {
  createHyperExpressRoutesServerBackup,
  createHyperExpressRoutesServerFiles,
  createHyperExpressRoutesServerOptions,
  createHyperExpressRoutesServerTransfer,
} from "./";
import { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServer({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  const serverRouter = new Router();

  router.get("/:server", (req, res) => {
    // GET /api/servers/:server
  });
  
  router.delete("/:server", (req, res) => {
    // DELETE /api/servers/:server
  });
  
  createHyperExpressRoutesServerBackup({ wings, emit, router });
  createHyperExpressRoutesServerFiles({ wings, emit, router });
  createHyperExpressRoutesServerOptions({ wings, emit, router });
  createHyperExpressRoutesServerTransfer({ wings, emit, router });

  router.use("/api/servers", serverRouter);
}