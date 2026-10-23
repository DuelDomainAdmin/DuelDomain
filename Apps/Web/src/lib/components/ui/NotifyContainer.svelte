<script lang="ts">
  import { notify } from '$lib/stores/notifyStore';
  import * as Alert from "$lib/components/ui/alert";
  import { fly } from 'svelte/transition';
</script>

<div class="fixed top-5 left-1/2 -translate-x-1/2 z-9999 flex flex-col gap-3 w-4/5 max-w-4xl">
  {#each $notify as notification (notification.id)}
    <div transition:fly={{ y: -20, duration: 300 }}>
      {#if notification.type === 'success'}
        <Alert.Root class="alert-success border-2 flex items-start gap-3 relative">
          <i class="fa-solid fa-circle-check text-xl shrink-0 mt-1"></i>
          <div class="flex-1">
            <Alert.Title class="">Success</Alert.Title>
            <Alert.Description class="text-white">
              {notification.message}
            </Alert.Description>
          </div>
          <button 
            class="absolute top-2 right-2 text-white hover:opacity-70 shrink-0"
            on:click={() => notify.dismiss(notification.id)}
            aria-label="Close notification"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </Alert.Root>
      {:else if notification.type === 'error'}
        <Alert.Root class="alert-error border-2 flex items-start gap-3 relative">
          <i class="fa-solid fa-circle-exclamation text-xl shrink-0 mt-1"></i>
          <div class="flex-1">
            <Alert.Title class="">Error</Alert.Title>
            <Alert.Description class="text-white">
              {notification.message}
            </Alert.Description>
          </div>
          <button 
            class="absolute top-2 right-2 text-white hover:opacity-70 shrink-0"
            on:click={() => notify.dismiss(notification.id)}
            aria-label="Close notification"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </Alert.Root>
      {:else}
        <Alert.Root class="alert-neutral border-2 flex items-start gap-3 relative">
          <i class="fa-solid fa-circle-info text-xl shrink-0 mt-1"></i>
          <div class="flex-1">
            <Alert.Title class="">Info</Alert.Title>
            <Alert.Description class="text-white">
              {notification.message}
            </Alert.Description>
          </div>
          <button 
            class="absolute top-2 right-2 text-white hover:opacity-70 shrink-0"
            on:click={() => notify.dismiss(notification.id)}
            aria-label="Close notification"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </Alert.Root>
      {/if}
    </div>
  {/each}
</div>