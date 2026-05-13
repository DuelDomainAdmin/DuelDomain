
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
       <DashBoardSideBar active={'Games'}/>
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
        <input class="text-xs w-full" type="text" placeholder="Search for challenges , games or hosts">
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
        <input class="text-xs w-full" type="text" placeholder="Search for challenges , games or hosts">
      </div>

    </div>
    

    

      <div class="main w-full mt-4  dashboard-aside--main">

        <div class="flex flex-row items-center justify-between flex-wrap">

            <div>

                <h1 class="text-4xl font-bold">
                Battlegrounds

                </h1>

                <p class="text-xs text-charcoal-white" >
                    Global arenas and competitions
                </p>

            </div>

           


            <div class="flex flex-row flex-wrap gap-2 items-center mt-1 md:mt-2">

            <DashboardPlatformSelectCard link={'../'} icon={'fa-solid fa-mobile'} platform={'Mobile'} active={true}/>
            <DashboardPlatformSelectCard link={'../'} icon={'fa-solid fa-display'} platform={'PC'} />
            <DashboardPlatformSelectCard link={'../'} icon={'fa-brands fa-playstation'} platform={'Playstation'}/>
            <DashboardPlatformSelectCard link={'../'} icon={'fa-brands fa-xbox'} platform={'Xbox'}/>

            </div>

        </div>

        <div class="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">

            <PlatformGameCard link={'../'} image={dash_cod} platform={'fa-solid fa-mobile'} duel_count={'200'} category={'mmorpg'} tag_color={'text-purple'} title={'Call of Duty Mobile'}/>
              <PlatformGameCard link={'../'} image={dash_football} platform={'fa-solid fa-mobile'} duel_count={'196'} category={'mmo'} tag_color={'text-green'} title={'Efootball'}/>
          

          
              <PlatformGameCard link={'../'} image={dash_ff} platform={'fa-solid fa-mobile'} duel_count={'180'} category={'mmorpg'} tag_color={'text-primary'} title={'Free Fire'}/>
              <PlatformGameCard link={'../'} image={dash_mk} platform={'fa-solid fa-mobile'} duel_count={'130'} category={'mmo'} tag_color={'text-secondary'} title={'Mortal Kombat'}/>

              </div>


       

        <div class="flex flex-row items-center justify-end mt-10 mb-30 md:mb-5">
           <button class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Games">
            <i class="fa-solid fa-plus"></i>
          </button>

        </div>

        
      


        
      </div>

     

   

    

  </div>

</div>

<DashBoardMobileNavBar active={'Games'}/>