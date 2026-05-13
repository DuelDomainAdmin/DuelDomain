<script lang="ts">
    

    export let title:string;
    export let count:number;
    export let stat:string;

</script>

<div class="bg-white/10 backdrop-blur-md px-5 py-10 rounded-xl w-full community-server_infocard">

    <p class="text-charcoal-white ">{title}</p>
    <p class="font-bold text-lg">{count}</p>
    <div class="flex flex-row items-center gap-1 text-green-light text-xs">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <p>{stat}</p>
    </div>

</div>
