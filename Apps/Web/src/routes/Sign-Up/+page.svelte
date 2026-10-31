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
                notify.success('Account created. Please sign in.');
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

<div class="xl:px-30 px-5 mt-10 pb-5">
    <div class="flex justify-center">
        <img src={DD} alt="Duel Domain Logo" class="w-10 h-10" />
    </div>

    <div class="md:px-30">
        <div class="auth-container px-5 mt-10 xl:mt-5 py-5">
            <div class="xl:px-20">
                <div class="flex justify-center">
                    <p class="text-center font-bold">Create An Account</p>
                </div>

                <form class="mt-10" method="POST" use:enhance={handleSubmit} novalidate>
                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="email"
                            type="email"
                            placeholder="Email"
                            autocomplete="email"
                            value={form?.values?.email ?? ''}
                            aria-invalid={form?.fieldErrors?.email ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.email}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.email}</p>
                        {/if}

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="username"
                            type="text"
                            placeholder="Username"
                            autocomplete="username"
                            value={form?.values?.username ?? ''}
                            aria-invalid={form?.fieldErrors?.username ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.username}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.username}</p>
                        {/if}

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autocomplete="new-password"
                            aria-invalid={form?.fieldErrors?.password ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.password}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.password}</p>
                        {/if}

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
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
                            class="btn-primary_grd-two w-full px-3 py-4 font-bold"
                            disabled={loading}
                        >
                            {loading ? 'Creating account...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="mt-5 flex justify-center">
        <a class="font-bold text-center" href={ROUTES.signIn}>
            Have An Account ? <span class="grd_three">Sign In</span>
        </a>
    </div>
</div>