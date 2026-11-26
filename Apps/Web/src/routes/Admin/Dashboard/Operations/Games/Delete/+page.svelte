<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
    import { platformLabel } from '$lib/features/admin/operations/games/format';
    import { notify } from '$lib/stores/notifyStore';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let deletingId = $state<string | null>(null);

    function confirmDelete(gameId: string) {
        const form = document.getElementById(`delete-${gameId}`);
        if (form instanceof HTMLFormElement) form.requestSubmit();
    }

    const handleDelete: SubmitFunction = ({ formData }) => {
        deletingId = String(formData.get('gameId') ?? '');

        return async ({ result, update }) => {
            if (result.type === 'success') {
                notify.success('Game deleted.');
            }

            if (result.type === 'failure') {
                const message = result.data?.message;
                if (typeof message === 'string' && message) notify.error(message);
            }

            await update();
            deletingId = null;
        };
    };
</script>

<div class="xl:px-10 px-5">
    <div>
        <img src={DD} alt="Logo" class="w-10 h-10 mt-2" />

        <div class="mt-10 flex flex-col gap-5">
            {#each data.games as game (game.id)}
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        {#if game.bannerSrc}
                            <img
                                src={game.bannerSrc}
                                alt="{game.name} banner"
                                class="w-10 h-10 rounded-md object-cover"
                                loading="lazy"
                            />
                        {:else}
                            <div class="w-10 h-10 rounded-md bg-dark-bg"></div>
                        {/if}
                        <p class="">
                            {game.name}
                            <span class="text-gray">( {platformLabel(game.platform)} )</span>
                        </p>
                    </div>
                    <div>
                        <form
                            id="delete-{game.id}"
                            method="POST"
                            use:enhance={handleDelete}
                            class="hidden"
                        >
                            <input type="hidden" name="gameId" value={game.id} />
                        </form>

                        <AlertDialog.Root>
                            <AlertDialog.Trigger
                                class="bg-red-500 p-2 text-white rounded-md"
                                disabled={deletingId === game.id}
                            >
                                {deletingId === game.id ? 'Deleting...' : 'Delete Game'}
                            </AlertDialog.Trigger>
                            <AlertDialog.Content class="" portalProps={{}}>
                                <AlertDialog.Header class="">
                                    <AlertDialog.Title class="">Are you absolutely sure?</AlertDialog.Title>
                                    <AlertDialog.Description class="">
                                        This action cannot be undone. This will permanently delete
                                        {game.name} from our servers.
                                    </AlertDialog.Description>
                                </AlertDialog.Header>
                                <AlertDialog.Footer class="">
                                    <AlertDialog.Cancel class="">Cancel</AlertDialog.Cancel>
                                    <AlertDialog.Action
                                        class="bg-red-500 text-white"
                                        onclick={() => confirmDelete(game.id)}
                                    >
                                        Continue
                                    </AlertDialog.Action>
                                </AlertDialog.Footer>
                            </AlertDialog.Content>
                        </AlertDialog.Root>
                    </div>
                </div>
            {:else}
                <p class="text-gray">No games yet.</p>
            {/each}
        </div>
    </div>
</div>