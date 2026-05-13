<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import blob from "$lib/assets/blob.png";
    import duel_coins from "$lib/assets/duel_coins.jpeg";
    import cash from "$lib/assets/cash.jpeg";
    import crypto_assets from "$lib/assets/crypto_assets.jpeg";
    import { notify } from '$lib/stores/notifyStore';

    function handleAction() {
    notify.neutral("Wagers are coming soon !");
  }
   
</script>

<NavBar/>

<div class="xl:px-30 px-5">

    <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
    </div>

    <div class="flex justify-center mt-10">

          <div class="bg-white/10 backdrop-blur-md rounded-full px-5 py-1 text-xs text-purple">

            The future of gaming
             

          </div>
          </div>

            <div class="relative mt-5">
          <h1 class="text-center text-4xl font-bold">Unlock <span class="grd_one">Epic rewrds</span></h1>
             <div class="flex items-center justify-center">
               <p class="text-center text-charcoal-white mt-1 w-lg">
              Master the arena and earn exclusive digital assets in the ultimate play-to-earn ecosysytem. Your skill translates directly into real world value.

              </p>
             

             </div>
               <div class="flex flex-row justify-center items-center gap-2 mt-3">
                  <a href="../Sign-In/"
      class="gap-1 px-3 py-1 btn-purple round-btn text-xs"
      title="sign in"
    >
      Start Earning Now
     
</a>
 <button  onclick={handleAction}
      class="gap-1 px-3 py-1 bg-white/10 backdrop-blur-md round-btn text-purple text-xs"
      title="view wagers"
    >
      View Wagers
     
</button>
               </div>
          </div>


          <div class="mt-10 relative">

              <div class="flex flex-col md:flex-row mt-10  items-center p-5">

        <div class="xl:w-2/5">
        <img class="rounded-md" src="{duel_coins}" alt="duel_coins" ></div>
        <div class="xl:w-3/5">
        <p class="md:px-10 font-bold text-xl mt-1">Crypto Token ($DUEL)</p>
         

        <div>

             <p class="md:px-10 py-2 text-charcoal-white text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, assumenda magnam. Recusandae tempore placeat illum asperiores quaerat quibusdam exercitationem itaque odio, illo officia totam saepe non. Itaque necessitatibus modi totam?</p>


             <ul class="md:px-10  list-style-none">

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Instant Match Rewards</p>

            </li>

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Rewards & Bonuses</p>

            </li>

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Instant Payouts</p>

            </li>

        </ul>
        </div>
    
    </div>

    </div>

     <div class="flex flex-col md:flex-row mt-10  items-center p-5">

        
        <div class="xl:w-3/5 order-2 md:order-one">
         <p class="md:px-10 font-bold text-xl mt-1">Cash</p>
       

        <div>

             <p class="md:px-10 py-2 text-charcoal-white text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, assumenda magnam. Recusandae tempore placeat illum asperiores quaerat quibusdam exercitationem itaque odio, illo officia totam saepe non. Itaque necessitatibus modi totam?</p>
        

              <ul class="md:px-10  list-style-none">

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Instant Funding</p>

            </li>

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Fast Withdrawals</p>

            </li>

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Secure Transactions</p>

            </li>

        </ul>
            
        </div>
    </div>

        <div class="xl:w-2/5 order-1 md:order-2">
        <img class="rounded-md" src="{cash}" alt="duel_coins" >
    </div>

    </div>

      <div class="flex flex-col md:flex-row mt-10  items-center p-5">

        <div class="xl:w-2/5">
        <img class="rounded-md" src="{crypto_assets}" alt="duel_coins" ></div>
        <div class="xl:w-3/5">
       <p class="md:px-10 font-bold text-xl mt-1">Crypto assets</p>
        <div>
            <p class="md:px-10 py-2 text-charcoal-white text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, assumenda magnam. Recusandae tempore placeat illum asperiores quaerat quibusdam exercitationem itaque odio, illo officia totam saepe non. Itaque necessitatibus modi totam?</p>
        <ul class="md:px-10  list-style-none">

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Crypto Deposits</p>

            </li>

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Crypto Withdrawals</p>

            </li>

            <li class="flex flex-row items-center gap-1 mt-2 ">

                <i class="fa-solid fa-circle-check text-primary text-xs"></i>
                <p class="text-xs">Borderless Payments</p>

            </li>

        </ul>
        </div>
    </div>

    </div>

            
          </div>


           <section class="rewards-cta-section mt-20">

                <div class="rewards-cta py-20 bg_grd_one">

                  <h2 class="text-2xl font-bold text-center px-2">Ready to claim your rewards ?</h2>

                  <div class="flex justify-center mt-2 px-2  ">
                  <p class="text-charcoal-white text-center w-lg text-xs">
                  join thousands of players already competing and earning in deul domain.Sign up today and get your first basic starter pack for free.

                  </p>


                  </div>

                   <div class="flex flex-row items-center justify-center mt-5 gap-2">
                  <a href="../Sign-In/"
      class="flex items-center  px-3 py-1 btn-white round-btn  text-xs font-bold"
      title="join"
    >
   
      Create Account
      
</a>

 <button onclick={handleAction}
      class="px-3 py-1 bg-white/10 backdrop-blur-md round-btn text-white text-xs"
      title="view wagers"
    >
      Explore wagers
     
</button>
               </div>
                </div>

               </section>


        

</div>

<Footer/>