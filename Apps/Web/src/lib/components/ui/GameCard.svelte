

<script lang="ts">
  export let image: string;
  export let title: string;
  export let description: string;
  export let link:string;
</script>

<a href="{link}">
    <div class="game_card px-7 py-7 flex flex-col">
    <img class="rounded-lg" src="{image}" alt="">
    <p class="font-bold text-md mt-2">{title}</p>
    <p class="text-xs mt-3 pb-20">{description}</p>

</div>
</a>