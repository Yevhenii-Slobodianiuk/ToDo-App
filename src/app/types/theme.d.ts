import { CSSProperties } from "react";

export interface IMainColors {
	white?: string;
	red?: string;
	green?: string;
	grey?: string;
	graphite?: string;
}

export interface IAccentColors {
	strokeGrey?: string;
	lightGrey?: string;
	lightGreen?: string;
}

interface IPalette {
	mainColors: IMainColors;
	accentColors: IAccentColors;
}

interface IPaletteColors {
	white?: string;
	red?: string;
	green?: string;
	grey?: string;
	graphite?: string;
}

interface ITypoVariants {
	Input: CSSProperties;
	HHeader: CSSProperties;
	SubHeader: CSSProperties;
	TaskHeader: CSSProperties;
	TaskDesc: CSSProperties;
}

declare module "@mui/material/styles" {
	interface PaletteColor extends IPaletteColors {}

	interface SimplePaletteColorOptions extends IPaletteColors {}

	interface Palette extends IPalette {}

	interface PaletteOptions extends IPalette {}

	interface TypographyVariants extends ITypoVariants {}

	interface TypographyVariantsOptions extends ITypoVariants {}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides extends Record<keyof ITypoVariants, true> {}
}

