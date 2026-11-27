export interface PlayerProfileResponse {
    avatar: string;
    is_dicebear_avatar: boolean;
    avatar_selected: boolean;
    id: string;
    username: string;
    email: string;
    email_verified: boolean;
    wins: number;
    losses: number;
    rating: number;
    win_rate: number;
    total_matches: number;
    joined: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    emailVerified: boolean;
    avatar: string | null;
    avatarValue: string;
    isDicebearAvatar: boolean;
    avatarSelected: boolean;
    wins: number;
    losses: number;
    rating: number;
    winRate: number;
    totalMatches: number;
    joined: string;
}