import type { Platform } from './constants';

export interface MatchModePayload {
    id: string;
    name: string;
    description: string;
}

export interface CreateGamePayload {
    name: string;
    platform: Platform;
    banner: string;
    game_type: string;
    match_description: string;
    match_modes: MatchModePayload[];
}

export interface Game {
    id: string;
    name: string;
    platform: string;
    banner: string;
    game_type: string;
    match_description: string;
    match_modes: MatchModePayload[];
    is_active: boolean;
}

export interface GameListResponse {
    games: Game[];
}