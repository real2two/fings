"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesServerBackup = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesServerBackup(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.post("/:server/backup", function (req, res) {
        // POST /api/servers/:server/backup
        emit(WingsEvents_1.WingsEvents.createServerBackup, req, res);
    });
    router.post("/:server/backup/:backup/restore", function (req, res) {
        // POST /api/servers/:server/backup/:backup/restore
        emit(WingsEvents_1.WingsEvents.restoreServerBackup, req, res);
    });
    router.delete("/:server/backup/:backup", function (req, res) {
        // DELETE /api/servers/:server/backup/:backup
        emit(WingsEvents_1.WingsEvents.deleteServerBackup, req, res);
    });
}
exports.createHyperExpressRoutesServerBackup = createHyperExpressRoutesServerBackup;
//# sourceMappingURL=createHyperExpressRoutesServerBackup.js.map