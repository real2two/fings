"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesSystem = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesSystem(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.post("/api/update", function (req, res) {
        // POST /api/update
        emit(WingsEvents_1.WingsEvents.updateConfiguration, req, res);
    });
    router.get("/api/system", function (req, res) {
        // GET /api/system
        emit(WingsEvents_1.WingsEvents.getSystemInformation, req, res);
    });
    router.get("/api/servers", function (req, res) {
        // GET /api/servers
        emit(WingsEvents_1.WingsEvents.getServers, req, res);
    });
    router.post("/api/servers", function (req, res) {
        // POST /api/servers
        emit(WingsEvents_1.WingsEvents.createServer, req, res);
    });
}
exports.createHyperExpressRoutesSystem = createHyperExpressRoutesSystem;
//# sourceMappingURL=createHyperExpressRoutesSystem.js.map