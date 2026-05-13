<script lang="ts">
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';
  import GameCard from '$lib/components/ui/GameCard.svelte';
  export let title: string = "Featured Battle Grounds";
  import efootball from '$lib/assets/efootball.png';
  import cod from '$lib/assets/cod.png';
  import ms from '$lib/assets/ms.png';
  import freefire from '$lib/assets/freefire.png';
  import amongus from '$lib/assets/amongus.png';
  
  const games = [
    {
      link: "../",
      image: efootball,
      title: "E-football",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    {
      link: "../",
      image: cod,
      title: "Call of duty",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    {
      link: "../",
      image: freefire,
      title: "Free Fire",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    {
      link: "../",
      image: amongus,
      title: "Among Us",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    // Second set (duplicates)
    {
      link: "../",
      image: ms,
      title: "MySquad",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    {
      link: "../",
      image: cod,
      title: "Call of duty",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    {
      link: "../",
      image: freefire,
      title: "Free Fire",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
    {
      link: "../",
      image: amongus,
      title: "Among Us",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
    },
  ];
  
  let currentIndex = 0;
  // Smoother spring settings
  let scrollPosition = spring(0, { stiffness: 0.05, damping: 0.7 });
  
  let cardsPerView = 4;
  let isMobile = false;
  
  $: maxIndex = isMobile ? 1 : Math.max(0, games.length - cardsPerView);
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
      if (window.innerWidth < 768) {
        isMobile = true;
        cardsPerView = 4;
      } else {
        isMobile = false;
        cardsPerView = 4;
      }
      // Reset position on resize
      currentIndex = 0;
      scrollPosition.set(0);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<section class="xl:px-10 px-5 mt-10">
  <div class="flex flex-row mt-20 gap-5 ">
    <div>
      <p class="font-bold text-lg">{title}</p>
    </div>

    <div class="flex flex-row items-center gap-2">
      <button 
        class="grd_one text-2xl bg-transparent border-none outline-none disabled:opacity-30 disabled:cursor-not-allowed" 
        title=""
        on:click={scrollLeft}
        disabled={!canScrollLeft}
      >
        <i class="fa-solid fa-circle-arrow-left"></i>
      </button>
      
      <button 
        class="grd_one text-2xl bg-transparent border-none outline-none disabled:opacity-30 disabled:cursor-not-allowed" 
        title=""
        on:click={scrollRight}
        disabled={!canScrollRight}
      >
        <i class="fa-solid fa-circle-arrow-right"></i>
      </button>
    </div>
  </div>

  <div class="relative mt-10 overflow-hidden w-full">
    {#if isMobile}
      <!-- Mobile: Show sets of 4 in columns -->
      <div class="flex flex-col gap-5 px-10">
        {#if currentIndex === 0}
          {#each games.slice(0, 4) as game, index (index)}
            <GameCard
              link={game.link}
              image={game.image}
              title={game.title}
              description={game.description}
            />
          {/each}
        {:else}
          {#each games.slice(4, 8) as game, index (index + 4)}
            <GameCard
              link={game.link}
              image={game.image}
              title={game.title}
              description={game.description}
            />
          {/each}
        {/if}
      </div>
    {:else}
      <!-- Desktop: Smooth horizontal scroll -->
      <div 
        class="flex gap-5"
        style="transform: translateX(-{$scrollPosition * 25}%); transition: transform 0.3s ease-out;"
      >
        {#each games as game, index (index)}
          <div class="flex-shrink-0 w-1/5">
            <GameCard
              link={game.link}
              image={game.image}
              title={game.title}
              description={game.description}
            />
          </div>
        {/each}
      </div>
    {/if}
  </div>
 <div class="mt-10 col-md-7 col-xl-6">
     <a class="text-thin" href="../Contact/">Can't find your game or battle ground of choice here , feel free to make a request, <span class="grd_two">Contact us here</span></a>

 </div>
</section>