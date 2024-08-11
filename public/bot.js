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
var _a = require('mongodb'), MongoClient = _a.MongoClient, ServerApiVersion = _a.ServerApiVersion;
var tmi = require("tmi.js");
var api_1 = require("./api/api");
var helpers_1 = require("./helpers/helpers");
var _b = require("./utility/constants"), BOT_USER_NAME = _b.BOT_USER_NAME, TOKEN = _b.TOKEN, CHANNEL_NAME = _b.CHANNEL_NAME, DB_PASS = _b.DB_PASS, DB_LOGIN = _b.DB_LOGIN, INITIAL_BALANCE_VALUE = _b.INITIAL_BALANCE_VALUE;
var uri = "mongodb+srv://".concat(DB_LOGIN, ":").concat(DB_PASS, "@cluster0.j9yo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
var dbClient = null;
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var client, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    client = new MongoClient(uri, {
                        serverApi: {
                            version: ServerApiVersion.v1,
                            strict: true,
                            deprecationErrors: true,
                        }
                    });
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, client];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    ;
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
run().then(function (res) {
    dbClient = res;
    app().then(function (r) { return console.log("APP IS RUNNING"); });
}).catch(console.dir);
var app = function () { return __awaiter(void 0, void 0, void 0, function () {
    var client;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new tmi.Client({
                    options: { debug: true },
                    identity: {
                        username: BOT_USER_NAME,
                        password: "oauth:".concat(TOKEN)
                    },
                    channels: [CHANNEL_NAME]
                })];
            case 1:
                client = _a.sent();
                return [4 /*yield*/, client.connect()];
            case 2:
                _a.sent();
                client.on('message', function (channel, tags, message, self) { return __awaiter(void 0, void 0, void 0, function () {
                    var command, _a, username, KEGLYA_DB, USERS_COLLECTION, uniqueUser;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (self || !message.startsWith('!'))
                                    return [2 /*return*/];
                                command = message
                                    .slice(1)
                                    .split(' ')
                                    .shift()
                                    .toLowerCase();
                                _a = command;
                                switch (_a) {
                                    case "прошлая": return [3 /*break*/, 1];
                                    case "баланс": return [3 /*break*/, 2];
                                }
                                return [3 /*break*/, 6];
                            case 1:
                                api_1.getPrevGame.then(function (_a) {
                                    var win = _a.win, championName = _a.championName, role = _a.role, kills = _a.kills, deaths = _a.deaths, assists = _a.assists, minions = _a.minions;
                                    var responseText = "\u041F\u0440\u043E\u0448\u043B\u0443\u044E \u0438\u0433\u0440\u0443 ".concat(win ? "победил catJam" : "проебал peepoClown", " ").concat((0, helpers_1.getChampionNameText)(championName), " ").concat((0, helpers_1.getRoleText)(role), ". \u041A\u0414\u0410 - ").concat(kills, "/").concat(deaths, "/").concat(assists, ". \u041D\u0430\u0444\u0430\u0440\u043C\u0438\u043B - ").concat(minions, " \u043C\u043E\u0431\u043E\u0432.");
                                    client.say(channel, responseText);
                                }).catch(function (err) { return console.log(err); });
                                return [2 /*return*/];
                            case 2:
                                username = tags.username;
                                KEGLYA_DB = dbClient.db("keglya_db");
                                USERS_COLLECTION = KEGLYA_DB.collection("users");
                                return [4 /*yield*/, USERS_COLLECTION.findOne({ name: username })];
                            case 3:
                                uniqueUser = _b.sent();
                                if (!!uniqueUser.name) return [3 /*break*/, 5];
                                return [4 /*yield*/, USERS_COLLECTION.insertOne({
                                        name: username,
                                        balance: INITIAL_BALANCE_VALUE,
                                        successBets: 0,
                                        totalBets: 0,
                                        activeBets: [],
                                    })];
                            case 4:
                                _b.sent();
                                _b.label = 5;
                            case 5:
                                client.say(channel, "@".concat(username, ", \u0442\u0432\u043E\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 ").concat((uniqueUser === null || uniqueUser === void 0 ? void 0 : uniqueUser.balance) || INITIAL_BALANCE_VALUE));
                                return [2 /*return*/];
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); };
