<script lang="ts">
  import logo from '$lib/assets/logo.png';
  import DashBoardSideBar from '$lib/components/DashBoardSideBar.svelte';
  import DashBoardMobileNavBar from '$lib/components/DashBoardMobileNavBar.svelte';
  import DashboardPlatformSelectCard from '$lib/components/ui/DashboardPlatformSelectCard.svelte';
  import PlatformGameCard from '$lib/components/ui/PlatformGameCard.svelte';
   import dash_cod from "$lib/assets/dash_cod.jpg"
  import dash_football from "$lib/assets/dash_football.jpg"
  import dash_ff from "$lib/assets/dash_ff.jpg";
  import dash_mk from "$lib/assets/dash_mk.jpg";
  import * as Select from "$lib/components/ui/select/index.js";
  import MatchCard from '$lib/components/ui/MatchCard.svelte';

  const games = [
    { value: "Call of duty", label: "Call of duty" },
    { value: "E-foootball", label: "E-Football" },
    { value: "Free-fire", label: "Free-Fire" },
    { value: "Mortal-kombat", label: "Mortal-kombat" },
    { value: "Pubg", label: "Pubg" }
  ];
 
  let value = $state("");
 
  const triggerContent = $derived(
    games.find((f) => f.value === value)?.label ?? "Select Game"
  );
</script>

<div class="px-5 flex flex-row">

  <div class="w-1/6 hidden xl:flex flex-col justify-between dashboard-navbar sticky top-0 h-screen">

    <div>
      <div>
        <a href="../">
          <img
            src={logo}
            alt="Duel Domain Logo"
            class="xl:w-15 xl:h-15 w-10 h-10"
          />
        </a>
      </div>

      <div class="mt-5">
       <DashBoardSideBar active={'Matches'}/>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center">
      <div class="rounded-full">
        <img class="w-5 h-5 md:w-8 md:h-8" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade" alt="">
      </div>
      <div>
        <button title="settings"><i class="fa-solid fa-gear text-gray"></i></button>
      </div>
    </div>

  </div>

  <div class="w-full xl:w-5/6 xl:px-2  dashboard-aside flex flex-col">

    <div class="hidden xl:flex flex-row justify-between py-4 items-center sticky top-0 z-10 bg-black">
      <div class="dashboard_search flex items-center justify-center w-100 gap-2 px-4 py-2">
        <i class="fa-solid fa-magnifying-glass text-xs text-gray"></i>
        <input class="text-xs w-full" type="text" placeholder="Enter Match ID or Player ID">
      </div>

      <div class="flex flex-row items-center gap-2">
        <div>
          <p class="font-bold text-xs">0 $DUEL</p>
        </div>
        <div>
           <a href="Add-Duels" class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div>
      </div>
    </div>


    <div class="xl:hidden dashboard-mobile-top-bar">

      <div class="flex flex-row justify-between items-center mt-1">

        <div>


        <a href="../">
          <img
            src={logo}
            alt="Duel Domain Logo"
            class="xl:w-15 xl:h-15 w-10 h-10"
          />
        </a>
      </div>

      <div class="flex flex-row items-center gap-2">
        <div>
          <p class="font-bold text-xs">0 $DUEL</p>
        </div>
        <div>
            <a href="Add-Duels" class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div>
      </div>

    </div>

    <div class="dashboard_search flex items-center justify-center w-full gap-2 px-4 py-2 mt-1">
        <i class="fa-solid fa-magnifying-glass text-xs text-gray"></i>
        <input class="text-xs w-full" type="text" placeholder="Enter Match ID or Player ID">
      </div>

    </div>
    

    

      <div class="main w-full mt-4  dashboard-aside--main">

        <div class="flex flex-row items-center justify-between flex-wrap">

            <div>

                <h1 class="text-4xl font-bold">
                 Live Matches

                </h1>

                <p class="text-xs text-charcoal-white" >
                     Ongoing Pvp Matches
                </p>

            </div>

           


            

        </div>

        <div class="flex flex-row justify-between items-center mt-5">

            <div>

                <button title="Create Match" class="btn-primary_grd-one rounded-md text-xs px-4 py-2 flex flex-row items-center gap-2">
                    <i class="fa-solid fa-plus"></i>
                    Create Match

                </button>

            </div>

            <div>

    <Select.Root type="single" name="favoriteFruit" bind:value>
  <Select.Trigger class="border-none text-white">
    {triggerContent}
  </Select.Trigger>
  <Select.Content class="match-game-select text-xs" portalProps={{}}>
    <Select.Group class="">
      <Select.Label class="text-xs">Fruits</Select.Label>
      {#each games as game (game.value)}
        <Select.Item
          value={game.value}
          label={game.label}
          
          class="match-game-item"
        >
          {game.label}
        </Select.Item>
      {/each}
    </Select.Group>
  </Select.Content>
</Select.Root>

            </div>

        </div>

        <div class="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-30 md:mb-0">
        <MatchCard link={'../'} image={dash_cod} player_one_name={'Enigma'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_name={'George'} player_two_avatar={'https://api.dicebear.com/9.x/adventurer/svg?seed=George'} reward={'500'} time={'03:22'}/>
        <MatchCard link={'../'} image={dash_football} player_one_name={'Enigma'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_name={'James'} player_two_avatar={'https://api.dicebear.com/9.x/adventurer/svg?seed=Jack'} reward={'500'} time={'03:22'}/>
        <MatchCard link={'../'} image={dash_mk} player_one_name={'Enigma'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_name={'James'} player_two_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} reward={'500'} time={'03:22'}/>
        <MatchCard link={'../'} image={dash_ff} player_one_name={'Enigma'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_name={'James'} player_two_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} reward={'500'} time={'03:22'}/>

        

         

              </div>


       

        

        
      


        
      </div>

     

   

    

  </div>

</div>


<DashBoardMobileNavBar active={'Matches'}/>