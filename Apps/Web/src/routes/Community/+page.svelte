<script lang="ts">
//   import airee_head from "$lib/assets/Airee - head.png"
import NavBar from "$lib/components/NavBar.svelte";
import Footer from "$lib/components/Footer.svelte";
import blob from "$lib/assets/blob.png";
import CommunityServerInfoCard from "$lib/components/ui/CommunityServerInfoCard.svelte";
import CommunityInfoCard from "$lib/components/ui/CommunityInfoCard.svelte";
  import { Title } from "$lib/components/ui/alert";
</script>
<!-- bg-white/10 backdrop-blur-md -->
<NavBar/>

  <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
        </div>

        <div class="flex justify-center mt-10">

          <div class="bg-white/10 backdrop-blur-md rounded-full px-5 py-1 text-xs">

            Live Community
             

          </div>

        </div>

        <div class="xl:px-30 px-5 mt-5">

          <div class="relative ">
          <h1 class="text-center text-4xl font-bold">Join Duel Domain</h1>
             <div class="flex items-center justify-center">
               <p class="text-center text-charcoal-white mt-1 w-lg">
              Join the heart of our gaming ecosystem. Connect , compete and conquer with thousands of dueslist on discord

              </p>
             

             </div>
               <div class="flex justify-center">
                  <a href="../"
      class="flex items-center gap-1 px-3 py-1 btn-purple round-btn mt-2 font-bold"
      title="join discord"
    >
      Join 
      <i class="fa-brands fa-discord"></i>
</a>
               </div>

               <div class="flex flex-col md:flex-row gap-5 items-center justify-center mt-5">

                 <CommunityServerInfoCard title="Total Member" count={45280} stat="12% this month"/>

                 <CommunityServerInfoCard title="Active Gamers" count={12450} stat="5% increase"/>

                  <CommunityServerInfoCard title="Tournaments Hosted" count={1000} stat="+20% Rewards"/>

               </div>

               <div class="mt-20">

                <h2 class="font-bold text-2xl">Why Join The Server</h2>
               <p class="text-charcoal-white tex-xs md:w-xl">Our discord server is mre than  just a chat room.. it is where the future of Duel domain is built. Get early access , meet the devs and earn $DUEL</p>

               </div>

               <div class="mt-20 flex flex-col md:flex-row gap-5 ">

                <CommunityInfoCard icon="fa-solid fa-star" title="Alpha Leaks" description="Get first access to upcoming NFT drops and game mechanics before they hit the public market."/>

                 <CommunityInfoCard icon="fa-solid fa-trophy" title="Pro Tournaments" description="Weekly prize pools in $DUEL for top ranking players in our community leagues."/>

                  <CommunityInfoCard icon="fa-solid fa-headset" title="Direct Support" description="24/7 assistance from our mod team and direct feeedback loops with the core development teams."/>



               </div>

               <section class="community-cta-section mt-20">

                <div class="community-cta py-20">

                  <h2 class="text-2xl font-bold text-center">Ready to claim your rank ?</h2>

                  <div class="flex justify-center mt-2 ">
                  <p class="text-charcoal-white text-center w-lg text-xs">
                  join over 45k+ gamers building the next generation of competeitive web3 gaming.

                  </p>


                  </div>

                   <div class="flex justify-center mt-2">
                  <a href="../"
      class="flex items-center gap-1 px-3 py-1 btn-primary_grd-one round-btn mt-2"
      title="join discord"
    >
    <i class="fa-solid fa-rocket"></i>
      Join Community Now
      
</a>
               </div>
                </div>

               </section>
          </div>

        </div>
<Footer/>
