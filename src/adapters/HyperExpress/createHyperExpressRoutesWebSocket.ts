import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Wings, WingsResultsWebSocket } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesWebSocket({ wings, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.ws("/api/servers/:server/ws", {
    idle_timeout: 60,
    max_payload_length: 32 * 1024
  }, ws => {
    // WS /api/servers/:server/ws
    
    const args: WingsResultsWebSocket = {
      ip: ws.ip,
      
      send: message => {
        ws.send(message);
        return args;
      },
      json: message => {
        ws.send(JSON.stringify(message));
        return args;
      },
      close: () => {
        ws.close();
        return args;
      },
      destroy: () => {
        ws.destroy();
        return args;
      },
    
      onMessage: undefined,
      onClose: undefined,
    };
    
    ws.on("message", (message, is_binary) => {
      if (is_binary) return; // Do I need this?
      if (typeof args.onMessage !== "function") return;

      // TODO: Add type checking here.

      args.onMessage(message);
    });

    ws.on("close", () => {
      if (typeof args.onClose !== "function") return;
      args.onClose();
    });

    wings.emit(WingsEvents.openServerConsole, args);
  });
}