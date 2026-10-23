<script lang="ts">
    import DashBoardMobileNavItem from "./ui/DashBoardMobileNavItem.svelte";

    export let active: string | number = 'Home';

    const navItems = [
        { name: 'Home',    icon: 'fa-solid fa-house',    link: '../Dashboard', slot: 'nav' },
        { name: 'Games',   icon: 'fa-solid fa-gamepad',  link: '../Dashboard/Games/', slot: 'nav' },
        { name: 'Stake',   icon: 'fa-solid fa-wallet',   link: '../Dashboard/Stake/', slot: 'centered' },
        { name: 'Matches', icon: 'fa-solid fa-burst',    link: '../Dashboard/Matches', slot: 'nav' },
        { name: 'More',    icon: 'fa-solid fa-ellipsis', link: '../', slot: 'nav' },
    ];

    function isActive(item: { name: string }, index: number): boolean {
        if (typeof active === 'number') {
            return active === index + 1;
        }
        const parsed = parseInt(active);
        if (!isNaN(parsed)) {
            return parsed === index + 1;
        }
        return active.toLowerCase() === item.name.toLowerCase();
    }
</script>

<div class="Dashboard-mobile-navbar w-full px-2 py-4 fixed bottom-0 bg-black xl:hidden">
    <div class="flex flex-row gap-2 justify-around items-center">
        {#each navItems as item, i}
            {#if item.slot === 'centered'}
                <div class="centered">
                    <a class="flex flex-col text-xs items-center" href={item.link} title={item.name}>
                        <div class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1">
                            <i class={item.icon}></i>
                        </div>
                        <span class="font-bold text-xs">{item.name}</span>
                    </a>
                </div>
            {:else}
                <DashBoardMobileNavItem
                    active={isActive(item, i)}
                    link={item.link}
                    icon={item.icon}
                    title={item.name}
                />
            {/if}
        {/each}
    </div>
</div>