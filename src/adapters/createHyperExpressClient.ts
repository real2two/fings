import { Router } from "hyper-express";
import type { Request, Response } from "hyper-express";
import {
  createHyperExpressRoutesDownloadUpload,
  createHyperExpressRoutesServer,
  createHyperExpressRoutesSystem,
  createHyperExpressRoutesTransfers,
  createHyperExpressRoutesWebSocket,
} from "./HyperExpress";
import type { Wings } from "../structures/Wings";

export type Emit = (eventName: string, req: Request, res: Response) => Promise<boolean>;

export function createHyperExpressClient(wings: Wings) {
  const emit = (eventName: string, req: Request, res: Response) => {
    const args = {
      headers: req.headers,
      body: req.body,
      status: (status: number) => {
        res.status(status);
        return args;
      },
      sendStatus: (status: number) => {
        res.sendStatus(status);
        return args;
      },
      send: (body: string) => {
        res.send(body);
        return args;
      },
      json: (body: object) => {
        res.json(body);
        return args;
      },
    };
    return wings.emit(eventName, args);
  };

  const router = new Router();
  createHyperExpressRoutesDownloadUpload({ wings, emit, router });
  createHyperExpressRoutesTransfers({ wings, emit, router });
  createHyperExpressRoutesWebSocket({ wings, emit, router });

  createHyperExpressRoutesSystem({ wings, emit, router });
  createHyperExpressRoutesServer({ wings, emit, router });
  return router;
}
