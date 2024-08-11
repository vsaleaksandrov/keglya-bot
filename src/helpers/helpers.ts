const { Champion, Role } = require("../utility/enums");

// Текст роли
export const getRoleText = (role: typeof Role): string => {
	const ROLE: Map<string, string> = new Map([
		["MIDDLE", "на миду"],
		["JUNGLE", "в лесу"],
		["TOP", "на топе"],
		["BOTTOM", "на адк"],
		["UTILITY", "на сапе"],
	])

	return ROLE.get(role);
}

// Текст чемпиона
export const getChampionNameText = (champion: typeof Champion): string => {
	const CHAMPION_NAME: Map<string, string> = new Map([
		["FIZZ", "за Физа"],
		["NAAFIRI", "за Нафири"],
	])

	return CHAMPION_NAME.get(champion);
}