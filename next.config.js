/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");
const path = require("path");

const basePath = "/base-path-test";

module.exports = withPlugins([], {
  webpack(config) {
    config.resolve.alias["~"] = path.join(__dirname, "./src");

    return config;
  },
  experimental: {
    basePath,
  },
  assetPrefix: basePath,
});
