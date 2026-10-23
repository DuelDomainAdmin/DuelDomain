

<script lang="ts">


export let active:boolean=false;
export let link:string;
export let icon:string;
export let name:string;

    
</script>


<a href="{link}" title="Dahboardnavitem">

    <div class="dashboard-navitem flex flex-row items-center gap-2 py-3 rounded-xl px-2 text-xs" class:active={active}>

<div>
    <i class="{icon}"></i>
</div>

<div>
    <p class="">{name}</p>
</div>


</div>
</a>

