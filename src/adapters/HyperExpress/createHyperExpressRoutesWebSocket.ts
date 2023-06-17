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

    let onMessage: (message: { event: string, args: Array<any> }) => void;
    let onClose: () => void;
    
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
    
      onMessage: listener => {
        onMessage = listener;
        return args;
      },
      onClose: listener => {
        onClose = listener;
        return args;
      },
    };
    
    ws.on("message", (message, is_binary) => {
      if (is_binary) return ws.destroy(); // Do I need this?
      let value;
      try {
        value = JSON.parse(message);
      } catch(err) {
        return ws.destroy();
      }

      if (
        !["auth", "set state", "send command", "send logs", "send stats"].includes(value.event) ||
        !Array.isArray(value.args)
      ) return ws.destroy();

      switch (value.event) {
        case "auth":
        case "send command":
          if (value.args.length !== 1 || typeof value.args[0] !== "string") {
            return;
          }
          break;
        case "set state":
          if (value.args.length !== 1 || !["start", "stop", "restart", "kill"].includes(value.args[0])) {
            return;
          }
          break;
      }

      if (typeof args.onMessage !== "function") return;
      onMessage(value);
    });

    ws.on("close", () => {
      if (typeof args.onClose !== "function") return;
      onClose();
    });

    wings.emit(WingsEvents.openServerConsole, args);
  });
}