
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/About" | "/Blank" | "/Challenges" | "/Community" | "/Contact" | "/Dashboard" | "/Dashboard/Add-Duels" | "/Dashboard/Games" | "/Dashboard/Matches" | "/Dashboard/Stake" | "/Forgot-Password" | "/Games" | "/Home" | "/Rankings" | "/Rewards" | "/Select-Avatar" | "/Sign-In" | "/Sign-Up" | "/Tournaments" | "/Welcome";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/About": Record<string, never>;
			"/Blank": Record<string, never>;
			"/Challenges": Record<string, never>;
			"/Community": Record<string, never>;
			"/Contact": Record<string, never>;
			"/Dashboard": Record<string, never>;
			"/Dashboard/Add-Duels": Record<string, never>;
			"/Dashboard/Games": Record<string, never>;
			"/Dashboard/Matches": Record<string, never>;
			"/Dashboard/Stake": Record<string, never>;
			"/Forgot-Password": Record<string, never>;
			"/Games": Record<string, never>;
			"/Home": Record<string, never>;
			"/Rankings": Record<string, never>;
			"/Rewards": Record<string, never>;
			"/Select-Avatar": Record<string, never>;
			"/Sign-In": Record<string, never>;
			"/Sign-Up": Record<string, never>;
			"/Tournaments": Record<string, never>;
			"/Welcome": Record<string, never>
		};
		Pathname(): "/" | "/About" | "/About/" | "/Blank" | "/Blank/" | "/Challenges" | "/Challenges/" | "/Community" | "/Community/" | "/Contact" | "/Contact/" | "/Dashboard" | "/Dashboard/" | "/Dashboard/Add-Duels" | "/Dashboard/Add-Duels/" | "/Dashboard/Games" | "/Dashboard/Games/" | "/Dashboard/Matches" | "/Dashboard/Matches/" | "/Dashboard/Stake" | "/Dashboard/Stake/" | "/Forgot-Password" | "/Forgot-Password/" | "/Games" | "/Games/" | "/Home" | "/Home/" | "/Rankings" | "/Rankings/" | "/Rewards" | "/Rewards/" | "/Select-Avatar" | "/Select-Avatar/" | "/Sign-In" | "/Sign-In/" | "/Sign-Up" | "/Sign-Up/" | "/Tournaments" | "/Tournaments/" | "/Welcome" | "/Welcome/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}