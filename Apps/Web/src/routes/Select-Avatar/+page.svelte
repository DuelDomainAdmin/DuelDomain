<script lang="ts">
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    import type { SubmitFunction } from '@sveltejs/kit';
    import Avatar from '$lib/components/ui/Avatar.svelte';
    import { generateAvatars } from '$lib/features/player/avatar/generator';
    import type { AvatarOption } from '$lib/features/player/avatar/types';
    import { notify } from '$lib/stores/notifyStore';

    let avatars = $state<AvatarOption[]>([]);
    let selectedAvatar = $state<string | null>(null);
    let saving = $state(false);

    onMount(() => {
        avatars = generateAvatars();
    });

    function toggleAvatar(value: string) {
        selectedAvatar = selectedAvatar === value ? null : value;
    }

    function regenerateAvatars() {
        avatars = generateAvatars();
        selectedAvatar = null;
    }

    const handleSubmit: SubmitFunction = () => {
        saving = true;

        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                notify.success('Avatar saved.');
            }

            if (result.type === 'failure') {
                const message = result.data?.message;
                if (typeof message === 'string' && message) notify.error(message);
            }

            await update({ reset: false });
            saving = false;
        };
    };
</script>

<div class="xl:px-20 px-5 mt-20">
    <div class="flex flex-col justify-center items-center">
        <p class="text-center text-2xl grd_one font-bold">Select Your Avatar</p>
        <button
            type="button"
            class="btn-secondary--rounded rounded-btn text-sm px-4 py-2 mt-4"
            onclick={regenerateAvatars}
            disabled={saving}
        >
            <i class="fa-solid fa-rotate-right mr-2"></i>
            New Set
        </button>
    </div>

    <div class="flex flex-row flex-wrap items-center justify-center gap-8 mt-10">
        {#each avatars as avatar (avatar.value)}
            <Avatar
                src={avatar.src}
                alt={avatar.alt}
                fallback={avatar.fallback}
                isSelected={selectedAvatar === avatar.value}
                onClick={() => toggleAvatar(avatar.value)}
            />
        {/each}
    </div>

    {#if selectedAvatar}
        <form class="flex justify-center mt-10" method="POST" use:enhance={handleSubmit}>
            <input type="hidden" name="avatar" value={selectedAvatar} />
            <button type="submit" class="btn-primary--rounded px-6 py-2" disabled={saving}>
                {saving ? 'Saving...' : 'Confirm Selection'}
            </button>
        </form>
    {/if}
</div>