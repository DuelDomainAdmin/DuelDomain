<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import { ROUTES } from '$lib/config/routes';
    import { notify } from '$lib/stores/notifyStore';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
    let loading = $state(false);

    const handleSubmit: SubmitFunction = () => {
        loading = true;

        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                notify.success('Password changed. Please sign in.');
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
                    <p class="text-center font-bold">Change Your Password</p>
                </div>

                <form class="mt-10" method="POST" use:enhance={handleSubmit} novalidate>
                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="newPassword"
                            type="password"
                            placeholder="New Password"
                            autocomplete="new-password"
                            aria-invalid={form?.fieldErrors?.newPassword ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.newPassword}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.newPassword}</p>
                        {/if}

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            autocomplete="new-password"
                            aria-invalid={form?.fieldErrors?.confirmPassword ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.confirmPassword}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.confirmPassword}</p>
                        {/if}
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary_grd-one w-full px-3 py-6 font-bold"
                            disabled={loading}
                        >
                            {loading ? 'Changing password...' : 'Change Password'}
                        </button>
                    </div>

                    <div class="mt-4 flex justify-center">
                        <!-- <a class="grd_one text-sm" href={ROUTES.forgotPasswordVerify}>
                            Re-enter verification code
                        </a> -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>