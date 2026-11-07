<script lang="ts">
import { goto } from "$app/navigation";
import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
import { ROUTES } from "$lib/config/routes";
import { notify } from "$lib/stores/notifyStore";

async function signOut() {
	const response = await fetch(ROUTES.signOut, { method: "POST" });

	if (!response.ok) {
		notify.error("Could not sign out. Please try again.");
		return;
	}

	notify.success("Signed out.");
	await goto(ROUTES.signIn, { invalidateAll: true });
}
</script>

 <DropdownMenu.Root>
	<DropdownMenu.Trigger class=""><i class="fa-solid fa-ellipsis text-gray"></i></DropdownMenu.Trigger>
	<DropdownMenu.Content class="bg-dark-bg text-white border-0" align="start" portalProps={{}}>
		<DropdownMenu.Group>
			<DropdownMenu.Label inset={false} class="">My Account</DropdownMenu.Label>
			<DropdownMenu.Item inset={false} class="">
				Profile
				<DropdownMenu.Shortcut class="">⇧⌘P</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item inset={false} class="">
				Billing
				<DropdownMenu.Shortcut class="">⌘B</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
			<DropdownMenu.Item inset={false} class="">
				Settings
				<DropdownMenu.Shortcut class="">⌘S</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator class="" />
		<DropdownMenu.Group>
			<DropdownMenu.Item inset={false} class="">
				Team
			</DropdownMenu.Item>
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger inset={false} class="">Invite users</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent class="">
					<DropdownMenu.Item inset={false} class="">Email</DropdownMenu.Item>
					<DropdownMenu.Item inset={false} class="">Message</DropdownMenu.Item>
					<DropdownMenu.Separator class="" />
					<DropdownMenu.Item inset={false} class="">More...</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
			<DropdownMenu.Item inset={false} class="">
				New Team
				<DropdownMenu.Shortcut class="">⌘+T</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator class="" />
		<DropdownMenu.Group>
			<DropdownMenu.Item inset={false} class="">GitHub</DropdownMenu.Item>
			<DropdownMenu.Item inset={false} class="">Support</DropdownMenu.Item>
			<DropdownMenu.Item inset={false} disabled class="">
				API
			</DropdownMenu.Item>
		</DropdownMenu.Group>
		<DropdownMenu.Separator class="" />
		<DropdownMenu.Group>
			<DropdownMenu.Item inset={false} class="" onSelect={signOut}>
				Log out
				<DropdownMenu.Shortcut class=""><i class="fa-solid fa-arrow-right-from-bracket"></i></DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>