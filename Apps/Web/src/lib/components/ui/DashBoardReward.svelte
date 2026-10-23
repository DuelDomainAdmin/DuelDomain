
<script lang="ts">

export let reward:string;
export let winner:string;
export let loser :string;


</script>

 <div class="dashboard_reward flex flex-row justify-between items-center mt-2">

                <div class="grd_one bg-white/10 backdrop-blur-md px-2 py-1 rounded-full text-xs">
                    {reward}
                </div>


                <div class="text-green bg-white/10 backdrop-blur-md px-2 py-1 rounded-full text-xs">
                    {winner}
                </div>

                <div>
                    vs
                </div>

                <div class="text-secondary bg-white/10 backdrop-blur-md px-2 py-1 rounded-full text-xs" >
                       {loser}
                </div>

            </div>