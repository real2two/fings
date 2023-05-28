import type { Wings } from "../structures/Wings";
import type { Request, Response, MiddlewareNext } from "hyper-express";

export function createHyperExpressClient(wings: Wings) {
  return (req: Request, res: Response, next: MiddlewareNext) => {
    // Create router
  };
}
