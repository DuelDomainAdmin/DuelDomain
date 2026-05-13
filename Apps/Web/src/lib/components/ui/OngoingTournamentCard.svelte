
<script lang="ts">

export let tournament: {
    name: string;
    game: string;
    prize: string;
    entryFee: string;
    startTime: string;
    endTime: string;
    imageUrl: string | any;
};


</script>

<div class="ongoing-tournament-card p-5">

    <div class="flex flex-row items-center justify-between gap-10">

        <div>

            <p class="text-sm font-bold">{tournament.game}-{tournament.name}</p>
            <p class="text-xs text-charcoal-white">Ends in : {tournament.endTime}</p>

        </div>

        <div class="flex ">
            <img src={typeof tournament.imageUrl === 'string' ? tournament.imageUrl : tournament.imageUrl.default} alt={tournament.game} class="rounded-sm">
        </div>

    </div>

    <div class="flex flex-row gap-5 items-center mt-5 justify-between">

        <div class="flex flex-row gap-1 items-center">
            <i class="fa-solid fa-clock text-purple text-xs"></i>
            <p class="text-xs text-charcoal-white">Live</p>
        </div>
        <div class="flex flex-row gap-1 items-center">

            <i class="fa-solid fa-coins text-purple text-xs"></i>
              <p class="text-xs text-charcoal-white">Prize pool : {tournament.prize}</p>
        </div>

    </div>

    

    <div class="mt-5">

        <button class="btn-primary_grd-two round-btn px-5 py-1 text-xs w-full">
           View Details
    </button>

    </div>

</div>