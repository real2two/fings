"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesServer = void 0;
var hyper_express_1 = require("hyper-express");
var _1 = require("./");
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesServer(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    var serverRouter = new hyper_express_1.Router();
    serverRouter.get("/:server", function (req, res) {
        // GET /api/servers/:server
        emit(WingsEvents_1.WingsEvents.getServerDetails, req, res);
    });
    serverRouter.delete("/:server", function (req, res) {
        // DELETE /api/servers/:server
        emit(WingsEvents_1.WingsEvents.deleteServer, req, res);
    });
    (0, _1.createHyperExpressRoutesServerBackup)({ wings: wings, emit: emit, router: serverRouter });
    (0, _1.createHyperExpressRoutesServerFiles)({ wings: wings, emit: emit, router: serverRouter });
    (0, _1.createHyperExpressRoutesServerOptions)({ wings: wings, emit: emit, router: serverRouter });
    (0, _1.createHyperExpressRoutesServerTransfer)({ wings: wings, emit: emit, router: serverRouter });
    router.use("/api/servers", serverRouter);
}
exports.createHyperExpressRoutesServer = createHyperExpressRoutesServer;
//# sourceMappingURL=createHyperExpressRoutesServer.js.map