<script lang="ts">
export let tournament: {
    name: string;
    game: string;
    prize: string;
    type:string;
    time:string;
    status:boolean;
    imageUrl: string | any;
};

</script>

<div class="upcoming-tournaments-card p-2 mt-5">

    <div class="flex flex-row gap-3 items-center justify-between flex-wrap">

        <div>
            <img class="rounded-sm" src={typeof tournament.imageUrl === 'string' ? tournament.imageUrl : tournament.imageUrl.default} alt={tournament.game}>
        </div>

        <div>
            <p class="text-xs lg:text-sm font-bold">{tournament.game}-{tournament.name}</p>
            <p class="text-xs text-charcoal-white mt-2">{tournament.type}</p>

        </div>

        <div>
            <p class="text-xs text-charcoal-white">Date & Time</p>
            <p class="text-xs mt-2 ">{tournament.time}</p>
        </div>

        <div>
            <p class="text-xs text-charcoal-white">Prize pool</p>
            <p class="text-xs text-blue font-bold mt-2 ">{tournament.prize}</p>
        </div>

        <div>
            <p class="text-xs text-charcoal-white">Status</p>
            <p class="text-xs {tournament.status ? 'text-green-light' : 'text-yellow'} mt-2">
                {tournament.status ? "Open" : "Closed"}
            </p>
        </div>

        <div>
            <button 
                class="{tournament.status ? 'tournament-register-btn' : 'tournament-register-btn--closed'} round-btn px-5 py-1 text-xs w-full" 
                disabled={!tournament.status}
            >
                {tournament.status ? "Register" : "Closed"}
            </button>
        </div>

    </div>

</div>