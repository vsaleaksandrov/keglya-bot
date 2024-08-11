"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChampionNameText = exports.getRoleText = void 0;
var _a = require("../utility/enums"), Champion = _a.Champion, Role = _a.Role;
// Текст роли
var getRoleText = function (role) {
    var ROLE = new Map([
        ["MIDDLE", "на миду"],
        ["JUNGLE", "в лесу"],
        ["TOP", "на топе"],
        ["BOTTOM", "на адк"],
        ["UTILITY", "на сапе"],
    ]);
    return ROLE.get(role);
};
exports.getRoleText = getRoleText;
// Текст чемпиона
var getChampionNameText = function (champion) {
    var CHAMPION_NAME = new Map([
        ["FIZZ", "за Физа"],
        ["NAAFIRI", "за Нафири"],
    ]);
    return CHAMPION_NAME.get(champion);
};
exports.getChampionNameText = getChampionNameText;
