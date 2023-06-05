import { EventEmitter } from "events";
import { WingsEventsJWT } from "./WingsEvents";

interface WingsOptions {
  authorization: WingsAuthorizationFunction,
  
  // EventEmitter options
  captureRejections?: boolean | undefined;
}

type WingsAuthorizationFunction = (evt: WingsAuthorizationFunctionArguments) => boolean | Promise<boolean>;

export interface WingsAuthorizationFunctionArguments extends WingsResults {
  type: "token" | "jwt";
  eventName: string;
}

export interface WingsResults {
  headers: {
    [key: string]: string;
  }
  body: any;

  status: (status: number) => WingsResults;
  sendStatus: (status: number) => WingsResults;
  send: (body: string) => WingsResults;
  json: (body: object) => WingsResults;
}

declare module "events" {
  interface EventEmitter {
    emit(eventName: string, args: WingsResults): boolean | Promise<boolean>;
  }
}

export class Wings extends EventEmitter {
  authorization: WingsAuthorizationFunction;

  constructor(options?: WingsOptions) {
    super({ captureRejections: options?.captureRejections });
    this.authorization = options?.authorization || (() => true);
  }
  
  setAuthorization(func: WingsAuthorizationFunction) {
    this.authorization = func;
  }

  async emit(eventName: string, args: WingsResults) {
    if (await this.authorization({
      type: WingsEventsJWT.includes(eventName) ? "jwt" : "token",
      eventName,
      ...args,
    }) === false) return false;
    return super.emit(eventName, args);
  }
}
