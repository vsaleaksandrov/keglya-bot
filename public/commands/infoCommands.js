"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientMessageCallback = void 0;
var client = require("../bot").client;
var _a = require("../helpers/helpers"), getChampionNameText = _a.getChampionNameText, getRoleText = _a.getRoleText;
var getPrevGame = require("../api/api").getPrevGame;
var clientMessageCallback = function (_a) {
    var message = _a.message, channel = _a.channel, tags = _a.tags, self = _a.self;
};
exports.clientMessageCallback = clientMessageCallback;
