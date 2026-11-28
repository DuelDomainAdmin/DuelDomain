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
	() => import('./nodes/22')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [3],
		"/Admin/Dashboard": [4,[2]],
		"/Admin/Dashboard/Operations/Games/Add": [~5,[2]],
		"/Admin/Dashboard/Operations/Games/Delete": [~6,[2]],
		"/Admin/Dashboard/Operations/Games/Update": [~7,[2]],
		"/Admin/Dashboard/Operations/Games/Update/Game/[gameId]": [~8,[2]],
		"/Admin/Sign-In": [~9],
		"/Blank": [10],
		"/Change-Password": [~11],
		"/Dashboard": [12],
		"/Dashboard/Add-Duels": [13],
		"/Dashboard/Games": [14],
		"/Dashboard/Matches": [15],
		"/Dashboard/Stake": [16],
		"/Forgot-Password": [~17],
		"/Forgot-Password/Verify": [~18],
		"/Select-Avatar": [~19],
		"/Sign-In": [~20],
		"/Sign-Up": [~21],
		"/Sign-Up/Verify": [~22]
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