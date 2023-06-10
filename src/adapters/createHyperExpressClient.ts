import { Router } from "hyper-express";
import type { Request, Response } from "hyper-express";
import {
  createHyperExpressRoutesDownloadUpload,
  createHyperExpressRoutesServer,
  createHyperExpressRoutesSystem,
  createHyperExpressRoutesTransfers,
  createHyperExpressRoutesWebSocket,
} from "./HyperExpress";
import type { Wings, WingsResults } from "../structures/Wings";

export type Emit = (eventName: string, req: Request, res: Response, json?: boolean) => void;

export function createHyperExpressClient(wings: Wings) {
  const emit = (eventName: string, req: Request, res: Response, json = true) => {
    res.atomic(async () => {
      const args: WingsResults = {
        headers: req.headers,
        body:
          ["GET", "DELETE", "OPTIONS", "HEAD"].includes(req.method) ?
            null :
            (
              json ?
                await req.json({}) :
                await req.text()
            ),
        status: status => {
          res.status(status);
          return args;
        },
        sendStatus: status => {
          res.status(status).send(status.toString());
          return args;
        },
        send: body => {
          res.send(body);
          return args;
        },
        json: body => {
          res.json(body);
          return args;
        },
      };
      
      wings.emit(eventName, args);
    });
  };

  const router = new Router();
  createHyperExpressRoutesDownloadUpload({ wings, emit, router });
  createHyperExpressRoutesTransfers({ wings, emit, router });
  createHyperExpressRoutesWebSocket({ wings, emit, router });

  createHyperExpressRoutesSystem({ wings, emit, router });
  createHyperExpressRoutesServer({ wings, emit, router });
  return router;
}
