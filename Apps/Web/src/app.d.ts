import type { PlayerProfile } from '$lib/features/player/types';

declare global {
    namespace App {
        interface Locals {
            token: string | null;
        }
        interface PageData {
            user?: PlayerProfile;
        }
    }
}