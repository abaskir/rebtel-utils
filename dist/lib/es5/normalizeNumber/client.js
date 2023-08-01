"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noAuth = void 0;
var axios_1 = require("axios");
var constant_js_1 = require("../utils/constant.js");
var functions_js_1 = require("../utils/functions.js");
var noAuthClient = axios_1.default.create({
    baseURL: process.env.BASE_API,
    timeout: constant_js_1.API_DEFAULT_TIMEOUT_MS,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': (0, functions_js_1.applicationAuthorization)(process.env.APPLICATION_KEY),
    },
});
exports.noAuth = noAuthClient;
