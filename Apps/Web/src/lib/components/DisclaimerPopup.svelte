<script lang="ts">
  import { onMount } from 'svelte';
  import * as Dialog from "$lib/components/ui/dialog";
  
  let open = false;
  
  onMount(() => {
    
    setTimeout(() => {
      open = true;
    }, 3000);
  });
</script>





    <Dialog.Root bind:open>
  <Dialog.Content class="disclaimer_popup sm:max-w-[500px]" portalProps={{}}>
    <Dialog.Header class="">
      <Dialog.Title class="text-2xl font-bold">Disclaimer</Dialog.Title>
      <Dialog.Description class="">
        Please read this important information carefully.
      </Dialog.Description>
    </Dialog.Header>
    
    <div class="py-4">
      <p class="text-sm text-gray-300 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. This platform is for entertainment purposes only. 
        By using this service, you acknowledge that you have read and agree to our terms and conditions. 
        Please gamble responsibly and know your limits.
      </p>
    </div>
    
    <Dialog.Footer class="">
      <button 
        class="btn-primary btn-primary--rounded text-sm px-4 py-2" 
        on:click={() => open = false}
      >
        I Understand
      </button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>



