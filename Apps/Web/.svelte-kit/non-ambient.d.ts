
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
		RouteId(): "/" | "/Admin" | "/Admin/Dashboard" | "/Admin/Dashboard/Operations" | "/Admin/Dashboard/Operations/Games" | "/Admin/Dashboard/Operations/Games/Add" | "/Admin/Dashboard/Operations/Games/Delete" | "/Admin/Dashboard/Operations/Games/Update" | "/Admin/Dashboard/Operations/Games/Update/Game" | "/Admin/Dashboard/Operations/Games/Update/Game/[gameId]" | "/Admin/Sign-In" | "/Admin/Sign-out" | "/Blank" | "/Change-Password" | "/Dashboard" | "/Dashboard/Add-Duels" | "/Dashboard/Games" | "/Dashboard/Matches" | "/Dashboard/Stake" | "/Forgot-Password" | "/Forgot-Password/Verify" | "/Select-Avatar" | "/Sign-In" | "/Sign-Out" | "/Sign-Up" | "/Sign-Up/Verify";
		RouteParams(): {
			"/Admin/Dashboard/Operations/Games/Update/Game/[gameId]": { gameId: string }
		};
		LayoutParams(): {
			"/": { gameId?: string };
			"/Admin": { gameId?: string };
			"/Admin/Dashboard": { gameId?: string };
			"/Admin/Dashboard/Operations": { gameId?: string };
			"/Admin/Dashboard/Operations/Games": { gameId?: string };
			"/Admin/Dashboard/Operations/Games/Add": Record<string, never>;
			"/Admin/Dashboard/Operations/Games/Delete": Record<string, never>;
			"/Admin/Dashboard/Operations/Games/Update": { gameId?: string };
			"/Admin/Dashboard/Operations/Games/Update/Game": { gameId?: string };
			"/Admin/Dashboard/Operations/Games/Update/Game/[gameId]": { gameId: string };
			"/Admin/Sign-In": Record<string, never>;
			"/Admin/Sign-out": Record<string, never>;
			"/Blank": Record<string, never>;
			"/Change-Password": Record<string, never>;
			"/Dashboard": Record<string, never>;
			"/Dashboard/Add-Duels": Record<string, never>;
			"/Dashboard/Games": Record<string, never>;
			"/Dashboard/Matches": Record<string, never>;
			"/Dashboard/Stake": Record<string, never>;
			"/Forgot-Password": Record<string, never>;
			"/Forgot-Password/Verify": Record<string, never>;
			"/Select-Avatar": Record<string, never>;
			"/Sign-In": Record<string, never>;
			"/Sign-Out": Record<string, never>;
			"/Sign-Up": Record<string, never>;
			"/Sign-Up/Verify": Record<string, never>
		};
		Pathname(): "/" | "/Admin" | "/Admin/" | "/Admin/Dashboard" | "/Admin/Dashboard/" | "/Admin/Dashboard/Operations" | "/Admin/Dashboard/Operations/" | "/Admin/Dashboard/Operations/Games" | "/Admin/Dashboard/Operations/Games/" | "/Admin/Dashboard/Operations/Games/Add" | "/Admin/Dashboard/Operations/Games/Add/" | "/Admin/Dashboard/Operations/Games/Delete" | "/Admin/Dashboard/Operations/Games/Delete/" | "/Admin/Dashboard/Operations/Games/Update" | "/Admin/Dashboard/Operations/Games/Update/" | "/Admin/Dashboard/Operations/Games/Update/Game" | "/Admin/Dashboard/Operations/Games/Update/Game/" | `/Admin/Dashboard/Operations/Games/Update/Game/${string}` & {} | `/Admin/Dashboard/Operations/Games/Update/Game/${string}/` & {} | "/Admin/Sign-In" | "/Admin/Sign-In/" | "/Admin/Sign-out" | "/Admin/Sign-out/" | "/Blank" | "/Blank/" | "/Change-Password" | "/Change-Password/" | "/Dashboard" | "/Dashboard/" | "/Dashboard/Add-Duels" | "/Dashboard/Add-Duels/" | "/Dashboard/Games" | "/Dashboard/Games/" | "/Dashboard/Matches" | "/Dashboard/Matches/" | "/Dashboard/Stake" | "/Dashboard/Stake/" | "/Forgot-Password" | "/Forgot-Password/" | "/Forgot-Password/Verify" | "/Forgot-Password/Verify/" | "/Select-Avatar" | "/Select-Avatar/" | "/Sign-In" | "/Sign-In/" | "/Sign-Out" | "/Sign-Out/" | "/Sign-Up" | "/Sign-Up/" | "/Sign-Up/Verify" | "/Sign-Up/Verify/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}