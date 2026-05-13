<script lang="ts">
  export let game: string;
  export let active: boolean = false;
</script>

<a href="/tournaments/{game}">
  <div class="tournamets-game--bubble px-5 py-1" class:active={active}>
    <p class="text-xs">{game}</p>
  </div>
</a>
