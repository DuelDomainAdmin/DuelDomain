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
	() => import('./nodes/31')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/About": [3],
		"/Admin/Dashboard": [4],
		"/Admin/Dashboard/Operations/Games/Add": [5],
		"/Admin/Dashboard/Operations/Games/Delete": [6],
		"/Admin/Dashboard/Operations/Games/Update": [7],
		"/Admin/Dashboard/Operations/Games/Update/Game": [8],
		"/Admin/Sign-In": [~9],
		"/Blank": [10],
		"/Challenges": [11],
		"/Change-Password": [~12],
		"/Community": [13],
		"/Contact": [14],
		"/Dashboard": [15],
		"/Dashboard/Add-Duels": [16],
		"/Dashboard/Games": [17],
		"/Dashboard/Matches": [18],
		"/Dashboard/Stake": [19],
		"/Forgot-Password": [~20],
		"/Forgot-Password/Verify": [~21],
		"/Games": [22],
		"/Home": [23],
		"/Rankings": [24],
		"/Rewards": [25],
		"/Select-Avatar": [~26],
		"/Sign-In": [~27],
		"/Sign-Up": [~28],
		"/Sign-Up/Verify": [~29],
		"/Tournaments": [30],
		"/Welcome": [31]
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