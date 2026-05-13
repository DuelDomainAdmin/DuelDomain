<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  
  export let src: string;
  export let alt: string;
  export let fallback: string;
  export let isSelected: boolean = false;
  export let onClick: () => void;
</script>

<button 
  class="avatar-wrapper {isSelected ? 'avatar-selected' : ''}" 
  on:click={onClick}
  type="button"
>
  <Avatar.Root class="w-24 h-24">
    <Avatar.Image {src} {alt} class="" />
    <Avatar.Fallback class="">{fallback}</Avatar.Fallback>
  </Avatar.Root>
</button>

