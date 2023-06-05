import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesWebSocket({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  // GET /api/servers/:server/ws
  
  router.ws("/api/servers/:server/ws", {
    idle_timeout: 60,
    max_payload_length: 32 * 1024
  }, ws => {
    // ws.ip

    // ws.on('close', () => {

    // });
  });
}