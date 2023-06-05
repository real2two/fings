import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";

export function createHyperExpressRoutesWebSocket(wings: Wings, router: Router) {
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