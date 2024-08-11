require('dotenv').config();

export const {
	TOKEN,
	SUMMONER_NAME,
	SUMMONER_ID,
	RIOT_API_KEY,
	BOT_USER_NAME,
	CHANNEL_NAME,
	DB_PASS,
	DB_LOGIN,
	INITIAL_BALANCE_VALUE = 20000,
} = process.env;