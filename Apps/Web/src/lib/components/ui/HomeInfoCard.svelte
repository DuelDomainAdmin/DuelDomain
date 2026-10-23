<script lang="ts">
  export let icon: string;
  export let title: string;
  export let description: string;
</script>



<div class="home-info_card bg-dark flex flex-col px-5 pb-20 py-5">
    <i class="{icon} grd_one text-2xl"></i>
    <h1 class="text-lg font-bold mt-2">{title}</h1>
    <p class="text-sm font-thin mt-2">{description}</p>
</div>