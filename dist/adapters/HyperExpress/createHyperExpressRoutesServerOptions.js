"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesServerOptions = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesServerOptions(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.get("/:server/logs", function (req, res) {
        // GET /api/servers/:server/logs
        emit(WingsEvents_1.WingsEvents.getServerLogs, req, res);
    });
    router.post("/:server/power", function (req, res) {
        // POST /api/servers/:server/power
        emit(WingsEvents_1.WingsEvents.changeServerPowerState, req, res);
    });
    router.post("/:server/commands", function (req, res) {
        // POST /api/servers/:server/commands
        emit(WingsEvents_1.WingsEvents.sendServerCommand, req, res);
    });
    router.post("/:server/install", function (req, res) {
        // POST /api/servers/:server/install
        emit(WingsEvents_1.WingsEvents.performServerInstall, req, res);
    });
    router.post("/:server/reinstall", function (req, res) {
        // POST /api/servers/:server/reinstall
        emit(WingsEvents_1.WingsEvents.performServerReinstall, req, res);
    });
    router.post("/:server/sync", function (req, res) {
        // POST /api/servers/:server/sync
        emit(WingsEvents_1.WingsEvents.triggerServerSync, req, res);
    });
    router.post("/:server/ws/deny", function (req, res) {
        // POST /api/servers/:server/ws/deny
        emit(WingsEvents_1.WingsEvents.revokeServerJTIs, req, res);
    });
}
exports.createHyperExpressRoutesServerOptions = createHyperExpressRoutesServerOptions;
//# sourceMappingURL=createHyperExpressRoutesServerOptions.js.map