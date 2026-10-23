<script lang="ts">
  export let link: string | undefined = undefined;
  export let icon: string;
  export let platform: string;
  export let active: boolean = false;
</script>

{#if link}
  <a href={link}>
    <div
      class="px-4 py-2 rounded-md flex flex-row gap-1 items-center dashboard-platform-select--card text-xs"
      class:active={active}
    >
      <i class={icon}></i>
      <p>{platform}</p>
    </div>
  </a>
{:else}
  <div
    class="px-4 py-2 rounded-md flex flex-row gap-1 items-center dashboard-platform-select--card text-xs"
    class:active={active}
  >
    <i class={icon}></i>
    <p>{platform}</p>
  </div>
{/if}