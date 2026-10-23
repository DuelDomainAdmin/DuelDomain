

<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import GameCard from "$lib/components/ui/GameCard.svelte";
    import efootball from '$lib/assets/efootball.png';
    import cod from '$lib/assets/cod.png';
    import freefire from '$lib/assets/freefire.png';
    import amongus from '$lib/assets/amongus.png';
</script>

<NavBar/>

<div class="mt-10 xl:px-30 px-5">
<h1 class="text-center font-bold text-4xl">
Available Games

</h1>
<p class="text-center text-xs mt-2">Explore the games available on duel domain and start  earning crypto tokens by competing in pvp’s and tournaments.</p>

<div class="flex items-center justify-center mt-5 gap-2">

    <i class="fa-solid fa-magnifying-glass text-xs"></i>
    <input class="text-xs w-75 search-input__games" type="text" placeholder="Search for games...">
    <button class="text-xs btn-secondary--rounded p-1" title=""><i class="fa-solid fa-arrow-right"></i></button>

</div>

 
</div>

<section class="px-10 xl:px-10">

    <div class="flex md:flex-row flex-col gap-10 mt-10">

             <GameCard
  link="../"
  image="{efootball}"
  title="E-football"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="{cod}"
  title="Call of duty"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="{freefire}"
  title="Free Fire"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="{amongus}"
  title="Among Us"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>


    </div>

    <div class="flex md:flex-row flex-col gap-10 mt-10">

             <GameCard
  link="../"
  image="{efootball}"
  title="E-football"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="{cod}"
  title="Call of duty"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="{freefire}"
  title="Free Fire"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>

<GameCard
  link="../"
  image="{amongus}"
  title="Among Us"
  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati consequuntur assumenda magni aliquam minus, eveniet illum odit veritatis vero? Voluptatem doloremque placeat fuga commodi maiores animi labore eligendi sed."
/>


    </div>
    <div class="mt-10 col-md-7 col-xl-6">
     <a class="text-thin text-xs" href="../Contact/">Can't find your game or battle ground of choice here , feel free to make a request, <span class="grd_two">Contact us here</span></a>

 </div>

</section>

<Footer/>