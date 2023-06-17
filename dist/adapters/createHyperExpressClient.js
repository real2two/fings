"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.createWingsResultsObject = exports.createHyperExpressClient = void 0;
var hyper_express_1 = require("hyper-express");
var HyperExpress_1 = require("./HyperExpress");
function createHyperExpressClient(wings) {
    var _this = this;
    var emit = function (eventName, req, res, json) {
        if (json === void 0) { json = true; }
        res.atomic(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            var _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _b = (_a = wings).emit;
                        _c = [eventName];
                        _d = createWingsResultsObject;
                        _g = {
                            req: req,
                            res: res
                        };
                        if (!["GET", "DELETE", "OPTIONS", "HEAD"].includes(req.method)) return [3 /*break*/, 1];
                        _e = null;
                        return [3 /*break*/, 6];
                    case 1:
                        if (!json) return [3 /*break*/, 3];
                        return [4 /*yield*/, req.json({})];
                    case 2:
                        _f = _h.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, req.text()];
                    case 4:
                        _f = _h.sent();
                        _h.label = 5;
                    case 5:
                        _e = (_f);
                        _h.label = 6;
                    case 6:
                        _b.apply(_a, _c.concat([_d.apply(void 0, [(_g.body = _e,
                                    _g)])]));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    var router = new hyper_express_1.Router();
    (0, HyperExpress_1.createHyperExpressRoutesDownloadUpload)({ wings: wings, emit: emit, router: router });
    (0, HyperExpress_1.createHyperExpressRoutesTransfers)({ wings: wings, emit: emit, router: router });
    (0, HyperExpress_1.createHyperExpressRoutesWebSocket)({ wings: wings, emit: emit, router: router });
    (0, HyperExpress_1.createHyperExpressRoutesSystem)({ wings: wings, emit: emit, router: router });
    (0, HyperExpress_1.createHyperExpressRoutesServer)({ wings: wings, emit: emit, router: router });
    return router;
}
exports.createHyperExpressClient = createHyperExpressClient;
function createWingsResultsObject(_a) {
    var req = _a.req, res = _a.res, body = _a.body;
    var args = {
        headers: req.headers,
        query: __assign({}, req.query_parameters),
        params: req.path_parameters || {},
        jwt: {},
        body: body,
        status: function (status) {
            res.status(status);
            return args;
        },
        sendStatus: function (status) {
            res.status(status).send(status.toString());
            return args;
        },
        send: function (body) {
            res.send(body);
            return args;
        },
        json: function (body) {
            res.json(body);
            return args;
        },
        stream: function (readable) {
            res.stream(readable);
            return args;
        }
    };
    return args;
}
exports.createWingsResultsObject = createWingsResultsObject;
//# sourceMappingURL=createHyperExpressClient.js.map