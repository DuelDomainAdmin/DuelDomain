
<script lang="ts">
import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
import { buttonVariants } from "$lib/components/ui/button/index.js";
import NavMore from "./NavMore.svelte";
import { user } from '$lib/features/user/me';
</script>


 <div class="flex flex-row justify-between items-center">
    <img class="w-5 h-5 md:w-8 md:h-8 rounded-full" src="{user.avatar}" alt="avatar" />
    <NavMore/>
</div>