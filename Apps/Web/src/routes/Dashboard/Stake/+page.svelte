

<script lang="ts">
  import logo from '$lib/assets/logo.png';
  import DashBoardSideBar from '$lib/components/DashBoardSideBar.svelte';
  import DashBoardMobileNavBar from '$lib/components/DashBoardMobileNavBar.svelte';
  import DuelPriceCard from '$lib/components/ui/DuelPriceCard.svelte';
  import DashboardPlatformSelectCard from '$lib/components/ui/DashboardPlatformSelectCard.svelte';
  import PlatformGameCard from '$lib/components/ui/PlatformGameCard.svelte';
  import dash_cod from "$lib/assets/dash_cod.jpg";
  import dash_football from "$lib/assets/dash_football.jpg";
  import dash_ff from "$lib/assets/dash_ff.jpg";
  import dash_mk from "$lib/assets/dash_mk.jpg";
  import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  let selectedPrice: string | null = null;
  let customAmount: string = '';
  let selectedPlatform: string | null = null;
  let selectedGame: string | null = null;
  let selectedMode: string = '1v1';
  let showModal = false;
  let matchSummary: Record<string, string> | null = null;


  const prices = [
    { duel: '100',  price: '1.0'  },
    { duel: '200',  price: '2.0'  },
    { duel: '500',  price: '5.0'  },
    { duel: '1000', price: '10.0' },
  ];

  const platforms = [
    { icon: 'fa-solid fa-mobile',       platform: 'Mobile'      },
    { icon: 'fa-solid fa-display',      platform: 'PC'          },
    { icon: 'fa-brands fa-playstation', platform: 'Playstation' },
    { icon: 'fa-brands fa-xbox',        platform: 'Xbox'        },
  ];

  const games = [
    { image: dash_cod,      platform: 'fa-solid fa-mobile', duel_count: '200', category: 'mmorpg', tag_color: 'text-purple',    title: 'Call of Duty Mobile' },
    { image: dash_football, platform: 'fa-solid fa-mobile', duel_count: '196', category: 'mmo',    tag_color: 'text-green',     title: 'Efootball'           },
    { image: dash_ff,       platform: 'fa-solid fa-mobile', duel_count: '180', category: 'mmorpg', tag_color: 'text-primary',   title: 'Free Fire'           },
    { image: dash_mk,       platform: 'fa-solid fa-mobile', duel_count: '130', category: 'mmo',    tag_color: 'text-secondary', title: 'Mortal Kombat'       },
  ];

  const modes = [
    { value: '1v1',              label: '1v1',              description: 'Play against one opponent' },
    { value: 'Team Death Match', label: 'Team Death Match', description: 'Form teams and compete'    },
    { value: 'Battle Royale',    label: 'Battle Royale',    description: 'Last team standing wins'   },
  ];

 
  $: effectiveStake  = customAmount ? parseFloat(customAmount) : selectedPrice ? parseFloat(selectedPrice) : 0;
  $: platformFee     = +(effectiveStake * 0.05).toFixed(2);
  $: potentialPayout = +(effectiveStake * 2 - platformFee).toFixed(2);
  $: profit          = +(effectiveStake - platformFee).toFixed(2);

  function selectPrice(duel: string) {
    selectedPrice = duel;
    customAmount  = '';
  }

  function handleCreateMatch() {
    matchSummary = {
      Stake:    customAmount ? `${customAmount} $DUEL (custom)` : selectedPrice ? `${selectedPrice} $DUEL` : 'Not selected',
      Platform: selectedPlatform ?? 'Not selected',
      Game:     selectedGame     ?? 'Not selected',
      Mode:     selectedMode,
      Fee:      effectiveStake > 0 ? `${platformFee} $DUEL`     : '—',
      Payout:   effectiveStake > 0 ? `${potentialPayout} $DUEL` : '—',
    };
    showModal = true;
  }

  function closeModal() { showModal = false; }

  function onBackdropKey(e: KeyboardEvent) {
    if (e.key === 'Escape') closeModal();
  }

  const selectable = 'cursor-pointer transition-all duration-150 rounded-md';
   const ring ='p-[2px] rounded-xl bg-gradient-to-r from-[#0D95FF] via-[#8651AC] to-[#FB00CD]';
</script>

<div class="px-5 flex flex-row">


  <div class="w-1/6 hidden xl:flex flex-col justify-between dashboard-navbar sticky top-0 h-screen">
    <div>
      <a href="../">
        <img src={logo} alt="Duel Domain Logo" class="xl:w-15 xl:h-15 w-10 h-10" />
      </a>
      <div class="mt-5">
        <DashBoardSideBar active={'Stake'} />
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <img class="w-5 h-5 md:w-8 md:h-8 rounded-full" src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jade" alt="" />
      <button aria-label="Settings"><i class="fa-solid fa-gear text-gray"></i></button>
    </div>
  </div>


  <div class="w-full xl:w-5/6 xl:px-2 dashboard-aside flex flex-col">

    
    <div class="hidden xl:flex flex-row justify-between py-4 items-center sticky top-0 z-10 bg-black">
      <div class="dashboard_search flex items-center gap-2 px-4 py-2">
        <i class="fa-solid fa-magnifying-glass text-xs text-gray"></i>
        <input class="text-xs w-full" type="text" placeholder="Enter Match ID or Player ID" />
      </div>
      <div class="flex flex-row items-center gap-2">
        <p class="font-bold text-xs">0 $DUEL</p>
        <a href="Add-Duels" aria-label="Add Duels" class="btn-secondary rounded-full text-xs px-2 py-2 flex items-center gap-1">
          <i class="fa-solid fa-plus"></i>
        </a>
      </div>
    </div>

  
    <div class="xl:hidden dashboard-mobile-top-bar">
      <div class="flex flex-row justify-between items-center mt-1">
        <a href="../">
          <img src={logo} alt="Duel Domain Logo" class="w-10 h-10" />
        </a>
        <div class="flex flex-row items-center gap-2">
          <p class="font-bold text-xs">0 $DUEL</p>
          <a href="Add-Duels" aria-label="Add Duels" class="btn-secondary rounded-full text-xs px-2 py-2 flex items-center gap-1">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div>
      </div>
      <div class="dashboard_search flex items-center gap-2 px-4 py-2 mt-1 w-full">
        <i class="fa-solid fa-magnifying-glass text-xs text-gray"></i>
        <input class="text-xs w-full" type="text" placeholder="Enter Match ID or Player ID" />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row gap-2 mt-4">

     
      <div class="main w-full lg:w-4/5 xl:px-3 dashboard-aside--main ">

        <div class="flex flex-row items-center justify-between flex-wrap">
          <div>
            <h1 class="text-4xl font-bold">Stake <span class="grd_one">$DUEL</span></h1>
            <p class="text-xs text-charcoal-white">Stake $DUEL and compete</p>
          </div>
          <div class="mt-5 flex flex-row gap-2 items-center">
            <button
              on:click={handleCreateMatch}
              class="btn-primary_grd-one rounded-md text-xs px-4 py-2 flex items-center gap-2"
            >
              <i class="fa-solid fa-plus"></i> Create Match
            </button>
            <a class="text-xs" href="../">Join Match</a>
          </div>
        </div>

        <div class="mt-5">

        
          <div>
            <div class="flex flex-row items-center gap-2 mb-5">
              <div class="bg_grd_one px-3 rounded-full flex items-center justify-center">1</div>
              <p class="font-bold">SELECT STAKING AMOUNT</p>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {#each prices as p}
                <div
                  role="button"
                  tabindex="0"
                  class="{selectable} {selectedPrice === p.duel && !customAmount ? ring : ''}"
                  on:click={() => selectPrice(p.duel)}
                  on:keydown={(e) => e.key === 'Enter' && selectPrice(p.duel)}
                >
                  <DuelPriceCard active={selectedPrice === p.duel && !customAmount} duel={p.duel} price={p.price} />
                </div>
              {/each}
            </div>

            <div class="mt-4 bg-dark-bg rounded-md flex items-center gap-2 px-4 py-3 transition-all duration-150 {customAmount ? ring : ''}">
              <input
                bind:value={customAmount}
                on:input={() => { if (customAmount) selectedPrice = null; }}
                class="text-md w-full border-none outline-none bg-transparent"
                type="number"
                placeholder="Custom Amount (Min 100 $Duels)"
              />
            </div>
          </div>

          
          <div class="mt-10">
            <div class="flex flex-row items-center gap-2 mb-2">
              <div class="bg_grd_one px-3 rounded-full flex items-center justify-center">2</div>
              <p class="font-bold">SELECT PLATFORM</p>
            </div>

            <div class="flex flex-row gap-2 items-center flex-wrap">
              {#each platforms as p}
                <div
                  role="button"
                  tabindex="0"
                  class="{selectable} {selectedPlatform === p.platform ? ring : ''}"
                  on:click={() => selectedPlatform = p.platform}
                  on:keydown={(e) => e.key === 'Enter' && (selectedPlatform = p.platform)}
                >
                  <DashboardPlatformSelectCard
                    icon={p.icon}
                    platform={p.platform}
                    active={selectedPlatform === p.platform}
                  />
                </div>
              {/each}
            </div>
          </div>

       
          <div class="mt-10 mb-10">
            <div class="flex flex-row items-center gap-2 mb-5">
              <div class="bg_grd_one px-3 rounded-full flex items-center justify-center">3</div>
              <p class="font-bold">SELECT GAME</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {#each games as g}
                <div
                  role="button"
                  tabindex="0"
                  class="{selectable} {selectedGame === g.title ? ring : ''}"
                  on:click={() => selectedGame = g.title}
                  on:keydown={(e) => e.key === 'Enter' && (selectedGame = g.title)}
                >
                  <PlatformGameCard
                    image={g.image}
                    platform={g.platform}
                    duel_count={g.duel_count}
                    category={g.category}
                    tag_color={g.tag_color}
                    title={g.title}
                    active={selectedGame === g.title}
                  />
                </div>
              {/each}
            </div>
          </div>

        </div>
      </div>

     
      <div class="dashboard-aside--side lg:w-1/5 xl:flex flex-col  top-0 h-screen ">
        <p class="font-bold">MATCH MODE</p>

        <div class="bg-dark-bg mt-2 rounded-md p-5">
          <RadioGroup.Root class="" bind:value={selectedMode}>
            {#each modes as m}
              <div class="flex items-center justify-between space-x-2">
                <Label
                  class="grd_one font-bold cursor-pointer {selectedMode === m.value ? 'opacity-100' : 'opacity-50'}"
                  for={m.value}
                >{m.label}</Label>
                <RadioGroup.Item class="" value={m.value} id={m.value} />
              </div>
              <p class="text-xs text-gray-500 mb-3">{m.description}</p>
            {/each}
          </RadioGroup.Root>
        </div>

        <div class="pb-30 md:pb-0">
          <div class="bg_grd_one stake-match-card px-5 py-5 md:px-4 rounded-md mt-5">
            <p class="text-center text-xs">Potential Payout</p>
            <p class="text-2xl font-bold text-center mt-2">
              {effectiveStake > 0 ? potentialPayout.toFixed(2) : '—'}
            </p>
            <p class="text-center text-xs text-green-500 font-bold">$Duel tokens</p>

            <div class="flex justify-between mt-5">
              <p class="text-xs font-bold">Game</p>
              <p class="text-xs font-bold">{selectedGame ?? '—'}</p>
            </div>

            <div class="flex justify-between mt-4">
              <p class="text-xs font-bold">Platform</p>
              <p class="text-xs font-bold">{selectedPlatform}</p>
            </div>

            <div class="flex justify-between mt-4">
              <p class="text-xs font-bold">Mode</p>
              <p class="text-xs font-bold">{selectedMode}</p>
            </div>
            <div class="flex justify-between mt-4">
              <p class="text-xs font-bold">Stake</p>
              <p class="text-xs font-bold">{effectiveStake > 0 ? `${effectiveStake.toFixed(2)} $DUEL` : '—'}</p>
            </div>
            <div class="flex justify-between mt-4">
              <p class="text-xs font-bold">Platform Fee (5%)</p>
              <p class="text-xs font-bold">{effectiveStake > 0 ? `-${platformFee} $DUEL` : '—'}</p>
            </div>

            <hr class="mt-5" />

            <div class="flex justify-between mt-4">
              <p class="text-xs text-green-500 font-bold">Profit Potential</p>
              <p class="text-xs text-green-500 font-bold">{effectiveStake > 0 ? `+${profit} $DUEL` : '—'}</p>
            </div>

            <div class="mt-5">
              <button
                on:click={handleCreateMatch}
                class="bg-white rounded-md text-xs font-bold w-full p-3 text-primary"
              >
                Create Match
              </button>
              <button class="rounded-md text-xs font-bold w-full p-2 border-white border-2 mt-2">
                Join Existing
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<DashBoardMobileNavBar active={'Stake'} />


{#if showModal && matchSummary}
 
  <div
    role="none"
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
    on:click={closeModal}
    on:keydown={onBackdropKey}
  >
   
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabindex="-1"
      class="bg-dark-bg rounded-xl p-8 w-full max-w-sm mx-4 relative"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <button
        aria-label="Close modal"
        class="absolute top-4 right-4 text-gray-400 hover:text-white"
        on:click={closeModal}
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <h2 id="modal-title" class="font-bold text-lg mb-1">Match Summary</h2>
      <p class="text-xs text-charcoal-white mb-5">Review your selections before confirming</p>

      <div class="flex flex-col gap-3">
        {#each Object.entries(matchSummary) as [key, val]}
          <div class="flex justify-between items-center border-b border-white/10 pb-2">
            <p class="text-xs text-gray-400">{key}</p>
            <p class="text-xs font-bold {val === 'Not selected' ? 'text-red-400' : 'text-green-400'}">{val}</p>
          </div>
        {/each}
      </div>

      <div class="mt-6 flex flex-col gap-2">
        <button
          class="bg-white rounded-md text-xs font-bold w-full p-3 text-primary"
          on:click={closeModal}
        >
          Confirm & Create Match
        </button>
        <button
          class="rounded-md text-xs font-bold w-full p-2 border-white border-2"
          on:click={closeModal}
        >
          Go Back & Edit
        </button>
      </div>
    </div>
  </div>
{/if}