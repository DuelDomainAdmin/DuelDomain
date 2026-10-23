<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import Airee from "$lib/assets/Airee.png";
    import blob from '$lib/assets/blob.png';
    import Footer from "$lib/components/Footer.svelte";
</script>

<NavBar/>

<div class="xl:px-20 px-5 mt-5" >

    <div class="flex  md:flex-row flex-col md:gap-10 gap-2 items-center" >
         <div class="absolute top-0 left-0 w-full h-full z-0 layer-blur pointer-events-none">
        <img class="w-full h-full" src={blob} alt="">
    </div>

        <div class="col-lg-4 col-12 z-10"><img src={Airee} alt="Airee"></div>
        <div class="col-lg-7 col-12 z-10">
            <p class="text-2xl grd_one font-bold">Welcome to DUEL DOMAIN - I am your in game guide Airee</p>
            <p class="text-sm mt-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet voluptatibus quidem itaque voluptatum dicta, tempora laborum minima reprehenderit quia porro corporis nulla sequi necessitatibus ducimus repellendus expedita iusto animi.
 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet voluptatibus quidem itaque voluptatum dicta, tempora laborum minima reprehenderit quia porro corporis nulla sequi necessitatibus ducimus repellendus expedita iusto animi..</p>
<div class="mt-3 flex">
    <a href="../Select-Avatar" class="btn-primary_grd-one round-btn px-5 py-2 mt-3 text-sm font-bold">
        Next<i class="fa-solid fa-angles-right ml-1"></i>
    </a>
</div>
        </div>

    </div>

</div>
<Footer/>