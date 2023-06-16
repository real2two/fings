"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WingsAdapter = void 0;
var createHyperExpressClient_1 = require("../adapters/createHyperExpressClient");
var createSsh2Client_1 = require("../adapters/createSsh2Client");
exports.WingsAdapter = {
    createHyperExpressClient: createHyperExpressClient_1.createHyperExpressClient,
    createSsh2Client: createSsh2Client_1.createSsh2Client,
};
//# sourceMappingURL=WingsAdapter.js.map