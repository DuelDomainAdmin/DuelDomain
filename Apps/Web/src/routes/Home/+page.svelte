
<script>
    
    import blob from '$lib/assets/blob.png';
  import GamesCarousel from '$lib/components/GamesCarousel.svelte';
    import NavBar from '$lib/components/NavBar.svelte';
  import GameCard from '$lib/components/ui/GameCard.svelte';
    import HomeInfoCard from '$lib/components/ui/HomeInfoCard.svelte';
    import SlidingBars from '$lib/components/ui/SlidingBars.svelte';
   import Footer from '$lib/components/Footer.svelte';
   import android from '$lib/assets/supported/android.png';
   import apple from '$lib/assets/supported/apple.png';
   import playstation from '$lib/assets/supported/playstation.png';
   import xbox from '$lib/assets/supported/xbox.png';
   import ea from '$lib/assets/supported/ea-sports.png';
   import konami from '$lib/assets/supported/konami.png';
   import sega from '$lib/assets/supported/sega.png';
   import namco from '$lib/assets/supported/namco.png';
   import gaming from '$lib/assets/gaming.png';
   import DisclaimerPopup from '$lib/components/DisclaimerPopup.svelte';
    
     
</script>
<NavBar />

<DisclaimerPopup />

<section class="hero-section mt-20 xl:px-10 px-5 relative">
    <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
    </div>
    
    <div class="xl:px-20 px-5 z-10 relative">
        <div class="flex flex-col md:flex-row md:items-center gap-5">
            <div class="col-12 xl:col-6 order-2 md:order-1 flex flex-row justify-center">
                <div class="hero-gif_container xl:w-70 xl:h-70 w-60 h-60">
                </div>

            </div>
             <div class="mt-4 md:hidden flex items-center justify-center order-3">
                         <a href="Sign-In" class="btn-primary--rounded px-4 py-1 mt-3 text-sm flex flex-row gap-1 items-center w-30" title="">Play Now <i class="fa-solid fa-gamepad"></i></a>
                    </div>
            
            <div class="col-12 xl:col-6 order-1 md:order-2 xl:flex xl:flex-row xl:justify-center xl:pr-20">
                <div>
                    <h1 class="font-bold text-2xl text-center md:text-left">
                        What is Duel Domain ?
                    </h1>
                    <p class="text-center md:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet voluptatibus quidem itaque voluptatum dicta, tempora laborum minima reprehenderit quia porro corporis nulla sequi necessitatibus ducimus repellendus expedita iusto animi.</p>
                    <div class="mt-4 hidden md:block">
                         <a href="Sign-In" class="btn-primary--rounded px-4 py-1 mt-3 text-sm flex flex-row gap-1 items-center w-30" title="">Play Now <i class="fa-solid fa-gamepad"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="mt-40 xl:px-10 px-5">

   <div class="flex flex-col items-center justify-center">
      <div class="col-10 col-lg-6">
        <h1 class="text-4xl font-bold text-center">
        Your Skill Is Your Fortune At Duel Domain
    
    </h1>
    
     
      </div>
      <div class="mt-2 col-12 col-lg-4">
         <p class="text-sm text-gray font-thin text-center mt-2">The Ultimate Arena for skillled gamers to compete  and earn crypto. Prove your prowess in a number of multiplayer games and earn your rewards</p>
     
      </div>
      <div class="flex items-center justify-center mt-2">

        <a href="../" class="btn-primary--rounded px-4 py-2 mt-2 text-xs">Explore Tournaments</a>

     </div>
   </div>
    

</section>

<section class="mt-20 xl:px-10 px-5">
    <div class="flex flex-col items-center justify-center">
        <div class="col-10 col-lg-6">
            <h1 class="text-2xl font-bold text-center">
                Earn Rewards  <span class="grd_two">By Winning</span>
            </h1>
             <p class="text-sm text-gray font-thin text-center mt-2">Our platform is designed to rewards skill , here’s how you can turn your gaming victories into valuable crypto assets</p>
            </div>
            </div>

    <div class="flex flex-col items-center mt-20">

        <div class="flex flex-col md:flex-row gap-10  xl:px-30 px-5">
            <HomeInfoCard 
  icon="fa-solid fa-gamepad"
  title="Find your featured battle ground"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>
<HomeInfoCard 
  icon="fa-solid fa-chess-rook"
  title="Join a room"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>




        </div>

          <div class="flex flex-col md:flex-row gap-10  xl:px-30 px-5 mt-20">
            <HomeInfoCard 
  icon="fa-solid fa-coins"
  title="Make your wager"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>
<HomeInfoCard 
  icon="fa-solid fa-bullseye"
  title="Compete for the spoils"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>




        </div>

    </div>
            </section>

 <section class="mt-20">
    <SlidingBars />
    </section>

 <div class="xl:px-10 px-0 flex flex-row items-center mt-20 gap-6 md:gap-20 xl:gap-30 justify-center">

    <img class="xl:w-7 xl:h-7" src={android} alt="">

    <img class="xl:w-7 xl:h-7" src={apple} alt="">

    <img class="xl:w-7 xl:h-7" src={playstation} alt="">

    <img class="xl:w-7 xl:h-7" src={xbox} alt="">

    <img class="xl:w-7 xl:h-7" src={ea} alt="">

    <img class="xl:w-7 xl:h-7" src={konami} alt="">

    <img class="xl:w-7 xl:h-7" src={sega} alt="">

    <img class="xl:w-7 xl:h-7" src={namco} alt="">

 

 </div>

 

 <!-- <section class="xl:px-10 px-5 mt-10">

    <div class="flex flex-row mt-20 gap-5">

    <div>
        <p class="font-bold  text-lg ">
            Featured Battle Grounds
        </p>
    </div>

    <div class="flex flex-row items-center gap-2">
        <button class="grd_one text-2xl" title="">

            <i class="fa-solid fa-circle-arrow-left"></i>

        </button>
         <button class="grd_one text-2xl" title="">

            <i class="fa-solid fa-circle-arrow-right"></i>

        </button>
    </div>

 </div>
    

    <div class="flex md:flex-row flex-col gap-5 mt-10">

             <GameCard
  link="../"
  image="/src/lib/assets/efootball.png"
  title="E-football"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="/src/lib/assets/cod.png"
  title="Call of duty"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="/src/lib/assets/freefire.png"
  title="Free Fire"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="/src/lib/assets/amongus.png"
  title="Among Us"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>


    </div>


 </section> -->

 <GamesCarousel/>

 <div class="flex md:flex-row flex-col gap-30 px-5 xl:px-20 mt-30 items-center">

    <div class="col-lg-5 col-12 order-2 md:order-1 flex flex-row md:justify-end justify-center">
        <img class="w-70 h-70" src={gaming} alt="">
    </div>
    <div class="col-lg-6 col-12 order-1 md:order-2 flex flex-col">
        <h1 class="font-bold text-2xl"><span class="grd_one">Why Duel Domain &nbsp;</span>is the future of gaming</h1>
        <p>We’re building more than just a platform , we’re building a new paradigm for gaming powered by web3 technology</p>
    </div>

 </div>

 <Footer/>