import type { User } from '$lib/features/user/me/types';

declare global {
    namespace App {
        interface Locals {
            token: string | null;
            adminToken: string | null;
        }
        interface PageData {
            user?: User | null;
        }
    }
}