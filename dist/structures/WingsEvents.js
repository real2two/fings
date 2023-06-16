"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WingsEvents = exports.WingsEventsJWT = void 0;
exports.WingsEventsJWT = [
    "downloadBackup",
    "downloadFile",
    "uploadFile",
    "openServerConsole",
    "startServerTransfer",
];
var WingsEvents;
(function (WingsEvents) {
    WingsEvents["downloadBackup"] = "downloadBackup";
    WingsEvents["downloadFile"] = "downloadFile";
    WingsEvents["uploadFile"] = "uploadFile";
    WingsEvents["openServerConsole"] = "openServerConsole";
    WingsEvents["revokeServerJTIs"] = "revokeServerJTIs";
    WingsEvents["updateConfiguration"] = "updateConfiguration";
    WingsEvents["getSystemInformation"] = "getSystemInformation";
    WingsEvents["getServerLogs"] = "getServerLogs";
    WingsEvents["changeServerPowerState"] = "changeServerPowerState";
    WingsEvents["sendServerCommand"] = "sendServerCommand";
    WingsEvents["performServerInstall"] = "performServerInstall";
    WingsEvents["performServerReinstall"] = "performServerReinstall";
    WingsEvents["triggerServerSync"] = "triggerServerSync";
    WingsEvents["createServerBackup"] = "createServerBackup";
    WingsEvents["restoreServerBackup"] = "restoreServerBackup";
    WingsEvents["deleteServerBackup"] = "deleteServerBackup";
    WingsEvents["getServerFileContent"] = "getServerFileContent";
    WingsEvents["getServerFileDirectory"] = "getServerFileDirectory";
    WingsEvents["renameServerFiles"] = "renameServerFiles";
    WingsEvents["copyServerFile"] = "copyServerFile";
    WingsEvents["writeServerFileContent"] = "writeServerFileContent";
    WingsEvents["createServerFileDirectory"] = "createServerFileDirectory";
    WingsEvents["deleteServerFile"] = "deleteServerFile";
    WingsEvents["compressServerFiles"] = "compressServerFiles";
    WingsEvents["decompressServerFile"] = "decompressServerFile";
    WingsEvents["chmodServerFiles"] = "chmodServerFiles";
    WingsEvents["getPullServerFile"] = "getPullServerFile";
    WingsEvents["pullServerFile"] = "pullServerFile";
    WingsEvents["deletePullServerFile"] = "deletePullServerFile";
    WingsEvents["getServers"] = "getServers";
    WingsEvents["createServer"] = "createServer";
    WingsEvents["getServerDetails"] = "getServerDetails";
    WingsEvents["deleteServer"] = "deleteServer";
    WingsEvents["startServerTransfer"] = "startServerTransfer";
    WingsEvents["deleteIncomingServerTransfer"] = "deleteIncomingServerTransfer";
    WingsEvents["createServerTransfer"] = "createServerTransfer";
    WingsEvents["deleteOutgoingServerTransfer"] = "deleteOutgoingServerTransfer";
})(WingsEvents || (exports.WingsEvents = WingsEvents = {}));
//# sourceMappingURL=WingsEvents.js.map