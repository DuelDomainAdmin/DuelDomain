
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
		RouteId(): "/" | "/About" | "/Admin" | "/Admin/Dashboard" | "/Admin/Dashboard/Operations" | "/Admin/Dashboard/Operations/Games" | "/Admin/Dashboard/Operations/Games/Add" | "/Admin/Dashboard/Operations/Games/Delete" | "/Admin/Dashboard/Operations/Games/Update" | "/Admin/Dashboard/Operations/Games/Update/Game" | "/Admin/Sign-In" | "/Blank" | "/Challenges" | "/Change-Password" | "/Community" | "/Contact" | "/Dashboard" | "/Dashboard/Add-Duels" | "/Dashboard/Games" | "/Dashboard/Matches" | "/Dashboard/Stake" | "/Forgot-Password" | "/Forgot-Password/Verify" | "/Games" | "/Home" | "/Rankings" | "/Rewards" | "/Select-Avatar" | "/Sign-In" | "/Sign-Out" | "/Sign-Up" | "/Sign-Up/Verify" | "/Tournaments" | "/Welcome";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/About": Record<string, never>;
			"/Admin": Record<string, never>;
			"/Admin/Dashboard": Record<string, never>;
			"/Admin/Dashboard/Operations": Record<string, never>;
			"/Admin/Dashboard/Operations/Games": Record<string, never>;
			"/Admin/Dashboard/Operations/Games/Add": Record<string, never>;
			"/Admin/Dashboard/Operations/Games/Delete": Record<string, never>;
			"/Admin/Dashboard/Operations/Games/Update": Record<string, never>;
			"/Admin/Dashboard/Operations/Games/Update/Game": Record<string, never>;
			"/Admin/Sign-In": Record<string, never>;
			"/Blank": Record<string, never>;
			"/Challenges": Record<string, never>;
			"/Change-Password": Record<string, never>;
			"/Community": Record<string, never>;
			"/Contact": Record<string, never>;
			"/Dashboard": Record<string, never>;
			"/Dashboard/Add-Duels": Record<string, never>;
			"/Dashboard/Games": Record<string, never>;
			"/Dashboard/Matches": Record<string, never>;
			"/Dashboard/Stake": Record<string, never>;
			"/Forgot-Password": Record<string, never>;
			"/Forgot-Password/Verify": Record<string, never>;
			"/Games": Record<string, never>;
			"/Home": Record<string, never>;
			"/Rankings": Record<string, never>;
			"/Rewards": Record<string, never>;
			"/Select-Avatar": Record<string, never>;
			"/Sign-In": Record<string, never>;
			"/Sign-Out": Record<string, never>;
			"/Sign-Up": Record<string, never>;
			"/Sign-Up/Verify": Record<string, never>;
			"/Tournaments": Record<string, never>;
			"/Welcome": Record<string, never>
		};
		Pathname(): "/" | "/About" | "/About/" | "/Admin" | "/Admin/" | "/Admin/Dashboard" | "/Admin/Dashboard/" | "/Admin/Dashboard/Operations" | "/Admin/Dashboard/Operations/" | "/Admin/Dashboard/Operations/Games" | "/Admin/Dashboard/Operations/Games/" | "/Admin/Dashboard/Operations/Games/Add" | "/Admin/Dashboard/Operations/Games/Add/" | "/Admin/Dashboard/Operations/Games/Delete" | "/Admin/Dashboard/Operations/Games/Delete/" | "/Admin/Dashboard/Operations/Games/Update" | "/Admin/Dashboard/Operations/Games/Update/" | "/Admin/Dashboard/Operations/Games/Update/Game" | "/Admin/Dashboard/Operations/Games/Update/Game/" | "/Admin/Sign-In" | "/Admin/Sign-In/" | "/Blank" | "/Blank/" | "/Challenges" | "/Challenges/" | "/Change-Password" | "/Change-Password/" | "/Community" | "/Community/" | "/Contact" | "/Contact/" | "/Dashboard" | "/Dashboard/" | "/Dashboard/Add-Duels" | "/Dashboard/Add-Duels/" | "/Dashboard/Games" | "/Dashboard/Games/" | "/Dashboard/Matches" | "/Dashboard/Matches/" | "/Dashboard/Stake" | "/Dashboard/Stake/" | "/Forgot-Password" | "/Forgot-Password/" | "/Forgot-Password/Verify" | "/Forgot-Password/Verify/" | "/Games" | "/Games/" | "/Home" | "/Home/" | "/Rankings" | "/Rankings/" | "/Rewards" | "/Rewards/" | "/Select-Avatar" | "/Select-Avatar/" | "/Sign-In" | "/Sign-In/" | "/Sign-Out" | "/Sign-Out/" | "/Sign-Up" | "/Sign-Up/" | "/Sign-Up/Verify" | "/Sign-Up/Verify/" | "/Tournaments" | "/Tournaments/" | "/Welcome" | "/Welcome/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}