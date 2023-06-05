import { Router } from "hyper-express";
import {
  createHyperExpressRoutesDownloadUpload,
  createHyperExpressRoutesServer,
  createHyperExpressRoutesSystem,
  createHyperExpressRoutesTransfers,
  createHyperExpressRoutesWebSocket,
} from "./HyperExpress";
import type { Wings } from "../structures/Wings";

export function createHyperExpressClient(wings: Wings) {
  const router = new Router();
  createHyperExpressRoutesDownloadUpload(wings, router);
  createHyperExpressRoutesTransfers(wings, router);
  createHyperExpressRoutesWebSocket(wings, router);

  createHyperExpressRoutesSystem(wings, router);
  createHyperExpressRoutesServer(wings, router);
  return router;
}
