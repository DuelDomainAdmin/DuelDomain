
<script lang="ts">
   export let link:string;
//    export let game:string;
   export let image:string;
   export let player_one_name:string;
   export let player_one_avatar:string;
   export let player_two_name:string;
   export let player_two_avatar:string;
   export let time:string;
   export let reward :string;
</script>

<div class="p-2 match-card rounded-md"  style="background-image: url('{image}');">

          <div class="mt-2 flex flex-row items-center justify-between">

            <div class="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs text-green flex flex-row items-center gap-1">
             <i class="fa-solid fa-burst"></i>
             Live.{time}
          </div>

          <div>

            <div class="bg_grd_one rounded-md text-xs px-3 py-1">

                ${reward}Duel

            </div>

          </div>

          </div>

          <div class="mt-20 flex flex-row items-center justify-between">

            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-col justify-center items-center">
                
                <img class="w-5 h-5 mt-2" src="{player_one_avatar}" alt="">
                <p class="text-xs">{player_one_name}</p>
             
              </div>
              <div class="flex flex-col">VS</div>
              <div class="flex flex-col justify-center items-center">
                
                <img class="w-5 h-5 mt-2" src="{player_two_avatar}" alt="">
                <p class="text-xs">{player_two_name}</p>
            
              </div>
            </div>

            <div>
                <a class="bg-white text-black text-xs rounded-md px-3 py-1 flex flex-row items-center gap-1" href="{link}"><i class="fa-solid fa-eye text-xs"></i> Spectate</a>
            </div>

          </div>


</div>

