<script lang="ts">
 import NavBar from "$lib/components/NavBar.svelte";
 import Footer from "$lib/components/Footer.svelte";   
 import blob from '$lib/assets/blob.png';
 import TournamentsGameBubble from "$lib/components/ui/TournamentsGameBubble.svelte";
 import OngoingTournamentCard from "$lib/components/ui/OngoingTournamentCard.svelte";
 import UpcomingTournamentsCard from "$lib/components/ui/UpcomingTournamentsCard.svelte";
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';
  import efootball from '$lib/assets/efootball.png';
  import cod from '$lib/assets/cod.png';
  import ms from '$lib/assets/ms.png';
  import freefire from '$lib/assets/freefire.png';
  import amongus from '$lib/assets/amongus.png';

  
  const tournaments = [
    {
      name: "Summer Showdown",
      game: "E-football",
      prize: "$5000",
      entryFee: "$50",
      startTime: "2h 1min",
      endTime: "2h 1min",
      imageUrl: efootball
    },
    {
      name: "Winter Warriors",
      game: "Call of Duty",
      prize: "$3000",
      entryFee: "$30",
      startTime: "1h 30min",
      endTime: "3h 15min",
      imageUrl: cod
    },
    {
      name: "Spring Championship",
      game: "Free Fire",
      prize: "$7000",
      entryFee: "$70",
      startTime: "45min",
      endTime: "2h 45min",
      imageUrl: freefire
    },
    {
      name: "Autumn Arena",
      game: "Among Us",
      prize: "$2000",
      entryFee: "$20",
      startTime: "3h 10min",
      endTime: "5h 20min",
      imageUrl: amongus
    },
    {
      name: "Mega Masters",
      game: "E-football",
      prize: "$10000",
      entryFee: "$100",
      startTime: "1h 15min",
      endTime: "4h 30min",
      imageUrl: efootball
    },
  ];
  
  let currentIndex = 0;
  let scrollPosition = spring(0, { stiffness: 0.05, damping: 0.7 });
  
  let cardsPerView = 3;
  let isDesktop = true;
  
  $: maxIndex = Math.max(0, tournaments.length - cardsPerView);
  $: canScrollLeft = currentIndex > 0;
  $: canScrollRight = currentIndex < maxIndex;
  
  function scrollLeft() {
    if (canScrollLeft) {
      currentIndex = Math.max(0, currentIndex - 1);
      scrollPosition.set(currentIndex);
    }
  }
  
  function scrollRight() {
    if (canScrollRight) {
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      scrollPosition.set(currentIndex);
    }
  }
  
  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
       
        isDesktop = false;
        cardsPerView = 1; 
      } else {
       
        isDesktop = true;
        cardsPerView = 3;
      }
      currentIndex = 0;
      scrollPosition.set(0);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  });

 
</script>


<NavBar/>
<div class="xl:px-30 px-5">

  
         <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
   
    
    </div>

    <div class="relative mt-10 z-10" >
        <h1 class="text-4xl font-bold text-center z-10">Tournaments</h1>
    <p class="text-center text-xs z-10">Compete , conquer and claim your crypto rewards. Find the next battle Ground and Prove your skilll.</p>

     <div class="flex flex-row gap-5 mt-5 justify-center items-center flex-wrap" >
    <TournamentsGameBubble game="All Games" active={true} />
    <TournamentsGameBubble game="E-football"  />
    <TournamentsGameBubble game="Fortnite"  />
    <TournamentsGameBubble game="Call of Duty"  />

    </div>

   
    </div>

   
 


</div>



 <div class="relative tournament-carousel-section">
  <div class="flex flex-row items-center justify-between xl:px-10 px-5 mb-5">
    <h2 class="md:text-2xl text-md font-bold flex flex-row items-center gap-1"><span><i class="fa-solid fa-circle grd_one md:text-xl text-sm"></i></span>Ongoing Tournaments</h2>
    
   
    {#if isDesktop}
      <div class="flex flex-row items-center gap-2">
        <button 
          class="grd_one text-xl bg-transparent border-none outline-none disabled:opacity-30 disabled:cursor-not-allowed" 
          title="Previous"
          on:click={scrollLeft}
          disabled={!canScrollLeft}
        >
          <i class="fa-solid fa-circle-arrow-left"></i>
        </button>
        
        <button 
          class="grd_one text-xl bg-transparent border-none outline-none disabled:opacity-30 disabled:cursor-not-allowed" 
          title="Next"
          on:click={scrollRight}
          disabled={!canScrollRight}
        >
          <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    {/if}
  </div>

  {#if isDesktop}
    
    <div class="relative xl:px-10 px-5 mt-10 overflow-hidden w-full">
      <div 
        class="flex gap-5"
        style="transform: translateX(-{$scrollPosition * (100 / cardsPerView)}%); transition: transform 0.1s ease-out;"
      >
        {#each tournaments as tournament, index (index)}
          <div class="flex-shrink-0" style="width: calc({100 / cardsPerView}% - {(cardsPerView - 1) * 1.25 / cardsPerView}rem)">
            <OngoingTournamentCard {tournament} />
          </div>
        {/each}
      </div>
    </div>
  {:else}
    
    <div class="overflow-x-auto px-5 pb-5" style="-ms-overflow-style: none; scrollbar-width: none;">
      <div class="flex gap-5 w-max">
        {#each tournaments as tournament, index (index)}
          <div class="w-[85vw] md:w-[45vw] flex-shrink-0">
            <OngoingTournamentCard {tournament} />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>



    <div class="xl:px-10 px-5 mt-10">
   <div class="flex flex-row items-center justify-between">
     <p class="md:text-xl text-md font-bold">Upcoming Tournaments</p>
     <a href="../" class="text-xs text-primary">View All</a>

   </div>


     <div>
      <UpcomingTournamentsCard tournament={{
          name: "Summer Showdown",
          game: "E-football",
          prize: "$5000",
          type:"Solo",
          time:"Aug 20, 2024 5:00 PM",
          status:true,
          imageUrl: efootball
     }} />

      <UpcomingTournamentsCard tournament={{
          name: "Summer Showdown",
          game: "E-football",
          prize: "$5000",
          type:"Solo",
          time:"Aug 20, 2024 5:00 PM",
          status:false,
          imageUrl: efootball
     }} />

      <UpcomingTournamentsCard tournament={{
          name: "Summer Showdown",
          game: "E-football",
          prize: "$5000",
          type:"Solo",
          time:"Aug 20, 2024 5:00 PM",
          status:true,
          imageUrl: efootball
     }} />
     </div>

     <div class="mt-5">
      <button class="btn-primary_grd-two round-btn px-2 py-1 text-xs" title="add tournament btn"><i class="fa-solid fa-plus"></i>Create</button>
     </div>

    </div>
    <Footer/>