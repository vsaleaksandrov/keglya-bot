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
exports.getCurrentGame = exports.getPrevGame = void 0;
var _a = require("../utility/constants"), SUMMONER_NAME = _a.SUMMONER_NAME, RIOT_API_KEY = _a.RIOT_API_KEY, SUMMONER_ID = _a.SUMMONER_ID;
var PLAYER_STAT_TO_CLIENT = require("./mapper").PLAYER_STAT_TO_CLIENT;
exports.getPrevGame = new Promise(function (resolve, reject) {
    return __awaiter(this, void 0, void 0, function () {
        var responseUser, PUUID_1, lastGames, lastGameStats, currentPlayer, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch("https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/".concat(SUMMONER_NAME, "/").concat(SUMMONER_ID, "?api_key=").concat(RIOT_API_KEY))
                            .then(function (res) { return res.json(); })];
                case 1:
                    responseUser = _a.sent();
                    if (responseUser.status && responseUser.status.status_code === 403) {
                        reject(Error("RIOT_API_KEY устарел"));
                    }
                    PUUID_1 = responseUser.puuid;
                    return [4 /*yield*/, fetch("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/".concat(PUUID_1, "/ids?start=0&count=5&api_key=").concat(RIOT_API_KEY))
                            .then(function (res) { return res.json(); })];
                case 2:
                    lastGames = _a.sent();
                    return [4 /*yield*/, fetch("https://europe.api.riotgames.com/lol/match/v5/matches/".concat(lastGames[0], "?api_key=").concat(RIOT_API_KEY)).then(function (res) { return res.json(); })];
                case 3:
                    lastGameStats = _a.sent();
                    currentPlayer = lastGameStats.info.participants.find(function (player) {
                        return player.puuid === PUUID_1;
                    });
                    return [2 /*return*/, resolve(PLAYER_STAT_TO_CLIENT(currentPlayer))];
                case 4:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [2 /*return*/, reject(e_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
});
var getCurrentGame = function () {
    return __awaiter(this, void 0, void 0, function () {
        var responseUser, PUUID;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/".concat(SUMMONER_NAME, "/").concat(SUMMONER_ID, "?api_key=").concat(RIOT_API_KEY))
                        .then(function (res) { return res.json(); })];
                case 1:
                    responseUser = _a.sent();
                    PUUID = responseUser.puuid;
                    return [2 /*return*/, new Promise(function (done, reject) {
                            setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                                var currentGame, e_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, fetch("https://euw1.api.riotgames.com/lol/spectator/v5/active-games/by-summoner/".concat(PUUID, "?api_key=").concat(RIOT_API_KEY))
                                                    .then(function (res) { return res.json(); })];
                                        case 1:
                                            currentGame = _a.sent();
                                            console.log(currentGame);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_2 = _a.sent();
                                            console.log(e_2);
                                            reject();
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); }, 1000);
                        })];
            }
        });
    });
};
exports.getCurrentGame = getCurrentGame;
