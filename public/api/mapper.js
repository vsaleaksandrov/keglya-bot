"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAYER_STAT_TO_CLIENT = void 0;
var PLAYER_STAT_TO_CLIENT = function (data) { return ({
    championName: data.championName.toUpperCase(),
    kda: data.challenges.kda,
    role: data.lane.toUpperCase(),
    name: data.riotIdGameName,
    win: data.win,
    kills: data.kills,
    deaths: data.deaths,
    assists: data.assists,
    minions: data.totalMinionsKilled + data.neutralMinionsKilled,
}); };
exports.PLAYER_STAT_TO_CLIENT = PLAYER_STAT_TO_CLIENT;
