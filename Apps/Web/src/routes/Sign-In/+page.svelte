
<script lang="ts">
    import DD from '$lib/assets/DD.png';

     import { notify } from '$lib/stores/notifyStore';
  
  function handleAction() {
    // notify.success("Account created!");
    // notify.error("Invalid username or password");
    // notify.neutral("Please sign in");
  }
</script>



<div class="xl:px-30 px-5 mt-10">

    <div class="flex justify-center">
         <img 
    src={DD} 
    alt="Duel Domain Logo" 
    class=" w-10 h-10"
  />
    </div>

    <div class="md:px-30">
         <div class="auth-container px-5 mt-10 xl:mt-5 py-5">

      <div class="xl:px-20">

          <div class="flex justify-center">
            <p class="text-center font-bold">Sign into your Account</p>

            
        </div>

        <div class="flex flex-col mt-10 ">

                <input class="form-input px-3 py-4" type="text" placeholder="Email or Username">
                <input class="form-input px-3 py-4 mt-5" type="text" placeholder="Password">

            </div>

            <div class="mt-4">
                <a class="grd_one" href="Forgot-Password">Forgot Password ?</a>
            </div>

            <div class="mt-5 flex">
                <button onclick={handleAction} class="btn-primary_grd-one w-full px-3 py-4 font-bold">Sign in</button>
            </div>

            

      </div>

    </div>
    </div>

    <div class="mt-5 flex justify-center">

                <a class="font-bold text-center" href="Sign-Up">Don’t Have An Account ? <span class="grd_three">Sign Up</span></a>

            </div>

</div>