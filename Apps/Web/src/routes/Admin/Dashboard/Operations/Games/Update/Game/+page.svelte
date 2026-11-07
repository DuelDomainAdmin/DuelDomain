<script lang="ts">
    import { enhance } from '$app/forms';
    import type { SubmitFunction } from '@sveltejs/kit';
    import DD from '$lib/assets/DD.png';
    import { ROUTES } from '$lib/config/routes';
    import { notify } from '$lib/stores/notifyStore';
   
</script>

<div class="xl:px-30 px-5 mt-10">
    <div class="flex justify-center">
        <img src={DD} alt="Duel Domain Logo" class="w-10 h-10" />
    </div>

    <div class="md:px-30">
        <div class="auth-container px-5 mt-10 xl:mt-5 py-5">
            <div class="xl:px-20">
                <div class="flex justify-center">
                    <p class="text-center font-bold">Add A Game</p>
                </div>

                <form class="mt-10" >
                 <div class=" mb-5">
                        <button
                            type="submit"
                            class="btn-primary w-full px-3 py-4 font-bold"
                            
                        >
                            Update banner Image
                        </button>
                        <p class="text-xs text-gray">Selected nmm.png</p>
                    </div>
                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="gameName"
                            type="text"
                            placeholder="Game Name"
                            
                          
                        />
                       

                        <input
                            class="form-input px-3 py-5 mt-5"
                            name="game description"
                            type="text"
                            placeholder="Game Description"
                           
                            
                        />

                          <div>

                            <p class="text-xs text-gray mb-1 mt-2">Select platform</p>
                         <div class="flex items-center gap-4 flex-wrap ">

                         <div>
                            <input type="radio" name="mobile" value="Mobile" checked/>
                            <label for="mobile">Mobile</label>
                         </div>
                         <div>
                            <input type="radio" name="pc" value="PC" />
                            <label for="pc">Pc</label>
                         </div>
                         <div>
                            <input type="radio" name="playstation" value="PlayStation" />
                            <label for="playstation">PlayStation</label>
                         </div>

                         <div>
                            <input type="radio" name="xbox" value="Xbox" />
                            <label for="xbox">Xbox</label>
                         </div>

                         <div>
                            <input type="radio" name="crossplatform" value="Cross-Platform" />
                            <label for="crossplatform">Cross-Platform</label>
                         </div>
                         </div>
                          </div>

                          <input
                            class="form-input px-3 py-4 mt-5"
                            name="gameType"
                            type="text"
                            placeholder="Game Type"
                            
                          
                        />

                        <div>
                            <p class="text-xs text-gray mt-5 mb-1">Match Modes</p>

                            <div class="flex flex-col">
                            <input
                            class="form-input px-3 py-1"
                            name="matchmode"
                            type="text"
                            placeholder="Match Mode One"
                            
                          
                        />
                         <input
                            class="form-input px-3 py-4"
                            name="matchmode"
                            type="text"
                            placeholder="Description"
                            
                          
                        />


                         <input
                            class="form-input px-3 py-1 mt-5"
                            name="matchmode"
                            type="text"
                            placeholder="Match Mode Two"
                            
                          
                        />
                         <input
                            class="form-input px-3 py-4"
                            name="matchmode"
                            type="text"
                            placeholder="Description"
                            
                          
                        />

                         <input
                            class="form-input px-3 py-1 mt-5"
                            name="matchmode"
                            type="text"
                            placeholder="Match Mode Three"
                            
                          
                        />
                         <input
                            class="form-input px-3 py-4"
                            name="matchmode"
                            type="text"
                            placeholder="Description"
                            
                          
                        />
                            </div>
                        </div>
                      
                       
                    </div>

                    <div class="mt-4">
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary_grd-one w-full px-3 py-4 font-bold"
                            
                        >
                            Update Game
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="mt-5 flex justify-center">
        
    </div>
</div>