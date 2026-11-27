<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import {
        BANNER_ACCEPTED_TYPES,
        MATCH_MODE_LABELS,
        PLATFORM_OPTIONS
    } from '$lib/features/admin/operations/games/constants';
    import { matchModeLabel } from '$lib/features/admin/operations/games/format';
    import { notify } from '$lib/stores/notifyStore';
    import type { ActionData, PageData } from './$types';

    let { data, form }: { data: PageData; form: ActionData } = $props();
    let loading = $state(false);
    let bannerInput = $state<HTMLInputElement | null>(null);
    let bannerName = $state<string | null>(null);

    const modeRows = $derived(
        Array.from(
            { length: Math.max(MATCH_MODE_LABELS.length, data.game.match_modes.length) },
            (_, index) => ({ index, mode: data.game.match_modes[index] })
        )
    );

    function handleBannerChange(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        bannerName = input.files?.[0]?.name ?? null;
    }

    const handleSubmit: SubmitFunction = () => {
        loading = true;

        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                notify.success('Game updated.');
            }

            if (result.type === 'failure') {
                const message = result.data?.message;
                if (typeof message === 'string' && message) notify.error(message);
            }

            await update({ reset: false });
            loading = false;
        };
    };
</script>

<div class="xl:px-30 px-5 mt-10">
    <div class="flex justify-center">
        <img src={DD} alt="Duel Domain Logo" class="w-10 h-10" />
    </div>

    <div class="md:px-30">
        <div class="auth-container px-5 mt-10 xl:mt-5 py-5">
            <div class="xl:px-20">
                <div class="flex justify-center">
                    <p class="text-center font-bold">Update Game</p>
                </div>

                <form
                    class="mt-10"
                    method="POST"
                    enctype="multipart/form-data"
                    use:enhance={handleSubmit}
                    novalidate
                >
                    <div class="mb-5">
                        {#if data.game.bannerSrc}
                            <img
                                src={data.game.bannerSrc}
                                alt="{data.game.name} banner"
                                class="w-10 h-10 rounded-md object-cover mb-2"
                            />
                        {/if}
                        <input
                            bind:this={bannerInput}
                            class="hidden"
                            name="banner"
                            type="file"
                            accept={BANNER_ACCEPTED_TYPES.join(',')}
                            onchange={handleBannerChange}
                        />
                        <button
                            type="button"
                            class="btn-primary w-full px-3 py-4 font-bold"
                            onclick={() => bannerInput?.click()}
                            disabled={loading}
                        >
                            Update banner Image
                        </button>
                        <p class="text-xs text-gray">
                            {bannerName ? `Selected ${bannerName}` : 'Keeping the current banner'}
                        </p>
                        {#if form?.fieldErrors?.banner}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.banner}</p>
                        {/if}
                    </div>

                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="name"
                            type="text"
                            placeholder="Game Name"
                            value={data.game.name}
                            aria-invalid={form?.fieldErrors?.name ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.name}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.name}</p>
                        {/if}

                        <input
                            class="form-input px-3 py-5 mt-5"
                            name="description"
                            type="text"
                            placeholder="Game Description"
                            value={data.game.match_description}
                            aria-invalid={form?.fieldErrors?.description ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.description}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.description}</p>
                        {/if}

                        <div>
                            <p class="text-xs text-gray mb-1 mt-2">Select platform</p>
                            <div class="flex items-center gap-4 flex-wrap">
                                {#each PLATFORM_OPTIONS as option (option.value)}
                                    <div>
                                        <input
                                            id="platform-{option.value}"
                                            type="radio"
                                            name="platform"
                                            value={option.value}
                                            checked={data.game.platform === option.value}
                                        />
                                        <label for="platform-{option.value}">{option.label}</label>
                                    </div>
                                {/each}
                            </div>
                            {#if form?.fieldErrors?.platform}
                                <p class="text-red-500 text-sm mt-1">{form.fieldErrors.platform}</p>
                            {/if}
                        </div>

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="gameType"
                            type="text"
                            placeholder="Game Type"
                            value={data.game.game_type}
                            aria-invalid={form?.fieldErrors?.gameType ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.gameType}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.gameType}</p>
                        {/if}

                        <div>
                            <p class="text-xs text-gray mt-5 mb-1">Match Modes</p>

                            <div class="flex flex-col">
                                {#each modeRows as row (row.index)}
                                    <input type="hidden" name="matchModeId" value={row.mode?.id ?? ''} />
                                    <input
                                        class="form-input px-3 py-1 {row.index > 0 ? 'mt-5' : ''}"
                                        name="matchModeName"
                                        type="text"
                                        placeholder="Match Mode {matchModeLabel(row.index)}"
                                        value={row.mode?.name ?? ''}
                                    />
                                    <input
                                        class="form-input px-3 py-4"
                                        name="matchModeDescription"
                                        type="text"
                                        placeholder="Description"
                                        value={row.mode?.description ?? ''}
                                    />
                                {/each}
                            </div>
                            {#if form?.fieldErrors?.matchModes}
                                <p class="text-red-500 text-sm mt-1">{form.fieldErrors.matchModes}</p>
                            {/if}
                        </div>

                        <label class="flex items-center gap-2 mt-5">
                            <input type="checkbox" name="isActive" checked={data.game.is_active} />
                            <span>Game is active</span>
                        </label>
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary_grd-one w-full px-3 py-4 font-bold"
                            disabled={loading}
                        >
                            {loading ? 'Updating game...' : 'Update Game'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>