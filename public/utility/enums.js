"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champion = exports.Role = void 0;
var Role;
(function (Role) {
    Role["MIDDLE"] = "MIDDLE";
    Role["JUNGLE"] = "JUNGLE";
    Role["TOP"] = "TOP";
    Role["BOTTOM"] = "BOTTOM";
    Role["UTILITY"] = "UTILITY";
})(Role || (exports.Role = Role = {}));
var Champion;
(function (Champion) {
    Champion["FIZZ"] = "FIZZ";
    Champion["NAAFIRI"] = "NAAFIRI";
})(Champion || (exports.Champion = Champion = {}));
module.exports = { Role: Role, Champion: Champion };
