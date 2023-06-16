import { EventEmitter } from "events";
import { WingsEvents, WingsEventsJWT } from "./WingsEvents";
import type { ReadStream } from "fs";

interface WingsOptions {
  authorization: WingsAuthorizationFunction,
  
  // EventEmitter options
  captureRejections?: boolean | undefined;
}

type WingsAuthorizationFunction = (evt: WingsAuthorizationFunctionArguments | WingsAuthorizationFunctionArgumentsWebsocket) => boolean | Promise<boolean>;

export interface WingsAuthorizationFunctionArguments extends WingsResults {
  type: "token" | "jwt";
  eventName: string;
}

export interface WingsAuthorizationFunctionArgumentsUpload extends WingsResultsUpload {
  type: "jwt";
  eventName: "uploadFile";
}

export interface WingsAuthorizationFunctionArgumentsWebsocket extends WingsResultsWebSocket {
  type: "ws";
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
  stream: (readable: ReadStream) => WingsResults;
}

export interface WingsResultsUpload extends WingsResults {
  body: undefined;
  acceptUpload: (save_path: string) => Promise<WingsResults>; // Check Content-Length to limit file size.
}

export interface WingsResultsWebSocket {
  ip: string,
  
  send: (message: string) => WingsResultsWebSocket;
  json: (message: object) => WingsResultsWebSocket;
  close: () => WingsResultsWebSocket;
  destroy: () => WingsResultsWebSocket;
  
  // TODO: Add more functions for handling the websocket here.

  onMessage: ((message: string) => any) | undefined;
  onClose: (() => any) | undefined;
}

declare module "events" {
  interface EventEmitter {
    on(eventName: string, listener: (data: WingsAuthorizationFunctionArguments) => void): Wings;
    on(eventName: "openServerConsole", listener: (data: WingsAuthorizationFunctionArgumentsWebsocket) => void): Wings;
    on(eventName: "uploadFile", listener: (data: WingsAuthorizationFunctionArgumentsUpload) => void): Wings;

    emit(eventName: string, args: WingsResults): boolean | Promise<boolean>;
    emit(eventName: "openServerConsole", args: WingsResultsWebSocket): boolean | Promise<boolean>;
    emit(eventName: "uploadFile", args: WingsResultsUpload): boolean | Promise<boolean>;
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

  async emit(eventName: string, args: WingsResults | WingsResultsWebSocket) {
    if (eventName === WingsEvents.openServerConsole) {
      return super.emit(eventName, {
        type: "ws",
        eventName,
        ...args,
      } as WingsAuthorizationFunctionArgumentsWebsocket);
    } else {
      if (await this.authorization({
        type: WingsEventsJWT.includes(eventName) ? "jwt" : "token",
        eventName,
        ...args as WingsResults,
      }) === false) return false;
      return super.emit(eventName, args as WingsAuthorizationFunctionArguments);
    }
  }
}
