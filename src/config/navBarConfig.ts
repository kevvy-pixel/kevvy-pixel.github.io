import {
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = {
	links: [
		{ name: "科研项目", url: "/", icon: "material-symbols:science-outline" },
		{
			name: "项目归档",
			url: "/archive/",
			icon: "material-symbols:folder-open-outline",
		},
		{ name: "研究标签", url: "/tags/", icon: "material-symbols:tag-rounded" },
		{ name: "关于我", url: "/about/", icon: "material-symbols:person-outline" },
	],
};
