import { createHyperExpressClient } from "../adapters/createHyperExpressClient";
import { createSsh2Client } from "../adapters/createSsh2Client";

export const WingsAdapter = {
  createHyperExpressClient,
  createSsh2Client,
};
