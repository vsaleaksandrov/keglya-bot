export type PlayerStatResponse = {
	championName: string;
	challenges: {
		kda: number;
	}
	riotIdGameName: string;
	lane: string;
	name: string;
	win: boolean;
	kills: number;
	deaths: number;
	assists: number;
	totalMinionsKilled: number;
	neutralMinionsKilled: number;
}

export type PlayerStatResponseMapper = {
	championName: string;
	kda: number;
	role: string;
	name: string
	win: boolean;
	kills: number;
	deaths: number;
	assists: number;
	minions: number;
}