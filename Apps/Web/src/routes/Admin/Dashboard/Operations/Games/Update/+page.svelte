<script lang="ts">
    import DD from '$lib/assets/DD.png';
    import { ROUTES } from '$lib/config/routes';
    import { platformLabel } from '$lib/features/admin/operations/games/format';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class="xl:px-10 px-5">
    <div>
        <img src={DD} alt="Logo" class="w-10 h-10 mt-2" />

        <div class="mt-10 flex flex-col gap-5">
            {#each data.games as game (game.id)}
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <!-- {#if game.bannerSrc}
                            <img
                                src={game.bannerSrc}
                                alt="{game.name} banner"
                                class="w-10 h-10 rounded-md object-cover"
                                loading="lazy"
                            />
                        {:else}
                            <div class="w-10 h-10 rounded-md bg-dark-bg"></div>
                        {/if} -->
                        <p class="">
                            {game.name}
                            <span class="text-gray">( {platformLabel(game.platform)} )</span>
                        </p>
                    </div>
                    <div>
                        <a
                            href="{ROUTES.adminUpdateGame}/{game.id}"
                            class="btn-purple p-2 text-white rounded-md"
                        >
                            Update Game
                        </a>
                    </div>
                </div>
            {:else}
                <p class="text-gray">No games yet.</p>
            {/each}
        </div>
    </div>
</div>