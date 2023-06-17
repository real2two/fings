"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesServerFiles = void 0;
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesServerFiles(_a) {
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.get("/:server/files/contents", function (req, res) {
        // GET /api/servers/:server/files/contents
        emit(WingsEvents_1.WingsEvents.getServerFileContent, req, res);
    });
    router.get("/:server/files/list-directory", function (req, res) {
        // GET /api/servers/:server/files/list-directory
        emit(WingsEvents_1.WingsEvents.getServerFileDirectory, req, res);
    });
    router.put("/:server/files/rename", function (req, res) {
        // PUT /api/servers/:server/files/rename
        emit(WingsEvents_1.WingsEvents.renameServerFiles, req, res);
    });
    router.post("/:server/files/copy", function (req, res) {
        // POST /api/servers/:server/files/copy
        emit(WingsEvents_1.WingsEvents.copyServerFile, req, res);
    });
    router.post("/:server/files/write", function (req, res) {
        // POST /api/servers/:server/files/write
        emit(WingsEvents_1.WingsEvents.writeServerFileContent, req, res, false);
    });
    router.post("/:server/files/create-directory", function (req, res) {
        // POST /api/servers/:server/files/create-directory
        emit(WingsEvents_1.WingsEvents.createServerFileDirectory, req, res);
    });
    router.post("/:server/files/delete", function (req, res) {
        // POST /api/servers/:server/files/delete
        emit(WingsEvents_1.WingsEvents.deleteServerFile, req, res);
    });
    router.post("/:server/files/compress", function (req, res) {
        // POST /api/servers/:server/files/compress
        emit(WingsEvents_1.WingsEvents.compressServerFiles, req, res);
    });
    router.post("/:server/files/decompress", function (req, res) {
        // POST /api/servers/:server/files/decompress
        emit(WingsEvents_1.WingsEvents.decompressServerFile, req, res);
    });
    router.post("/:server/files/chmod", function (req, res) {
        // POST /api/servers/:server/files/chmod
        emit(WingsEvents_1.WingsEvents.chmodServerFiles, req, res);
    });
    router.get("/:server/files/pull", function (req, res) {
        // GET /api/servers/:server/files/pull
        emit(WingsEvents_1.WingsEvents.getPullServerFile, req, res);
    });
    router.post("/:server/files/pull", function (req, res) {
        // POST /api/servers/:server/files/pull
        emit(WingsEvents_1.WingsEvents.pullServerFile, req, res);
    });
    router.delete("/:server/files/pull/:download", function (req, res) {
        // DELETE /api/servers/:server/files/pull/:download
        emit(WingsEvents_1.WingsEvents.deletePullServerFile, req, res);
    });
}
exports.createHyperExpressRoutesServerFiles = createHyperExpressRoutesServerFiles;
//# sourceMappingURL=createHyperExpressRoutesServerFiles.js.map