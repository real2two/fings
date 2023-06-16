"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyperExpressRoutesDownloadUpload = void 0;
var createHyperExpressClient_1 = require("../createHyperExpressClient");
var WingsEvents_1 = require("../../structures/WingsEvents");
function createHyperExpressRoutesDownloadUpload(_a) {
    var _this = this;
    var wings = _a.wings, emit = _a.emit, router = _a.router;
    router.get("/download/backup", function (req, res) {
        // GET /download/backup
        emit(WingsEvents_1.WingsEvents.downloadBackup, req, res);
    });
    router.get("/download/file", function (req, res) {
        // GET /download/file
        emit(WingsEvents_1.WingsEvents.downloadFile, req, res);
    });
    router.post("/upload/file", function (req, res) {
        // POST /upload/file
        res.atomic(function () { return __awaiter(_this, void 0, void 0, function () {
            var args;
            var _this = this;
            return __generator(this, function (_a) {
                args = (0, createHyperExpressClient_1.createWingsResultsObject)({ req: req, res: res });
                args.acceptUpload = function (save_path) { return __awaiter(_this, void 0, void 0, function () {
                    var fileReceived_1, err_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                fileReceived_1 = false;
                                return [4 /*yield*/, req.multipart(function (field) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (!field.file) return [3 /*break*/, 2];
                                                    console.log((_a = field.file) === null || _a === void 0 ? void 0 : _a.name);
                                                    if (!field.file.name)
                                                        throw new Error("Missing file name");
                                                    fileReceived_1 = true;
                                                    return [4 /*yield*/, field.write("".concat(save_path.endsWith("/") ? save_path.slice(0, -1) : save_path, "/").concat(field.file.name))];
                                                case 1:
                                                    _b.sent(); // Does this work? Check if this doesn't break folders as well.
                                                    _b.label = 2;
                                                case 2: return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 1:
                                _a.sent();
                                if (!fileReceived_1)
                                    throw new Error("No upload file was recieved");
                                return [2 /*return*/, args];
                            case 2:
                                err_1 = _a.sent();
                                // Should I add a custom error handler?
                                // Probably not, but I'll keep this comment here just in case.
                                throw err_1;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                wings.emit(WingsEvents_1.WingsEvents.uploadFile, args);
                return [2 /*return*/];
            });
        }); });
    });
}
exports.createHyperExpressRoutesDownloadUpload = createHyperExpressRoutesDownloadUpload;
//# sourceMappingURL=createHyperExpressRoutesDownloadUpload.js.map