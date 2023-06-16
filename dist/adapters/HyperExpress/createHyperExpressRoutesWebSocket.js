"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesWebSocket = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesWebSocket(_a) {
    var wings = _a.wings, router = _a.router;
    router.ws("/api/servers/:server/ws", {
        idle_timeout: 60,
        max_payload_length: 32 * 1024
    }, function (ws) {
        // WS /api/servers/:server/ws
        var args = {
            ip: ws.ip,
            send: function (message) {
                ws.send(message);
                return args;
            },
            json: function (message) {
                ws.send(JSON.stringify(message));
                return args;
            },
            close: function () {
                ws.close();
                return args;
            },
            destroy: function () {
                ws.destroy();
                return args;
            },
            onMessage: undefined,
            onClose: undefined,
        };
        ws.on("message", function (message, is_binary) {
            if (is_binary)
                return; // Do I need this?
            if (typeof args.onMessage !== "function")
                return;
            // TODO: Add type checking here.
            args.onMessage(message);
        });
        ws.on("close", function () {
            if (typeof args.onClose !== "function")
                return;
            args.onClose();
        });
        wings.emit(WingsEvents_1.WingsEvents.openServerConsole, args);
    });
}
exports.createHyperExpressRoutesWebSocket = createHyperExpressRoutesWebSocket;
//# sourceMappingURL=createHyperExpressRoutesWebSocket.js.map