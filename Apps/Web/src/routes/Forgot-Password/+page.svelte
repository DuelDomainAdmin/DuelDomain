<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import { notify } from '$lib/stores/notifyStore';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
    let loading = $state(false);

    const handleSubmit: SubmitFunction = () => {
        loading = true;

        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                notify.success('Verification code sent.');
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
                    <p class="text-center font-bold">Forgot Your Password ?</p>
                </div>

                <form class="mt-10" method="POST" use:enhance={handleSubmit} novalidate>
                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            autocomplete="email"
                            value={form?.values?.email ?? ''}
                            aria-invalid={form?.fieldErrors?.email ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.email}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.email}</p>
                        {/if}
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary w-full px-3 py-6 font-bold"
                            disabled={loading}
                        >
                            {loading ? 'Sending code...' : 'Send Code'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>