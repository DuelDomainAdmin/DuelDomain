<script>
  import HomeProgressBar from '$lib/components/ui/HomeProgressBar.svelte';
  import DD from '$lib/assets/DD.png';
</script>

<div class="flex flex-col justify-center items-center h-screen gap-8">
  <img 
    src={DD} 
    alt="Duel Domain Logo" 
    class="xl:w-40 xl:h-40 w-25 h-25"
  />
  
  <HomeProgressBar />
</div>