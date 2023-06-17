import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";
export declare function createHyperExpressRoutesWebSocket({ wings, router }: {
    wings: Wings;
    emit: Emit;
    router: Router;
}): void;
