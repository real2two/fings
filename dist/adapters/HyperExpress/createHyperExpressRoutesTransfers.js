"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesTransfers = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesTransfers(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.post("/api/transfers", function (req, res) {
        // POST /api/transfers
        emit(WingsEvents_1.WingsEvents.startServerTransfer, req, res);
    });
    router.delete("/api/transfers/:server", function (req, res) {
        // DELETE /api/transfers/:server
        emit(WingsEvents_1.WingsEvents.deleteIncomingServerTransfer, req, res);
    });
}
exports.createHyperExpressRoutesTransfers = createHyperExpressRoutesTransfers;
//# sourceMappingURL=createHyperExpressRoutesTransfers.js.map