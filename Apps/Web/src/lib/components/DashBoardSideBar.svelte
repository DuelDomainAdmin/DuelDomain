

<script lang="ts">
    import DashboardNavItem from "./ui/DashboardNavItem.svelte";

    export let active: string | number = 'DashBoard';

    const navItems = [
        { name: 'DashBoard', icon: 'fa-solid fa-cubes',        link: '../Dashboard' },
        { name: 'Games',     icon: 'fa-solid fa-gamepad',      link: '../Dashboard/Games' },
        { name: 'Stake',     icon: 'fa-solid fa-wallet',       link: '../Dashboard/Stake' },
        { name: 'Matches',   icon: 'fa-solid fa-burst',        link: '../Dashboard/Matches' },
        { name: 'Tournaments', icon: 'fa-solid fa-ranking-star', link: '../' },
        { name: 'Challenges', icon: 'fa-solid fa-circle-nodes', link: '../' },
        { name: 'Rankings',  icon: 'fa-regular fa-chess-king', link: '../' },
        { name: 'History',   icon: 'fa-solid fa-timeline',     link: '../' },
    ];

    function navitemActive(item: { name: string }, index: number): boolean {
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

<div>
    <ul class="list-style-none p-0 m-0">
        {#each navItems as item, i}
            <li class={i > 0 ? 'mt-2' : ''}>
                <DashboardNavItem
                    active={navitemActive(item, i)}
                    link={item.link}
                    icon={item.icon}
                    name={item.name}
                />
            </li>
        {/each}
    </ul>
</div>