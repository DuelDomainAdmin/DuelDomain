<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import glass_blob from '$lib/assets/glass_blob.png';
    import blob from '$lib/assets/blob.png';
</script>

<NavBar/>

<div class="xl:px-30 px-5 mt-20">

    <div class="flex flex-row">
        <div class="col-lg-6 col-12 hidden xl:flex flex-col contact-right-container">
<!-- 
              <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
   
    
    </div> -->
        <h1 class="text-4xl font-bold">

            Get in Touch with Us

        </h1>
        <p>
            we’ll respond to your enquiries or concerns
        </p>

         <div>
            
     <img class="relative w-75 h-75 mt-20" src="{glass_blob}" alt="">
         </div>

         

       



        </div>
        <div class="col-xl-6 col-12 p-5 ">
            <p class="text-xl font-bold text-center">Send A Message</p>

            <div class="flex flex-col mt-10 ">

                <input class="form-input px-3 py-2" type="text" placeholder="Name">
                <input class="form-input px-3 py-2 mt-5" type="text" placeholder="Email">
                 <input class="form-input px-3 py-1 pb-20 mt-5" type="text" placeholder="Message">
                 <div class="mt-5 flex">
                <button  class="btn-primary_grd-two w-full px-3 py-4 font-bold">Send Message</button>
            </div>
              <p class="text-center font-bold text-xl mt-2">OR</p>
                <p class="grd_one text-center text-xs">Reach us at support@dueldomain.com</p>

            </div>

        </div>

    </div>

</div>
<Footer/>