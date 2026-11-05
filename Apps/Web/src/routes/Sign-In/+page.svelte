<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import { ROUTES } from '$lib/config/routes';
    import { notify } from '$lib/stores/notifyStore';
    type SignInForm = {
        fieldErrors?: { email?: string; password?: string };
        values?: { email?: string };
    };

    let { form }: { form: SignInForm } = $props();
    let loading = $state(false);

    const handleSubmit: SubmitFunction = () => {
        loading = true;

        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                notify.success('Welcome back.');
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
                    <p class="text-center font-bold">Sign into your Account</p>
                </div>

                <form class="mt-10" method="POST" use:enhance={handleSubmit} novalidate>
                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="email"
                            type="text"
                            placeholder="Email"
                            autocomplete="username"
                            value={form?.values?.email ?? ''}
                            aria-invalid={form?.fieldErrors?.email ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.email}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.email}</p>
                        {/if}

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autocomplete="current-password"
                            aria-invalid={form?.fieldErrors?.password ? 'true' : undefined}
                        />
                        {#if form?.fieldErrors?.password}
                            <p class="text-red-500 text-sm mt-1">{form.fieldErrors.password}</p>
                        {/if}
                    </div>

                    <div class="mt-4">
                        <a class="grd_one" href={ROUTES.forgotPassword}>Forgot Password ?</a>
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary_grd-one w-full px-3 py-4 font-bold"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="mt-5 flex justify-center">
        <a class="font-bold text-center" href={ROUTES.signUp}>
            Don’t Have An Account ? <span class="grd_three">Sign Up</span>
        </a>
    </div>
</div>