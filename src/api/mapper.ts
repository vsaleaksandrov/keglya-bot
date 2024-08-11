import { PlayerStatResponse, PlayerStatResponseMapper } from "../utility/types";

export const PLAYER_STAT_TO_CLIENT = (data: PlayerStatResponse) : PlayerStatResponseMapper => ({
	championName: data.championName.toUpperCase(),
	kda: data.challenges.kda,
	role: data.lane.toUpperCase(),
	name: data.riotIdGameName,
	win: data.win,
	kills: data.kills,
	deaths: data.deaths,
	assists: data.assists,
	minions: data.totalMinionsKilled + data.neutralMinionsKilled,
});