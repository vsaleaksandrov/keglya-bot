"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_BALANCE_VALUE = exports.DB_LOGIN = exports.DB_PASS = exports.CHANNEL_NAME = exports.BOT_USER_NAME = exports.RIOT_API_KEY = exports.SUMMONER_ID = exports.SUMMONER_NAME = exports.TOKEN = void 0;
require('dotenv').config();
exports.TOKEN = (_a = process.env, _a.TOKEN), exports.SUMMONER_NAME = _a.SUMMONER_NAME, exports.SUMMONER_ID = _a.SUMMONER_ID, exports.RIOT_API_KEY = _a.RIOT_API_KEY, exports.BOT_USER_NAME = _a.BOT_USER_NAME, exports.CHANNEL_NAME = _a.CHANNEL_NAME, exports.DB_PASS = _a.DB_PASS, exports.DB_LOGIN = _a.DB_LOGIN, exports.INITIAL_BALANCE_VALUE = (_b = _a.INITIAL_BALANCE_VALUE, _b === void 0 ? 20000 : _b);
