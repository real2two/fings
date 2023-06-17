import { Router } from "hyper-express";
import type { Request, Response } from "hyper-express";
import type { Wings, WingsResults } from "../structures/Wings";
export type Emit = (eventName: string, req: Request, res: Response, json?: boolean) => void;
export declare function createHyperExpressClient(wings: Wings): Router;
export declare function createWingsResultsObject({ req, res, body }: {
    req: Request;
    res: Response;
    body?: any;
}): WingsResults;
