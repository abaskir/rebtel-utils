import axios from 'axios';
import { API_DEFAULT_TIMEOUT_MS } from '../utils/constant.js';
import { applicationAuthorization } from '../utils/functions.js';
var noAuthClient = axios.create({
    baseURL: process.env.BASE_API,
    timeout: API_DEFAULT_TIMEOUT_MS,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': applicationAuthorization(process.env.APPLICATION_KEY),
    },
});
export var noAuth = noAuthClient;
