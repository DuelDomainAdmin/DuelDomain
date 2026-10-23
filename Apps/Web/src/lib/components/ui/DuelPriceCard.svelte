

<script lang="ts">

export let duel:string;
export let active:boolean;
export let price:string;


</script>

<div class="duel-price-card rounded-md py-6 px-2" class:active={active}>

    <p class="text-center font-bold text-xl">
        {duel}
    </p>

    <p class="text-center text-xs {active ? 'text-white' : 'text-primary'}">
        $duel
         
    </p>

    <p class="text-center font-bold text-xs mt-5  {active ? 'text-white' : 'text-gray'}">

        ${price}USD

    </p>

</div>