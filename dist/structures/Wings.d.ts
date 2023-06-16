/// <reference types="node" />
import { EventEmitter } from "events";
import type { ReadStream } from "fs";
import type { WingsBodyCheckKeys } from "./WingsBodyCheck";
interface WingsOptions {
    authorization: WingsAuthorizationFunction;
    captureRejections?: boolean | undefined;
}
type WingsAuthorizationFunction = (evt: WingsAuthorizationFunctionArguments) => boolean | Promise<boolean>;
export interface WingsAuthorizationFunctionArguments extends WingsResults {
    type: "token" | "jwt";
    eventName: WingsBodyCheckKeys;
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
    };
    params: {
        [key: string]: string;
    };
    query: {
        [key: string]: string;
    };
    body: any;
    /**
     * Set the status of the response.
     * @param status The status code.
     * @returns The wings result object.
     */
    status: (status: number) => WingsResults;
    /**
     * Send a status as the response.
     * @param status The status code.
     * @returns The wings result object.
     */
    sendStatus: (status: number) => WingsResults;
    /**
     * Send a response.
     * @param body The body.
     * @returns The wings result object.
     */
    send: (body: string) => WingsResults;
    /**
     * Send a response as a JSON.
     * @param body The body as a JSON value.
     * @returns The wings result object.
     */
    json: (body: object) => WingsResults;
    /**
     * Stream a response.
     * @param readable The read stream.
     * @returns The wings result object.
     */
    stream: (readable: ReadStream) => WingsResults;
}
export interface WingsResultsUpload extends WingsResults {
    body: undefined;
    /**
     * Accept the upload.
     * @param save_path The directory to save the uploading files.
     * @returns A wings result object as a promise.
     */
    acceptUpload: (save_path: string) => Promise<WingsResults>;
}
export interface WingsResultsWebSocket {
    ip: string;
    /**
     * Send a websocket message.
     * @param message The message.
     * @returns The wings result object.
     */
    send: (message: string) => WingsResultsWebSocket;
    /**
     * Send a websocket message as a JSON.
     * @param message The message as a JSON value.
     * @returns The wings result object.
     */
    json: (message: object) => WingsResultsWebSocket;
    /**
     * Close the websocket.
     * @returns The wings result object.
     */
    close: () => WingsResultsWebSocket;
    /**
     * Destroy the websocket.
     * @returns The wings result object.
     */
    destroy: () => WingsResultsWebSocket;
    onMessage: ((message: string) => void) | undefined;
    onClose: (() => void) | undefined;
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
export declare class Wings extends EventEmitter {
    authorization: WingsAuthorizationFunction;
    /**
     * Create a new fake Wings instance.
     * @param options The options for Wings and EventEmitter.
     */
    constructor(options?: WingsOptions);
    /**
     * Set the authorization function.
     * @param func The authorization function.
     */
    setAuthorization(func: WingsAuthorizationFunction): void;
    /**
     * Emit a event.
     * @param eventName The event name.
     * @param args The values for the event.
     * @returns A boolean determining if the emit was successful or not.
     */
    emit(eventName: string, args: WingsResults | WingsResultsWebSocket): Promise<boolean>;
}
export {};
