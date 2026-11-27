<script lang="ts">
    import { goto } from '$app/navigation';
    import DD from '$lib/assets/DD.png';
    import { ROUTES } from '$lib/config/routes';
    import { notify } from '$lib/stores/notifyStore';

    async function signOut() {
        const response = await fetch(ROUTES.adminSignOut, { method: 'POST' });

        if (!response.ok) {
            notify.error('Could not sign out. Please try again.');
            return;
        }

        notify.success('Signed out.');
        await goto(ROUTES.adminSignIn, { invalidateAll: true });
    }
</script>

<div class="xl:px-10 px-5">
    <main>
        <div class="flex items-center justify-between">
            <img src={DD} alt="Logo" class="w-10 h-10 mt-2" />

            <button class="bg-red-500 p-2 rounded-md text-xs" onclick={signOut}>Sign-out</button>
        </div>

        <div class="mt-5">
            <h1 class="text-center font-bold text-lg">Welcome Admin. You have all the Power !</h1>
        </div>

        <div>
            <p class="text-center text-gray mt-5">game operations/</p>
            <div class="flex items-center justify-center gap-5 flex-wrap mt-3">
                <a class="link-primary p-2 rounded-md" href={ROUTES.adminAddGame}>Add-game</a>
                <a class="link-purple p-2 rounded-md" href={ROUTES.adminUpdateGames}>Update-game</a>
                <a class="bg-red-500 p-2 rounded-md" href={ROUTES.adminDeleteGame}>Delete-game</a>
            </div>
        </div>
    </main>
</div>