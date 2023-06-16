"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesServerTransfer = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesServerTransfer(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.post("/:server/transfer", function (req, res) {
        // POST /api/servers/:server/transfer
        emit(WingsEvents_1.WingsEvents.createServerTransfer, req, res);
    });
    router.delete("/:server/transfer", function (req, res) {
        // DELETE /api/servers/:server/transfer
        emit(WingsEvents_1.WingsEvents.deleteOutgoingServerTransfer, req, res);
    });
}
exports.createHyperExpressRoutesServerTransfer = createHyperExpressRoutesServerTransfer;
//# sourceMappingURL=createHyperExpressRoutesServerTransfer.js.map