


<script lang="ts">
  export let link:string;
  export let image: string;
  export let game: string;
  export let challenge:string;
  export let host:string;
  export let reward:string;
  export let duration:string;
  
</script>

<a href="{link}">
    <div class="challenge_card flex flex-col">
    <img class="w-full" src="{image}" alt="">

    <div class="px-5 pb-7">

    
    <p class="font-bold text-md mt-2">{game} : {challenge}</p>
    <p class="text-xs mt-3 pb-20">Hosted by {host}</p>

    <div class="flex flex-row items-center justify-between flex-wrap gap-2">
    <div class="flex flex-row items-center gap-1 text-green text-xs">
       <i class="fa-solid fa-trophy"></i> {reward}
    </div>
    <div class="flex flex-row items-center gap-1 text-gray text-xs">
          <i class="fa-regular fa-clock"></i> Ends in {duration}
    </div>

    </div>

    </div>

</div>
</a>