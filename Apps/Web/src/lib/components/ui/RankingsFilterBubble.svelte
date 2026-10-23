<script lang="ts">
  export let filter: string;
  export let active: boolean = false;
</script>

<a href="/rankings/{filter}">
  <div class="rankings-filter--bubble px-5 py-1" class:active={active}>
    <p class="text-xs">{filter}</p>
  </div>
</a>