
<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ChallengesFilterBubble from "$lib/components/ui/ChallengesFilterBubble.svelte";
    import Challengecard from "$lib/components/ui/Challengecard.svelte";
    import efootball from '$lib/assets/efootball.png';
    import cod from '$lib/assets/cod.png';
</script>

<NavBar/>
<div class="xl:px-10 px-5">

    <div class="flex flex-row items-center justify-between mt-10">

        <div><h1 class="font-bold text-2xl">Challenges</h1>
        <p class="text-xs">Host and Join Challenges</p></div>
        <div>
            <button class="btn-secondary--rounded text-xs px-2 py-2 flex flex-row items-center gap-1" title="add challenge btn"><i class="fa-solid fa-plus"></i>Create Challenge</button>
        </div>

    </div>

    <div class="mt-10 w-full">
     crea

    </div>

    <div class="flex flex-row items-center justify-between mt-5">
    <div class="flex flex-row items-center gap-2 flex-wrap ">

    <ChallengesFilterBubble filter="All" active={true} />
    <ChallengesFilterBubble filter="By Game"  />
    <ChallengesFilterBubble filter="By reward" />
    <ChallengesFilterBubble filter="By difficulty" />
    <ChallengesFilterBubble filter="By host" />
    <ChallengesFilterBubble filter="Ending soon" />
       

    </div>
    <div><button class="text-md" title="filter"><i class="ph ph-faders-horizontal"></i></button></div>

    </div>

    <div class="flex lg:flex-row flex-col gap-10 mt-10 px-10">
    <Challengecard
     link="../"
     image="{efootball}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
      <Challengecard
     link="../"
     image="{cod}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
      <Challengecard
     link="../"
     image="{efootball}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
      <Challengecard
     link="../"
     image="{efootball}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
     

    </div>

    <div class="flex lg:flex-row flex-col gap-10 mt-10 px-10">
    <Challengecard
     link="../"
     image="{efootball}"
     game="efootball"
     challenge="Goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
      <Challengecard
     link="../"
     image="{cod}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
      <Challengecard
     link="../"
     image="{efootball}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
      <Challengecard
     link="../"
     image="{efootball}"
     game="efootball"
     challenge="goal icon"
     host="Enigma"
     reward="$500"
     duration="2hrs 45min"
     
     />
     

    </div>

</div>

<Footer/>