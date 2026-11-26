<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import {
        BANNER_ACCEPTED_TYPES,
        MATCH_MODE_LABELS,
        PLATFORM_OPTIONS
    } from '$lib/features/admin/operations/games/constants';
    import { notify } from '$lib/stores/notifyStore';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
    let loading = $state(false);
    let bannerInput = $state<HTMLInputElement | null>(null);
    let bannerName = $state<string | null>(null);

    function handleBannerChange(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        bannerName = input.files?.[0]?.name ?? null;
    }

    const handleSubmit: SubmitFunction = () => {
        loading = true;

        return async ({ result, update }) => {
            if (result.type === 'success') {
                notify.success('Game added.');
                bannerName = null;
            }

            if (result.type === 'failure') {
                const message = result.data?.message;
                if (typeof message === 'string' && message) notify.error(message);
            }

            await update({ reset: result.type === 'success' });
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
                    <p class="text-center font-bold">Add A Game</p>
                </div>

                <form
                    class="mt-10"
                    method="POST"
                    enctype="multipart/form-data"
                    use:enhance={handleSubmit}
                    novalidate
                >
                    <div class="mb-5">
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
                            Add banner Image
                        </button>
                        <p class="text-xs text-gray">
                            {bannerName ? `Selected ${bannerName}` : 'No image selected'}
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
                            aria-invalid={form?.fieldErrors?.description ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.description}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.description}</p>
                        {/if}

                        <div>
                            <p class="text-xs text-gray mb-1 mt-2">Select platform</p>
                            <div class="flex items-center gap-4 flex-wrap">
                                {#each PLATFORM_OPTIONS as option, i (option.value)}
                                    <div>
                                        <input
                                            id="platform-{option.value}"
                                            type="radio"
                                            name="platform"
                                            value={option.value}
                                            checked={i === 0}
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
                            aria-invalid={form?.fieldErrors?.gameType ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.gameType}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.gameType}</p>
                        {/if}

                        <div>
                            <p class="text-xs text-gray mt-5 mb-1">Match Modes</p>

                            <div class="flex flex-col">
                                {#each MATCH_MODE_LABELS as label, i (label)}
                                    <input
                                        class="form-input px-3 py-1 {i > 0 ? 'mt-5' : ''}"
                                        name="matchModeName"
                                        type="text"
                                        placeholder="Match Mode {label}"
                                    />
                                    <input
                                        class="form-input px-3 py-4"
                                        name="matchModeDescription"
                                        type="text"
                                        placeholder="Description"
                                    />
                                {/each}
                            </div>
                            {#if form?.fieldErrors?.matchModes}
                                <p class="text-red-500 text-sm mt-1">{form.fieldErrors.matchModes}</p>
                            {/if}
                        </div>
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary_grd-one w-full px-3 py-4 font-bold"
                            disabled={loading}
                        >
                            {loading ? 'Adding game...' : 'Add Game'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>