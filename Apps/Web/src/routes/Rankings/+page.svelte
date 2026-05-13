<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import * as Table from "$lib/components/ui/table/index.js";
    import blob from "$lib/assets/blob.png"
    import RankingsFilterBubble from "$lib/components/ui/RankingsFilterBubble.svelte";

      const users = [
    {

      count:"1",
      username: "Jade",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Jade",
      wins: "24",
      losses: "2",
      earnings:"2500",
      link:"../"
      
    },

     {
      count:"2",
      username: "Ryker",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ryker",
      wins: "19",
      losses: "4",
      earnings:"2000",
      link:"../"
      
    },

     {
      count:"3",
      username: "Jade",
      avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer",
      wins: "16",
      losses: "9",
      earnings:"1222",
      link:"../"
      
    },
  
  ];
</script>

<NavBar/>

<div class="xl:px-30 px-5">

     <!-- <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
        </div> -->
   

   <div class="relative">
       <h1 class="text-4xl font-bold text-center z-10 mt-5 ">Rankings</h1>
   </div>
    <!-- <p class="text-center text-xs z-10">Behold the skilled </p> -->
    
    
  <div class="flex flex-row items-center justify-between mt-10 relative">
    <div class="flex flex-row items-center gap-2 flex-wrap ">

    <RankingsFilterBubble filter="All" active={true} />
    <RankingsFilterBubble filter="By Game"  />
    <RankingsFilterBubble filter="By reward" />
    <RankingsFilterBubble filter="By region" />
    
       

    </div>
    <div><button class="text-md" title="filter"><i class="ph ph-faders-horizontal"></i></button></div>

    </div>
<div class="mt-5">
    <Table.Root class="">
  
  <Table.Header class="">
    <Table.Row class="ranking-table-head">
     <Table.Head class="">0</Table.Head>
      <Table.Head class="text-primary font-bold">User</Table.Head>
      <Table.Head class="text-primary font-bold">Wins</Table.Head>
      <Table.Head class="text-primary font-bold">Losses</Table.Head>
      <Table.Head class="text-primary font-bold">Earnings</Table.Head>
      <!-- <Table.Head class="text-primary">More</Table.Head> -->
    </Table.Row>
  </Table.Header>
  <Table.Body class="">
    {#each users as user (user)}
      <Table.Row class="ranking-table-row mt-2">
       <Table.Cell class="text-primary text-xs">{user.count}</Table.Cell>
        <Table.Cell class="font-medium">
            <div class="flex flex-row gap-1 items-center ">
            <img class="w-5 h-5 md:w-10 md:h-10" src="{user.avatar}" alt="">
            <p class="text-xs">{user.username}</p>

            </div>
        </Table.Cell>
        <Table.Cell class="text-green-light text-xs">{user.wins}</Table.Cell>
        <Table.Cell class="text-secondary text-xs">{user.losses}</Table.Cell>
        <Table.Cell class="text-gold text-xs">${user.earnings}</Table.Cell>
        <!-- <Table.Cell class="text-xs"><a href="{user.link}" title="more"><i class="fa-solid fa-ellipsis"></i></a></Table.Cell> -->
       
      </Table.Row>
    {/each}
  </Table.Body>
  
</Table.Root>
</div>
    
</div>

<Footer/>