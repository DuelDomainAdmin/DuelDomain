<script lang="ts">
    export let link:string;
    export let image:string;
    export let duel_count:string;
    export let category:string;
    export let tag_color:string;
    export let title:string;
</script>

  <a class="w-full" href="{link}">
    <div class="dashboard-game-card w-full rounded-md px-3 py-5 h-48 " style="background-image: url('{image}');">

                    <div class="flex flex-row items-center justify-end">

                        <div class="flex items-center gap-1 text-xs">

                            <i class="fa-solid fa-burst text-green"></i>
                            {duel_count} Duels

                        </div>

                    </div>
                

                    <div class="flex flex-col justify-end h-full ">

                        
                    <div class="flex">

                        <div class="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs {tag_color}">

            {category}
             

          </div>

        

                    </div>

                    <p class="text-lg font-bold">
                       {title}
                    </p>

                    </div>

</div>
  </a>