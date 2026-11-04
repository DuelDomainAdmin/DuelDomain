
<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { onDestroy, onMount } from 'svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import DD from '$lib/assets/DD.png';
	import { RefreshCw as RefreshCwIcon } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Field from '$lib/components/ui/field/index.js';
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ROUTES } from '$lib/config/routes';
	import { clearTempEmail, getTempEmail } from '$lib/features/auth/storage/temp-email';
	import { notify } from '$lib/stores/notifyStore';
	import type { ActionData } from './$types';

	const RESEND_COOLDOWN_SECONDS = 60;

	let { form }: { form: ActionData } = $props();

	let tempEmail = $state('');
	let code = $state('');
	let verifying = $state(false);
	let resending = $state(false);
	let cooldown = $state(0);
	let timer: ReturnType<typeof setInterval> | undefined;

	function startCooldown() {
		clearInterval(timer);
		cooldown = RESEND_COOLDOWN_SECONDS;
		timer = setInterval(() => {
			cooldown -= 1;
			if (cooldown <= 0) clearInterval(timer);
		}, 1000);
	}

	onMount(() => {
		const stored = getTempEmail();

		if (!stored) {
			notify.error('Your session expired. Please sign up again.');
			goto(ROUTES.signUp);
			return;
		}

		tempEmail = stored;
	});

	onDestroy(() => clearInterval(timer));

	function notifyFailure(data: Record<string, unknown> | undefined) {
		const message = data?.message;
		if (typeof message === 'string' && message) notify.error(message);
	}

	const handleVerify: SubmitFunction = () => {
		verifying = true;

		return async ({ result, update }) => {
			if (result.type === 'redirect') {
				clearTempEmail();
				notify.success('Email verified. Please sign in.');
			}

			if (result.type === 'failure') notifyFailure(result.data);

			await update({ reset: false });
			verifying = false;
		};
	};

	const handleResend: SubmitFunction = () => {
		resending = true;

		return async ({ result, update }) => {
			if (result.type === 'success') {
				notify.success('A new code has been sent.');
				startCooldown();
			}

			if (result.type === 'failure') notifyFailure(result.data);

			await update({ reset: false });
			resending = false;
		};
	};
</script>

<div class="flex min-h-dvh flex-col xl:px-10 px-5 pt-5">
	<img alt="Logo" class="w-10 h-10" src={DD} />

	<main class="flex flex-1 items-start justify-center pt-10 pb-10 md:pt-16">
		<form
			class="w-full max-w-md"
			method="POST"
			action="?/verify"
			use:enhance={handleVerify}
			novalidate
		>
			<input type="hidden" name="email" value={tempEmail} />
			<input type="hidden" name="code" value={code} />

			<Card.Root class="w-full bg-black text-white">
				<Card.Header class="">
					<Card.Title class="">Verify your login</Card.Title>
					<Card.Description class="">
						Enter the verification code we sent to your email address:
						<span class="font-medium">{tempEmail}</span>.
					</Card.Description>
				</Card.Header>
				<Card.Content class="">
					<Field.Field class="">
						<div class="flex items-center justify-between">
							<Field.Label for="otp-verification" class="">Verification code</Field.Label>
							<Button
								type="submit"
								form="resend-form"
								variant="outline"
								size="xs"
								class="text-black"
								disabled={resending || verifying || cooldown > 0 || !tempEmail}
							>
								<RefreshCwIcon class={resending ? 'animate-spin' : ''} />
								{cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend Code'}
							</Button>
						</div>
						<div class="flex items-center justify-center mt-2 mb-2">
							<InputOTP.Root maxlength={6} id="otp-verification" class="" required bind:value={code}>
								{#snippet children({ cells }: { cells: { char: string | null; hasFakeCaret: boolean; isActive: boolean }[] })}
									<InputOTP.Group
										class="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl"
									>
										{#each cells.slice(0, 3) as cell (cell)}
											<InputOTP.Slot {cell} class="" />
										{/each}
									</InputOTP.Group>
									<InputOTP.Separator class="mx-2">-</InputOTP.Separator>
									<InputOTP.Group
										class="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl"
									>
										{#each cells.slice(3, 6) as cell (cell)}
											<InputOTP.Slot {cell} class="" />
										{/each}
									</InputOTP.Group>
								{/snippet}
							</InputOTP.Root>
						</div>
						{#if form?.fieldErrors?.code}
							<p class="text-red-500 text-sm text-center">{form.fieldErrors.code}</p>
						{/if}
						<Field.Description class="">
							<a href="##">I no longer have access to this email address.</a>
						</Field.Description>
					</Field.Field>
				</Card.Content>
				<Card.Footer class="">
					<Field.Field class="">
						<Button
							type="submit"
							class="w-full btn-primary_grd-one"
							disabled={verifying || resending || code.length < 6 || !tempEmail}
						>
							{verifying ? 'Verifying...' : 'Verify'}
						</Button>
						<div class="text-sm text-muted-foreground">
							Having trouble signing in?
							<a href="##" class="underline underline-offset-4 transition-colors hover:text-primary">
								Contact support
							</a>
						</div>
					</Field.Field>
				</Card.Footer>
			</Card.Root>
		</form>

		<form
			id="resend-form"
			class="hidden"
			method="POST"
			action="?/resend"
			use:enhance={handleResend}
		>
			<input type="hidden" name="email" value={tempEmail} />
		</form>
	</main>

	<footer class="flex items-center justify-center gap-6 py-5 text-sm">
		<a href="##" class="text-white transition-colors hover:text-white/70">Terms</a>
		<a href="##" class="text-white transition-colors hover:text-white/70">Privacy Policy</a>
	</footer>
</div>