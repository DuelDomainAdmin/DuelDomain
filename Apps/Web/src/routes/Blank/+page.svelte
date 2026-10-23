
<script lang="ts">

 import logo from '$lib/assets/logo.png';
 import DashboardNavItem from '$lib/components/ui/DashboardNavItem.svelte';
 import DashboardCard from '$lib/components/DashboardCard.svelte';
 import dash_cod from "$lib/assets/dash_cod.jpg"
 import dash_football from "$lib/assets/dash_football.jpg"
 import dash_ff from "$lib/assets/dash_ff.jpg";
 import dash_mk from "$lib/assets/dash_mk.jpg";
 import DashboardGameCard from '$lib/components/ui/DashboardGameCard.svelte';


 

</script>



<div class="px-5 flex flex-row">

   
  <div class="w-1/6 flex flex-col justify-between dashboard-navbar ">

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

         <ul class="list-style-none p-0 m-0">
    <li>
         <DashboardNavItem active={true} link={'../'} icon={'fa-solid fa-cubes'} name={'DashBoard'}/>

    </li>
    <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-solid fa-gamepad'} name={'Games'}/>

    </li>

     <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-solid fa-wallet'} name={'Stake'}/>

    </li>

    <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-solid fa-burst'} name={'Matches'}/>

    </li>

     <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-solid fa-ranking-star'} name={'Tournaments'}/>

    </li>

     <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-solid fa-circle-nodes'} name={'Challenges'}/>

    </li>

    <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-regular fa-chess-king'} name={'Rankings'}/>

    </li>



     <li class="mt-2">

         <DashboardNavItem active={false} link={'../'} icon={'fa-solid fa-timeline'} name={'History'}/>

    </li>

    <li>

    </li>
    </ul>

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

  <div class="w-5/6 px-2 py-3 dashboard-aside ">

    <div class="flex flex-row justify-between items-center">

        <div class="dashboard_search flex items-center justify-center w-100  gap-2 px-4 py-2">

    <i class="fa-solid fa-magnifying-glass text-xs text-gray"></i>
    <input class="text-xs w-full" type="text" placeholder="Search for challenges , games or hosts">
  

</div>

<div class="flex flex-row items-center gap-2">

        <div>

            <p class="font-bold text-xs">0 $DUEL</p>

        </div>

        <div>
            <button class="btn-secondary rounded-full  text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels"><i class="fa-solid fa-plus"></i></button>
        </div>
            
        </div>

    </div>
    <div class="flex flex-row gap-2 mt-8">

        <div class="main w-4/5 px-3 dashboard-aside--main">
           <DashboardCard/>

           <div class="mt-2">

            <div class="flex flex-row iteems-center justify-between">

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

           </div>
        </div>
        <div class="dashboard-aside--side w-1/5">

           

            <div class="bg-white/10 backdrop-blur-md text-primary text-md flex flex-row items-center gap-1 rounded-md py-3 px-2  font-bold">

                 <p class="font-bold text-charcoal-white text-xs">
            Total Matches
            </p>

                2000 <i class="fa-solid fa-arrow-trend-up"></i>

            </div>

          
            <div class="bg-white/10 backdrop-blur-md text-secondary font-bold text-md flex items-center gap-1 rounded-md py-3 px-2 mt-2">

                  <p class="font-bold text-charcoal-white text-xs ">
            Total Rewards
            </p>

                $5000 DUEL

            </div>


             <div class="flex flex-row items-center text-xs mt-3 ">
            <i class="fa-solid fa-burst text-green"></i>
            <p>Ongoing Matches</p>

           </div>



            <div class="mt-2">
                <div class="bg-white/10 backdrop-blur-md mt-1 rounded-md py-5 px-2">

                <div class="flex flex-row justify-between items-center">

                    <div class="flex flex-col justify-center items-center">

                        <p class="text-xs text-purple">ID #881we</p>
                        <img class="w-5 h-5 md:w-10 md:h-10" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade" alt="">
                         <p class="text-xs">Alex</p>
                        <p class="text-xs mt-2">12</p>



                    </div>
                    <div class="flex flex-col">

                        VS


                    </div>
                    <div class="flex flex-col justify-center items-center">

                        
                        <p class="text-xs text-charcoal-white">00:24</p>
                        <img class="w-5 h-5 md:w-10 md:h-10" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade" alt="">
                        <p class="text-xs">Alex</p>
                        <p class="text-xs mt-2">12</p>


                    </div>


                </div>

            </div>
            </div>

            <button class="btn-primary rounded-md px-2 py-1 texts-xs w-full mt-1">Spectate</button>


             <div class="mt-1">
                <div class="bg-white/10 backdrop-blur-md mt-1 rounded-md py-5 px-2">

                <div class="flex flex-row justify-between items-center">

                    <div class="flex flex-col justify-center items-center">

                        <p class="text-xs text-purple">ID #881we</p>
                        <img class="w-5 h-5 md:w-10 md:h-10" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade" alt="">
                         <p class="text-xs">Alex</p>
                        <p class="text-xs mt-2">12</p>



                    </div>
                    <div class="flex flex-col">

                        VS


                    </div>
                    <div class="flex flex-col justify-center items-center">

                        
                        <p class="text-xs text-charcoal-white">23:19</p>
                        <img class="w-5 h-5 md:w-10 md:h-10" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade" alt="">
                        <p class="text-xs">Alex</p>
                        <p class="text-xs mt-2">12</p>


                    </div>


                </div>

            </div>
            </div>

              <button class="btn-primary rounded-md px-2 py-1 texts-xs w-full mt-1">Spectate</button>


        </div>


    </div>
</div>
    

</div>