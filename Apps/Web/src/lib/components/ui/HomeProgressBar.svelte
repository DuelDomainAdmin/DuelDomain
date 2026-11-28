<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let progress = 0;

  onMount(() => {
    const interval = setInterval(() => {
      progress += 1;
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          goto('/Dashboard');
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  });
</script>

<div class="w-64 xl:w-80 h-2 rounded-full overflow-hidden bg-dark">
  <div 
    class="h-full transition-all duration-100 ease-out progress-gradient"
    style="width: {progress}%;"
  ></div>
</div>

<style lang="scss">
  .progress-gradient {
    background: linear-gradient(to right, $color-primary 0%, $color-mid 50%, $color-secondary 100%);
  }
</style>