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
          Duel Domain provides a platform for competitive digital experiences. By accessing or using the platform, you acknowledge that you understand and agree to our Terms and Conditions and applicable policies. You are responsible for ensuring that your use of the platform complies with the laws and regulations applicable in your location.By continuing, you confirm that you have read and understood this disclaimer.
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



