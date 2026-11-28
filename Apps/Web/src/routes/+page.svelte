<script>
  import HomeProgressBar from '$lib/components/ui/HomeProgressBar.svelte';
  import DD from '$lib/assets/logo.png';
</script>

<div class="flex flex-col justify-center items-center h-screen gap-8">
  <img 
    src={DD} 
    alt="Duel Domain Logo" 
    class="xl:w-70 xl:h-70 w-35 h-35"
  />
  
  <HomeProgressBar />
</div>