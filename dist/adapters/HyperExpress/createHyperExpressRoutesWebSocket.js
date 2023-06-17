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
        var onMessage;
        var onClose;
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
            onMessage: function (listener) {
                onMessage = listener;
                return args;
            },
            onClose: function (listener) {
                onClose = listener;
                return args;
            },
        };
        ws.on("message", function (message, is_binary) {
            if (is_binary)
                return ws.destroy(); // Do I need this?
            var value;
            try {
                value = JSON.parse(message);
            }
            catch (err) {
                return ws.destroy();
            }
            if (!["auth", "set state", "send command", "send logs", "send stats"].includes(value.event) ||
                !Array.isArray(value.args))
                return ws.destroy();
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
            if (typeof args.onMessage !== "function")
                return;
            onMessage(value);
        });
        ws.on("close", function () {
            if (typeof args.onClose !== "function")
                return;
            onClose();
        });
        wings.emit(WingsEvents_1.WingsEvents.openServerConsole, args);
    });
}
exports.createHyperExpressRoutesWebSocket = createHyperExpressRoutesWebSocket;
//# sourceMappingURL=createHyperExpressRoutesWebSocket.js.map