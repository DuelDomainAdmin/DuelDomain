
<script lang="ts">
 import DD from '$lib/assets/DD.png';
 import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
import { buttonVariants } from "$lib/components/ui/button/index.js";
</script>

<div class="xl:px-10 px-5">
    <div><img src={DD} alt="Logo" class="w-10 h-10 mt-2"  />

        <div class="mt-10 flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <div>
                <p class="">Call of duty <span class="text-gray">( Mobile )</span></p>
            </div>
            <div><AlertDialog.Root>
	<AlertDialog.Trigger class="bg-red-500 p-2 text-white rounded-md">
		Delete Game
	</AlertDialog.Trigger>
	<AlertDialog.Content class="" portalProps={{}}>
		<AlertDialog.Header class="">
			<AlertDialog.Title class="">Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description class="">
				This action cannot be undone. This will permanently this game from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer class="">
			<AlertDialog.Cancel class="">Cancel</AlertDialog.Cancel>
			<AlertDialog.Action class="">Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root></div>
        </div>
         <div class="flex items-center justify-between">
            <div>
                <p class="">Elden Ring <span class="text-gray">( PC )</span></p>
            </div>
            <div><AlertDialog.Root>
	<AlertDialog.Trigger class="bg-red-500 p-2 text-white rounded-md">
		Delete Game
	</AlertDialog.Trigger>
	<AlertDialog.Content class="" portalProps={{}}>
		<AlertDialog.Header class="">
			<AlertDialog.Title class="">Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description class="">
				This action cannot be undone. This will permanently this game from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer class="">
			<AlertDialog.Cancel class="">Cancel</AlertDialog.Cancel>
			<AlertDialog.Action class="">Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root></div>
        </div>

        

        </div>
    </div>
</div>