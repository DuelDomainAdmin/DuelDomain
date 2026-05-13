<script lang="ts">
  import logo from '$lib/assets/logo.png';
  import DashBoardSideBar from '$lib/components/DashBoardSideBar.svelte';
  import DashboardNavItem from '$lib/components/ui/DashboardNavItem.svelte';
  import DashboardCard from '$lib/components/DashboardCard.svelte';
  import dash_cod from "$lib/assets/dash_cod.jpg"
  import dash_football from "$lib/assets/dash_football.jpg"
  import dash_ff from "$lib/assets/dash_ff.jpg";
  import dash_mk from "$lib/assets/dash_mk.jpg";
  import DashboardGameCard from '$lib/components/ui/DashboardGameCard.svelte';
  import OngoingMatchCard from '$lib/components/ui/OngoingMatchCard.svelte';
  import DashBoardReward from '$lib/components/ui/DashBoardReward.svelte';
  import DashBoardMobileNavBar from '$lib/components/DashBoardMobileNavBar.svelte';
  import DashBoardMobileNavItem from '$lib/components/ui/DashBoardMobileNavItem.svelte';
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
       <DashBoardSideBar/>
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
          <a href="Dashboard/Add-Duels" class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels">
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
           <a href="Dashboard/Add-Duels" class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels">
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
    

    <div class="flex flex-row gap-2 mt-4">

      <div class="main w-full xl:w-4/5 xl:px-3 dashboard-aside--main">
        <DashboardCard/>

        <div class="server-stats-mobile xl:hidden flex flex-row gap-3 mt-5 justify-center items-center">

           <div class="bg-white/10 backdrop-blur-md text-primary text-xs flex flex-row items-center gap-1 rounded-md py-3 px-2 font-bold">
          <p class="font-bold text-charcoal-white text-xs">Total Matches</p>
          2000 <i class="fa-solid fa-arrow-trend-up text-xs"></i>
        </div>

        <div class="bg-white/10 backdrop-blur-md text-secondary font-bold text-xs flex items-center gap-1 rounded-md py-3 px-2">
          <p class="font-bold text-charcoal-white text-xs">Total Rewards</p>
          $5000 DUEL
        </div>

        </div>

        <div class="mt-2">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-1 text-xs">
              <i class="fa-solid fa-gamepad text-primary"></i>
              Games
            </div>
            <div>
              <a class="text-xs text-primary" href="../">View All</a>
            </div>
          </div>

          <div class="dashboard-games mt-1">
            <div class="flex flex-row gap-2 items-center">
              <DashboardGameCard link={'../'} image={dash_cod} duel_count={'200'} category={'mmorpg'} tag_color={'text-purple'} title={'Call of Duty Mobile'}/>
              <DashboardGameCard link={'../'} image={dash_football} duel_count={'196'} category={'mmo'} tag_color={'text-green'} title={'Efootball'}/>
            </div>

            <div class="flex flex-row gap-2 items-center mt-5">
              <DashboardGameCard link={'../'} image={dash_ff} duel_count={'180'} category={'mmorpg'} tag_color={'text-primary'} title={'Free Fire'}/>
              <DashboardGameCard link={'../'} image={dash_mk} duel_count={'130'} category={'mmo'} tag_color={'text-secondary'} title={'Mortal Kombat'}/>
            </div>
          </div>

          <div class="ongoing-matches-mobile xl:hidden">

            <div class="flex flex-row items-center text-xs mt-3">
          <i class="fa-solid fa-burst text-green"></i>
          <p>Ongoing Matches</p>
        </div>

        <div class="flex flex-row items-center justify-center w-full gap-2">
      
       <OngoingMatchCard match_id={'khs56'} timestamp={'0:33'} player_one="Liam" player_one_wins={'11'} player_two={'Amaya'} player_two_wins={'10'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_avatar={'https://api.dicebear.com/9.x/big-smile/svg?seed=Amaya'} match_link={'../'}/>

       <OngoingMatchCard match_id={'khs56'} timestamp={'0:33'} player_one="Liam" player_one_wins={'11'} player_two={'Amaya'} player_two_wins={'10'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_avatar={'https://api.dicebear.com/9.x/big-smile/svg?seed=Amaya'} match_link={'../'}/>

          
         

        </div>

          </div>

          <div class="mt-10 mb-30 dashboard-rewards">

           <p class="text-lg font-bold">

                    Latest Rewards

                </p>

          <DashBoardReward reward={'$15 DUELS'} winner={'Enigma'} loser={'David'}/>

          <DashBoardReward reward={'$20 DUELS'} winner={'Swish'} loser={'Akins'}/>

          <DashBoardReward reward={'$500 DUELS'} winner={'Andrea'} loser={'Esther'}/>

            



            
            

          </div>
        </div>

        
      </div>

      <div class="dashboard-aside--side xl:w-1/5 hidden xl:flex flex-col sticky top-0 h-screen overflow-hidden  ">

        <div class="bg-white/10 backdrop-blur-md text-primary text-md flex flex-row items-center gap-1 rounded-md py-3 px-2 font-bold">
          <p class="font-bold text-charcoal-white text-xs">Total Matches</p>
          2000 <i class="fa-solid fa-arrow-trend-up"></i>
        </div>

        <div class="bg-white/10 backdrop-blur-md text-secondary font-bold text-md flex items-center gap-1 rounded-md py-3 px-2 mt-2">
          <p class="font-bold text-charcoal-white text-xs">Total Rewards</p>
          $5000 DUEL
        </div>

        <div class="flex flex-row items-center text-xs mt-3">
          <i class="fa-solid fa-burst text-green"></i>
          <p>Ongoing Matches</p>
        </div>

       <OngoingMatchCard match_id={'khs56'} timestamp={'0:33'} player_one="Liam" player_one_wins={'11'} player_two={'Amaya'} player_two_wins={'10'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_avatar={'https://api.dicebear.com/9.x/big-smile/svg?seed=Amaya'} match_link={'../'}/>

       <OngoingMatchCard match_id={'khs56'} timestamp={'0:33'} player_one="Liam" player_one_wins={'11'} player_two={'Amaya'} player_two_wins={'10'} player_one_avatar={'https://api.dicebear.com/9.x/bottts/svg?seed=Avery'} player_two_avatar={'https://api.dicebear.com/9.x/big-smile/svg?seed=Amaya'} match_link={'../'}/>

      </div>

    </div>

  </div>

</div>

<DashBoardMobileNavBar/>


