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
                    <p class="text-center font-bold">Welcome Admin</p>
                </div>

                <form class="mt-10" >
                    <div class="flex flex-col">
                        <input
                            class="form-input px-3 py-4"
                            name="email"
                            type="text"
                            placeholder="Email"
                            autocomplete="username"
                          
                        />
                       

                        <input
                            class="form-input px-3 py-4 mt-5"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autocomplete="current-password"
                            
                        />
                       
                    </div>

                    <div class="mt-4">
                    </div>

                    <div class="mt-5 flex">
                        <button
                            type="submit"
                            class="btn-primary_grd-one w-full px-3 py-4 font-bold"
                            
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="mt-5 flex justify-center">
        
    </div>
</div>