interface ImportMetaEnv {
	readonly FREECOMPANY_ID: string;
	readonly HONOURARY_IDS: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module "@xivapi/nodestone" {
	export declare abstract class PageParser<P, T> {
		parse(req: { params: P }, columnsPrefix?: string): Promise<T>;
	}

	export declare abstract class PaginatedPageParser<P, T> extends PageParser<P, PaginatedParseResult<T>> {}

	export interface PaginatedParseResult<T> {
		List: T[];
		Pagination: {
			Page: number;
			PageTotal: number;
			PageNext: number | null;
			PagePrevious: number | null;
		};
	}

	export declare class FCMembers extends PaginatedPageParser<{ fcId: string }, FCMembersParseResult> {}

	export interface FCMembersParseResult {
		Avatar: string;
		ID: number;
		Name: string;
		FcRank: string;
		FcRankIcon: string;
		RankName: string;
		RankIcon: string;
		World: string;
		DC: string;
	}

	export declare class Character extends PageParser<{ characterId: string }, CharacterParseResult> {}

	export interface CharacterParseResult {
		Name: string;
		Avatar: string;
		Level: number;
		Bio: string;
		Rank: string;
		Nameday: string;
		Portrait: string;
		Race: string;
		Tribe: string;
		Gender: string;
		World: string;
		DC: string;
		Strength: number;
		Dexterity: number;
		Vitality: number;
		Intelligence: number;
		Mind: number;
		CriticalHitRate: number;
		Determination: number;
		DirectHitRate: number;
		Defense: number;
		MagicDefense: number;
		AttackPower: number;
		SkillSpeed: number;
		AttackMagicPotency: number;
		HealingMagicPotency: number;
		SpellSpeed: number;
		Tenacity: number;
		Piety: number;
		Hp: number;
		MpGpCp: number;
		MpGpCpParameterName: string;
		FreeCompany: {
			ID: string;
			Name: string;
		} | null;
	}
}
