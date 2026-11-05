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
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/About": [3],
		"/Blank": [4],
		"/Challenges": [5],
		"/Change-Password": [~6],
		"/Community": [7],
		"/Contact": [8],
		"/Dashboard": [9],
		"/Dashboard/Add-Duels": [10],
		"/Dashboard/Games": [11],
		"/Dashboard/Matches": [12],
		"/Dashboard/Stake": [13],
		"/Forgot-Password": [~14],
		"/Forgot-Password/Verify": [~15],
		"/Games": [16],
		"/Home": [17],
		"/Rankings": [18],
		"/Rewards": [19],
		"/Select-Avatar": [~20],
		"/Sign-In": [~21],
		"/Sign-Up": [~22],
		"/Sign-Up/Verify": [~23],
		"/Tournaments": [24],
		"/Welcome": [25]
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