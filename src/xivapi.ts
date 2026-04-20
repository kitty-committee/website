import { Character, FCMembers, type FCMembersParseResult, type PaginatedParseResult } from "@xivapi/nodestone";

const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours
const FREECOMPANY = process.env.FREECOMPANY_ID!;
const HONOURARAY = process.env.HONOURARY_IDS!.split(",");

interface FcMember {
	FcRankIcon: string;
	Avatar: string;
	FcRank: string;
	Name: string;
	ID: number;
}

let cache: { data: FcMember[] | null; timestamp: number } = {
	data: null,
	timestamp: 0,
};

export async function getMembers(): Promise<FcMember[]> {
	if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) return cache.data;
	else {
		const tasks = await Promise.all([
			new FCMembers().parse({ params: { fcId: FREECOMPANY } }).then((r) => r.List),
			...HONOURARAY.map(getHonourary),
		]);

		const data = tasks.flat().filter((m) => m !== null);
		cache = { data, timestamp: Date.now() };
		return data;
	}
}

async function getHonourary(id: string): Promise<FcMember | null> {
	const result = await new Character().parse({ params: { characterId: id } });

	if (result.FreeCompany?.ID === FREECOMPANY) return null;

	return {
		...result,
		FcRank: "Honourary",
		FcRankIcon: "/honourary.png",
		ID: parseInt(id),
	};
}
