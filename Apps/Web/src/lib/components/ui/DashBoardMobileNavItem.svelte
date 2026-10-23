
<script lang="ts">

export let link:string;
export let icon:string;
export let title:string;
export let active:boolean;

</script>

<div>
      <a class="flex flex-col text-xs items-center {active ? 'grd_one' : 'text-gray'}" href="{link}" title="nav-item"><i class="{icon}"></i><span class="{active ? 'grd_one' : 'text-gray'} text-xs">{title}</span></a>
    </div>