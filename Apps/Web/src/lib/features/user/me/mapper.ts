import { resolveAvatarSrc } from '$lib/features/player/avatar/dicebear';
import type { PlayerProfileResponse, User } from './types';

export function toUser(profile: PlayerProfileResponse): User {
    return {
        id: profile.id,
        username: profile.username,
        email: profile.email,
        emailVerified: profile.email_verified,
        avatar: resolveAvatarSrc(profile.avatar),
        avatarValue: profile.avatar,
        isDicebearAvatar: profile.is_dicebear_avatar,
        avatarSelected: profile.avatar_selected,
        wins: profile.wins,
        losses: profile.losses,
        rating: profile.rating,
        winRate: profile.win_rate,
        totalMatches: profile.total_matches,
        joined: profile.joined
    };
}