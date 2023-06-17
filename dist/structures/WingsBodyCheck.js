"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WingsBodyCheck = void 0;
var typia_1 = __importDefault(require("typia"));
exports.WingsBodyCheck = {
    /**
     * Check if the request values are valid.
     * @param eventName The event name.
     * @param data The values for the event.
     * @returns A boolean determining if the values were correct or not.
     */
    check: function (eventName, data) {
        var checkArgTypes = exports.WingsBodyCheck[eventName];
        return typeof checkArgTypes === "function" && checkArgTypes(data);
    },
    downloadBackup: function (input) {
        var $io0 = function (input) { return "object" === typeof input.jwt && null !== input.jwt && ("string" === typeof input.jwt.server_uuid && "string" === typeof input.jwt.backup_uuid && "string" === typeof input.jwt.unique_id); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    downloadFile: function (input) {
        var $io0 = function (input) { return "object" === typeof input.jwt && null !== input.jwt && ("string" === typeof input.jwt.file_path && "string" === typeof input.jwt.server_uuid && "string" === typeof input.jwt.unique_id); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    uploadFile: function (input) {
        var $io0 = function (input) { return "object" === typeof input.headers && null !== input.headers && $io1(input.headers) && ("object" === typeof input.jwt && null !== input.jwt && ("string" === typeof input.jwt.server_uuid && "string" === typeof input.jwt.user_uuid && "string" === typeof input.jwt.unique_id)); };
        var $io1 = function (input) { return "multipart/form-data" === input["content-type"] || "string" === typeof input["content-type"] && RegExp(/^multipart\/form\x2ddata;(.*)/).test(input["content-type"]); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    revokeServerJTIs: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return Array.isArray(input.jtis) && input.jtis.every(function (elem) { return "string" === typeof elem; }); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    updateConfiguration: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return "boolean" === typeof input.debug && "string" === typeof input.uuid && "string" === typeof input.token_id && "string" === typeof input.token && ("object" === typeof input.api && null !== input.api && $io2(input.api)) && ("object" === typeof input.system && null !== input.system && $io4(input.system)) && (Array.isArray(input.allowed_mounts) && input.allowed_mounts.every(function (elem) { return "string" === typeof elem; })) && "string" === typeof input.remote; };
        var $io2 = function (input) { return "string" === typeof input.host && "number" === typeof input.port && ("object" === typeof input.sll && null !== input.sll && ("boolean" === typeof input.sll.enabled && "string" === typeof input.sll.cert && "string" === typeof input.sll.key)) && "number" === typeof input.upload_limit; };
        var $io4 = function (input) { return "string" === typeof input.data && ("object" === typeof input.sftp && null !== input.sftp && "number" === typeof input.sftp.bind_port); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    getSystemInformation: function (input) {
        var $io0 = function (input) { return "object" === typeof input.query && null !== input.query && false === Array.isArray(input.query) && $io1(input.query); };
        var $io1 = function (input) { return undefined === input.v || "string" === typeof input.v; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    getServerLogs: function (input) {
        var $io0 = function (input) { return "object" === typeof input.query && null !== input.query && false === Array.isArray(input.query) && $io1(input.query); };
        var $io1 = function (input) { return undefined === input.size || "string" === typeof input.size; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    changeServerPowerState: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return ("start" === input.action || "stop" === input.action || "kill" === input.action || "restart" === input.action) && "number" === typeof input.wait_seconds; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    sendServerCommand: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return Array.isArray(input.commands) && input.commands.every(function (elem) { return "string" === typeof elem; }); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    performServerInstall: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    performServerReinstall: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    triggerServerSync: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    createServerBackup: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return ("wings" === input.adapter || "s3" === input.adapter) && "string" === typeof input.uuid && "string" === typeof input.ignore; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    restoreServerBackup: (function () {
        var restoreServerBackup = function (input) {
            var $io0 = function (input) { return true && "string" === typeof input.adapter && ("object" === typeof input.body && null !== input.body && $io1(input.body)); };
            var $io1 = function (input) { return ("wings" === input.adapter || "s3" === input.adapter) && "boolean" === typeof input.truncate_directory && (undefined === input.download_url || "string" === typeof input.download_url); };
            return "object" === typeof input && null !== input && $io0(input);
        };
        return (function (input) {
            if (!restoreServerBackup(input))
                return false;
            if (input.adapter === "s3" && typeof (input === null || input === void 0 ? void 0 : input.download_url) !== "string")
                return false;
            return true;
        });
    })(),
    deleteServerBackup: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    getServerFileContent: function (input) {
        var $io0 = function (input) { return "object" === typeof input.query && null !== input.query && $io1(input.query); };
        var $io1 = function (input) { return (undefined === input.download || "string" === typeof input.download) && "string" === typeof input.file; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    getServerFileDirectory: function (input) {
        var $io0 = function (input) { return "object" === typeof input.query && null !== input.query && "string" === typeof input.query.directory; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    renameServerFiles: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return "string" === typeof input.root && (Array.isArray(input.files) && input.files.every(function (elem) { return "object" === typeof elem && null !== elem && $io2(elem); })); };
        var $io2 = function (input) { return "string" === typeof input.from && "string" === typeof input.to; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    copyServerFile: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && "string" === typeof input.body.location; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    writeServerFileContent: function (input) {
        var $io0 = function (input) { return "object" === typeof input.headers && null !== input.headers && $io1(input.headers) && ("object" === typeof input.query && null !== input.query && "string" === typeof input.query.file); };
        var $io1 = function (input) { return "text/plain" === input["content-type"] || "string" === typeof input["content-type"] && RegExp(/^text\/plain;(.*)/).test(input["content-type"]); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    createServerFileDirectory: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && ("string" === typeof input.body.name && "string" === typeof input.body.path); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    deleteServerFile: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return Array.isArray(input.files) && input.files.every(function (elem) { return "string" === typeof elem; }) && "string" === typeof input.root; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    compressServerFiles: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return Array.isArray(input.files) && input.files.every(function (elem) { return "string" === typeof elem; }) && "string" === typeof input.root; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    decompressServerFile: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && ("string" === typeof input.body.file && "string" === typeof input.body.root); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    chmodServerFiles: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return "string" === typeof input.root && (Array.isArray(input.files) && input.files.every(function (elem) { return "object" === typeof elem && null !== elem && $io2(elem); })); };
        var $io2 = function (input) { return "string" === typeof input.file && "number" === typeof input.mode; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    getPullServerFile: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    pullServerFile: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && $io1(input.body); };
        var $io1 = function (input) { return "string" === typeof input.url && (undefined === input.directory || "string" === typeof input.directory) && "string" === typeof input.file_name && (undefined === input.foreground || "boolean" === typeof input.foreground) && "string" === typeof input.root && "boolean" === typeof input.use_header; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    deletePullServerFile: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    getServers: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    createServer: function (input) {
        var $io0 = function (input) { return "object" === typeof input.body && null !== input.body && ("string" === typeof input.body.uuid && "boolean" === typeof input.body.start_on_completion); };
        return "object" === typeof input && null !== input && $io0(input);
    },
    getServerDetails: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    deleteServer: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    startServerTransfer: function (input) {
        var $io0 = function (input) { return "object" === typeof input.jwt && null !== input.jwt && "string" === typeof input.jwt.sub && ("object" === typeof input.body && null !== input.body && $io2(input.body)); };
        var $io2 = function (input) { return "string" === typeof input.url && "string" === typeof input.token && (undefined === input.server || "object" === typeof input.server && null !== input.server && $io3(input.server)); };
        var $io3 = function (input) { return "string" === typeof input.uuid && "boolean" === typeof input.start_on_completion; };
        return "object" === typeof input && null !== input && $io0(input);
    },
    deleteIncomingServerTransfer: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    createServerTransfer: function (input) {
        return "object" === typeof input && null !== input && true;
    },
    deleteOutgoingServerTransfer: function (input) {
        return "object" === typeof input && null !== input && true;
    },
};
//# sourceMappingURL=WingsBodyCheck.js.map