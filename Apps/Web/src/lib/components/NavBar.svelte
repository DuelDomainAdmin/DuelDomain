<script lang="ts">

  import * as Popover from "$lib/components/ui/popover/index.js";
   import logo from '$lib/assets/logo.png';
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  let isMenuOpen = $state(false);
  let showMoreContent = $state(false);
 
 
  let position = $state("bottom");
 
</script>

<div class="flex flex-row items-center xl:px-10 px-5 mt-1 justify-between ">
  <div>
    <a href="../">
        <img 
    src={logo} 
    alt="Duel Domain Logo" 
    class="xl:w-15 xl:h-15 w-10 h-10"
  />
    </a>
  </div>

  <div class="hidden xl:flex xl:flex-row gap-10 items-center ml-5">
    <a href="../" class="text-primary font-medium  text-sm">Home</a>
    <a href="Games/" class="text-primary font-medium  text-sm">Games</a>
    <a href="Tournaments/" class="text-primary font-medium  text-sm">Tournaments</a>
    <a href="Rewards/" class="text-primary font-medium  text-sm">Rewards</a>
     <a href="Community/" class="text-primary font-medium  text-sm">Community</a>
      <a href="Contact/" class="text-primary font-medium  text-sm">Contact</a>
     <Popover.Root>
  <Popover.Trigger class=""><button class="text-primary font-medium text-md" title=""><i class="fa-solid fa-ellipsis"></i></button></Popover.Trigger>
  <Popover.Content class="nav-popover w-50 mt-2 hidden xl:flex" portalProps={{}}><div class="flex flex-col gap-2">
    <ul class="p-0 m-0">
        <li>
            <a href="Rankings/" class="grd_one text-sm">Rankings</a>
        </li>

        <li>
            <a href="Challenges/" class="grd_one text-sm">Challenges</a>
        </li>

        <li>
            <a href="../" class="grd_one text-sm">P2P-Single</a>
        </li>

        <li>
            <a href="../" class="grd_one text-sm">P2P-Multiplayer</a>
        </li>
        <li>
            <a href="Challenges/" class="grd_one text-sm">Host a Challenge</a>
        </li>
        <li>

           <a href="About/#faqs" class="grd_one text-sm">Faqs</a>

        </li>

    </ul>

  </div></Popover.Content>
</Popover.Root>
  </div>
  <div class="hidden xl:flex xl:flex-row gap-5 items-center">
    <a href="Sign-In" class="btn-primary--rounded text-xs font-bold px-4 py-2 shadow-lg shadow-blue-500/50 ...">
        Sign In
    </a>

    <a href="../" class="text-md text-discord" title="">
       <i class="fa-brands fa-discord"></i>
    </a>

  </div>


  <div class="xl:hidden flex">



  <DropdownMenu.Root bind:open={isMenuOpen}>
  <DropdownMenu.Trigger class="bg-transparent outline-none border-none no-underline">
    <button class="grd_one bg-transparent outline-none border-none no-underline" title="">
      {#if isMenuOpen}
        <i class="fa-etch fa-solid fa-xmark"></i>
      {:else}
        <i class="fa-solid fa-bars-staggered"></i>
      {/if}
    </button>
  </DropdownMenu.Trigger>
  
  <DropdownMenu.Content class="w-66 mx-5 nav-popover mt-5 xl:hidden" portalProps={{}}>
    <div class="flex flex-col gap-2 px-3 py-2">
      <a href="../" class="text-primary font-medium text-sm bg-transparent outline-none border-none no-underline">Home</a>
      <a href="Games/" class="text-primary font-medium text-sm bg-transparent outline-none border-none no-underline">Games</a>
      <a href="Tournaments/" class="text-primary font-medium text-sm bg-transparent outline-none border-none no-underline">Tournaments</a>
      <a href="Rewards/" class="text-primary font-medium text-sm bg-transparent outline-none border-none no-underline">Rewards</a>
      <a href="Community/" class="text-primary font-medium text-sm bg-transparent outline-none border-none no-underline">Community</a>
      <a href="Contact/" class="text-primary font-medium text-sm bg-transparent outline-none border-none no-underline">Contact</a>

      
   

    <a href="../" class="text-md text-discord" title="">
       <i class="fa-brands fa-discord"></i>
    </a>

 
      
      <button 
        class="text-primary font-medium text-md p-0 m-0 w-fit" 
        title=""
        onclick={() => showMoreContent = !showMoreContent}
      >
        <i class="fa-solid fa-ellipsis"></i>
      </button>
      
      {#if showMoreContent}
        <div class="flex flex-col gap-2 mt-1 mb-2">
          
            <ul class="p-0 m-0">
        <li>
            <a href="Rankings/" class="grd_one">Rankings</a>
        </li>

        <li>
            <a href="Challenges/" class="grd_one">Challenges</a>
        </li>

        <li>
            <a href="../" class="grd_one">P2P-Single</a>
        </li>

        <li>
            <a href="../" class="grd_one">P2P-Multiplayer</a>
        </li>
        <li>
            <a href="Challenges/" class="grd_one">Host a Challenge</a>
        </li>

         <li>

           <a href="About/#faqs" class="grd_one text-sm">Faqs</a>

        </li>

    </ul>
        </div>
      {/if}

       <a href="Sign-In"
        class="btn-primary--rounded mb-2 text-xs font-bold px-2 py-1 m-0 text-center">
        Sign In
      </a>
    </div>
  </DropdownMenu.Content>
</DropdownMenu.Root>

  </div>
  
  

</div>

