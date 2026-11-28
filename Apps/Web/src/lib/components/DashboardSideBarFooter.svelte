<script lang="ts">
import { onMount } from "svelte";
import { generateAvatars } from "$lib/features/player/avatar/generator";
import { user } from "$lib/features/user/me";
import NavMore from "./NavMore.svelte";

let guestAvatar = $state<string | null>(null);

onMount(() => {
	guestAvatar = generateAvatars(1)[0].src;
});
</script>

<div class="flex flex-row justify-between items-center">
	<img
		class="w-5 h-5 md:w-8 md:h-8 rounded-full"
		src={user.id && user.avatar ? user.avatar : guestAvatar}
		alt="avatar"
	/>
	<NavMore />
</div>