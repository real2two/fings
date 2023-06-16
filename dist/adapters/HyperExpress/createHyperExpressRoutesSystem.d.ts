import { Wings } from "../../structures/Wings";
import type { Router } from "hyper-express";
import type { Emit } from "../createHyperExpressClient";
export declare function createHyperExpressRoutesSystem({ wings, emit, router }: {
    wings: Wings;
    emit: Emit;
    router: Router;
}): void;
