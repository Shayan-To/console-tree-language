#!/usr/bin/env node

const {existsSync} = require(`fs`);
const external_module_ = require(`module`);
const {createRequire, createRequireFromPath} = external_module_;
const {resolve} = require(`path`);

const relPnpApiPath = "../../../.pnp.cjs";

const absPnpApiPath = resolve(__dirname, relPnpApiPath);
const absRequire = (createRequire || createRequireFromPath)(absPnpApiPath);

if (existsSync(absPnpApiPath)) {
  if (!process.versions.pnp) {
    // Setup the environment to be able to require prettier/index.js
    require(absPnpApiPath).setup();
  }
}

const originalModuleResolveFilename = external_module_.Module._resolveFilename;
external_module_.Module._resolveFilename = function (request, parent, isMain, options) {
    return originalModuleResolveFilename.call(this, request, parent, isMain);
}

// Defer to the real prettier/index.js your application uses
module.exports = absRequire(`prettier/index.js`);
