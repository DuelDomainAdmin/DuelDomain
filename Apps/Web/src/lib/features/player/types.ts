export interface PlayerAvatar {
    avatar: string;
    is_dicebear_avatar: boolean;
    avatar_selected: boolean;
}

export interface PlayerProfile {
    id: string;
    username: string;
    email: string;
    email_verified: boolean;
    avatar: string;
    is_dicebear_avatar: boolean;
    avatar_selected: boolean;
    wins: number;
    losses: number;
    rating: number;
    win_rate: number;
    total_matches: number;
    joined: string;
}