
<script lang="ts">
    import DD from '$lib/assets/DD.png';
    import card from '$lib/assets/card.png';
    import visa from '$lib/assets/visa.png';   
    import crypto from '$lib/assets/crypto.png';
</script>
<footer class="mt-40">

     <!-- <div class="mt-5">
        <img class="" src="/src/lib/assets/payments.png" alt="">
    </div> -->

    <div class="dotted_grd_border xl:px-10 px-5 py-10">

        <div class="flex flex-row flex-wrap items-center justify-between gap-5">
       <div class="flex flex-col gap-2 " >
          <a href="../"> <img class="w-12 h-12" src={DD} alt="Duel Domain Logo"></a>
           <p class="mt-1 text-xs">The ultimate arena for skilled gamers to<br/> compete and earn</p>
           <div class="flex flex-row items-center gap-6">
            <img src={card} alt="">
             <img src={visa} alt="">
              <img src={crypto} alt="">
           </div>
       </div>

       <div class="flex flex-col  " >

        <h1 class="font-bold text-lg">Comapny</h1>

        <div class="flex flex-col gap-3 mt-5">

            <div class="flex flex-row gap-10">

                <a class="text-xs" href="../About">About Us</a>
                <a class="text-xs" href="../">Privacy Policy</a>

            </div>

             <div class="flex flex-row gap-10">

                <a class="text-xs" href="Contact/">Contact</a>
                <a class="text-xs" href="../">Terms & Conditions</a>

            </div>

            

        </div>

       </div>

       <div class="flex flex-col" >
         <h1 class="font-bold text-lg">Follow Us</h1>
         <div class="flex flex-row gap-5 mt-5">

            <a href="../" aria-label="brand" > <i class="fa-brands fa-discord grd_one"></i></a>

           
            
            <a href="../" aria-label="brand"><i class="fa-brands fa-twitch grd_one"></i></a>

            <a href="../" aria-label="brand"><i class="fa-brands fa-x-twitter grd_one"></i></a>

            <a href="../" aria-label="brand"><i class="fa-brands fa-instagram grd_one"></i></a>

         </div>

       </div>
        
    </div>

   

    </div>

    <div class="pb-5">
        <p class="text-center text-xs mt-10">© 2026 Duel Domain. All rights reserved.</p>
    </div>
    
</footer>