export interface PlayerAvatar {
    avatar: string;
    is_dicebear_avatar: boolean;
    avatar_selected: boolean;
}

export interface AvatarOption {
    src: string;
    value: string;
    alt: string;
    fallback: string;
}