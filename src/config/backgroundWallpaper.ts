import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "banner",
	playerEnable: false,
	src: {
		desktop: "/assets/images/research-banner.svg",
		mobile: "/assets/images/research-banner.svg",
	},
	common: {
		dimOpacity: 0.34,
		homeText: {
			enable: true,
			title: "用数据理解系统，用模型连接现实",
			subtitle: [
				"Data Science · Intelligent Sensing · Optimization",
				"面向真实问题的建模、实验与算法研究",
			],
			titleSize: "3.6rem",
			subtitleSize: "1.25rem",
			typewriter: {
				enable: true,
				speed: 70,
				deleteSpeed: 35,
				pauseTime: 2200,
			},
		},
		postInfo: { mode: "description" },
		navbar: { transparentMode: "semifull", blur: 12 },
		waves: { enable: { desktop: false, mobile: false } },
		gradient: { enable: true, height: "28%" },
		carousel: { enable: false },
	},
	banner: { position: "center" },
};
