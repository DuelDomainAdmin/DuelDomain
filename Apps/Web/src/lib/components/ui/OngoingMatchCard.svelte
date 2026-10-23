
<script lang="ts">

 export let match_id:string;
 export let timestamp:string;
 export let player_one : string;
 export let player_one_wins:string;
 export let player_two:string;
 export let player_two_wins:string;
 export let player_one_avatar:string;
 export let player_two_avatar:string;
 export let match_link:string;


</script>

  <div class="w-full">

    <div class="w-full">
          <div class="bg-white/10 backdrop-blur-md mt-1 rounded-md py-5 px-2">
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-col justify-center items-center">
                <p class="text-xs text-secondary">#{match_id}</p>
                <img class="w-5 h-5 md:w-10 md:h-10 mt-2" src="{player_one_avatar}" alt="">
                <p class="text-xs">{player_one}</p>
                <p class="text-xs mt-2">{player_one_wins}</p>
              </div>
              <div class="flex flex-col">VS</div>
              <div class="flex flex-col justify-center items-center">
                <p class="text-xs text-charcoal-white">{timestamp}</p>
                <img class="w-5 h-5 md:w-10 md:h-10 mt-2" src="{player_two_avatar}" alt="">
                <p class="text-xs">{player_two}</p>
                <p class="text-xs mt-2">{player_two_wins}</p>
              </div>
            </div>
          </div>
        </div>

         <div class="flex">
          <a href="{match_link}" class="btn-primary rounded-md px-2 py-1 texts-xs w-full mt-1 text-center">Spectate</a>
        </div>
  </div>
 