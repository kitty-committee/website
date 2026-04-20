const BANNERS = [
	() => import("../../assets/banners/ffxiv_07072025_151021_661.png"),
	() => import("../../assets/banners/ffxiv_12012025_214531_229.png"),
	() => import("../../assets/banners/ffxiv_28052025_235242_761.png"),
	() => import("../../assets/banners/ffxiv_17062025_222424_335.png"),
	() => import("../../assets/banners/ffxiv_22032025_155245_007.png"),
	() => import("../../assets/banners/ffxiv_26082025_184309_071.png"),
	() => import("../../assets/banners/ffxiv_17012026_000959_274.png"),
	() => import("../../assets/banners/ffxiv_19122025_144500_990.png"),
	() => import("../../assets/banners/ffxiv_26082025_155744_748.png"),
];

export async function getRandomBanner() {
	return await BANNERS[Math.floor(Math.random() * BANNERS.length)]().then((mod) => mod.default);
}
