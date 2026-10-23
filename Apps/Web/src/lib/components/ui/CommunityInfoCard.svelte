
<script lang="ts">

    export let icon : string;
    export let title: string;
    export let description : string;
</script>

<div class="px-5 py-5 w-full community-info_card rounded-md">

    <div class="">
        <i class="{icon}"></i>
    </div>
    <p class="font-bold text-sm mt-2">
        {title}
    </p>
    <p class="text-charcoal-white text-xs mt-1">
        {description}
    </p>

</div>