import * as universal_hooks from '../../../src/hooks.ts';

export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [3],
		"/About": [4],
		"/Admin/Dashboard": [5,[2]],
		"/Admin/Dashboard/Operations/Games/Add": [~6,[2]],
		"/Admin/Dashboard/Operations/Games/Delete": [~7,[2]],
		"/Admin/Dashboard/Operations/Games/Update": [~8,[2]],
		"/Admin/Dashboard/Operations/Games/Update/Game/[gameId]": [~9,[2]],
		"/Admin/Sign-In": [~10],
		"/Blank": [11],
		"/Challenges": [12],
		"/Change-Password": [~13],
		"/Community": [14],
		"/Contact": [15],
		"/Dashboard": [16],
		"/Dashboard/Add-Duels": [17],
		"/Dashboard/Games": [18],
		"/Dashboard/Matches": [19],
		"/Dashboard/Stake": [20],
		"/Forgot-Password": [~21],
		"/Forgot-Password/Verify": [~22],
		"/Games": [23],
		"/Home": [24],
		"/Rankings": [25],
		"/Rewards": [26],
		"/Select-Avatar": [~27],
		"/Sign-In": [~28],
		"/Sign-Up": [~29],
		"/Sign-Up/Verify": [~30],
		"/Tournaments": [31],
		"/Welcome": [32]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: universal_hooks.reroute || (() => {}),
	transport: universal_hooks.transport || {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';