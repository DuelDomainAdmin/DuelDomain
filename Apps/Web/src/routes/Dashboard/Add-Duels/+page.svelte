<script lang="ts">
  import logo from '$lib/assets/logo.png';
  import DashBoardSideBar from '$lib/components/DashBoardSideBar.svelte';
  import DashBoardMobileNavBar from '$lib/components/DashBoardMobileNavBar.svelte';
  import DuelPriceCard from '$lib/components/ui/DuelPriceCard.svelte';
  

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
       <DashBoardSideBar active={'None'}/>
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

    <div class="hidden xl:flex flex-row justify-end py-4 items-center sticky top-0 z-10 bg-black">
      

      <div class="flex flex-row items-center gap-2">
        <div>
          <p class="font-bold text-xs">0 $DUEL</p>
        </div>
        <div>
          <button class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels">
            <i class="fa-solid fa-plus"></i>
          </button>
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
          <button class="btn-secondary rounded-full text-xs px-2 py-2 flex flex-row items-center gap-1" title="Add Duels">
            <i class="fa-solid fa-plus text-xs"></i>
          </button>
        </div>
      </div>

    </div>

   

    </div>
    

    

      <div class="main w-full mt-4  dashboard-aside--main">

        

            <div>

                <h1 class="text-2xl font-bold">
                 Add $DUELS to your wallet

                </h1>

                <p class="text-xs text-charcoal-white" >
                    Purchase $duel using cash or cryptocurrency.
                </p>

            </div>

            <div class="mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

                <DuelPriceCard active={true} duel={'100'} price={'1.0'}/>
                <DuelPriceCard active={false} duel={'200'} price={'2.0'}/>
                <DuelPriceCard active={false} duel={'500'} price={'5.0'}/>
                <DuelPriceCard active={false} duel={'1000'} price={'10.0'}/>



            </div>

            <div class="mt-4 w-full">

        <div class="bg-dark-bg rounded-md flex items-center justify-center  gap-2 px-4 py-3">
        <input class="text-md w-full border-none outline-none" type="number" placeholder="Custom Amount (Min 100 $Duels)">
      </div>

            </div>

            <div class="mt-5 flex flex-col md:flex-row gap-5 items-center mb-30">

                <div class="px-6 py-8 bg-dark-bg rounded-md">

                    <div class="flex flex-row items-center justify-between">

                        <div class="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md">
                        <i class="fa-solid fa-credit-card text-primary"></i>

                        </div>

                        <div class="bg-primary px-2 py-1 rounded-sm text-xs font-bold">
                        SECURE PAY

                        </div>

                    </div>

                    <p class="font-bold mt-5">
                      Pay With Credit Card

                    </p>

                    <p class="text-xs">
                    Instant Processing using visa , MasterCard or Apple pay. Quick , secure and globally supported.

                    </p>

                     <div>
                <div class="flex items-center justify-center mt-5">

                    <button class="bg-white text-black rounded-sm px-3 py-3 flex justify-center flex-row items-center gap-1 font-bold text-center w-full" >Secure Pay <i class="fa-solid fa-arrow-right"></i></button>

                </div>
            </div>

                </div>

                  <div class="px-6 py-8 bg-dark-bg rounded-md">

                    <div class="flex flex-row items-center justify-between">

                        <div class="px-2 py-1 bg-white/10 backdrop-blur-md rounded-md">
                        <i class="fa-solid fa-bitcoin-sign text-discord"></i>

                        </div>

                        <div class="bg-discord px-2 py-1 rounded-sm text-xs font-bold">
                        CRYPTOMUS PAY

                        </div>

                    </div>

                    <p class="font-bold mt-5">
                      Pay With Crypto

                    </p>

                    <p class="text-xs">
                   Decentralized payments via BTC, ETH , SOL or USDT. Direct wallet-to-wallet transfer with low fees.

                    </p>

                     <div>
                <div class="flex items-center justify-center mt-5">

                    <button class="bg-discord text-white rounded-sm px-3 py-3 flex justify-center flex-row items-center gap-1 font-bold text-center w-full" >Cryptomus <i class="fa-solid fa-bolt"></i></button>

                </div>
            </div>

                </div>

               




            </div>
      </div>

  </div>

</div>


<DashBoardMobileNavBar active={'None'}/>