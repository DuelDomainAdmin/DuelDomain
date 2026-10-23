<script lang="ts">
  import Avatar from '$lib/components/ui/Avatar.svelte';
  import { notify } from '$lib/stores/notifyStore';
  import { onMount } from 'svelte';
  
  let selectedAvatar: string | null = null;
  let avatars: Array<{src: string, alt: string, fallback: string}> = [];
  
  const avatarStyles = ['adventurer', 'adventurer-neutral', 'avataaars', 'big-smile', 'bottts', 'fun-emoji', 'lorelei', 'micah', 'miniavs', 'pixel-art'];
  
  onMount(() => {
    avatars = Array.from({ length: 10 }, (_, i) => {
      const randomSeed = Math.random().toString(36).substring(7);
      const randomStyle = avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
      return {
        src: `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${randomSeed}`,
        alt: `Avatar ${i + 1}`,
        fallback: `A${i + 1}`
      };
    });
  });
  
  function handleAvatarClick(avatarSrc: string) {
   
    if (selectedAvatar === avatarSrc) {
      selectedAvatar = null;
    //   notify.neutral('Avatar deselected');
    } else {
     
      selectedAvatar = avatarSrc;
    //   notify.success('Avatar selected!');
    }
  }
  
  function regenerateAvatars() {
    avatars = Array.from({ length: 10 }, (_, i) => {
      const randomSeed = Math.random().toString(36).substring(7);
      const randomStyle = avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
      return {
        src: `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${randomSeed}`,
        alt: `Avatar ${i + 1}`,
        fallback: `A${i + 1}`
      };
    });
    selectedAvatar = null;
  }
</script>

<div class="xl:px-20 px-5 mt-20">
  <div class="flex flex-col justify-center items-center">
    <p class="text-center text-2xl grd_one font-bold">Select Your Avatar</p>
    <button 
      class="btn-secondary--rounded rounded-btn text-sm px-4 py-2 mt-4"
      on:click={regenerateAvatars}
    >
      <i class="fa-solid fa-rotate-right mr-2"></i>
      New Set
    </button>
  </div>

  <div class="flex flex-row flex-wrap items-center justify-center gap-8 mt-10">
    {#each avatars as avatar (avatar.src)}
      <Avatar 
        src={avatar.src}
        alt={avatar.alt}
        fallback={avatar.fallback}
        isSelected={selectedAvatar === avatar.src}
        onClick={() => handleAvatarClick(avatar.src)}
      />
    {/each}
  </div>
  
  {#if selectedAvatar}
    <div class="flex justify-center mt-10">
      <button class="btn-primary--rounded px-6 py-2">
        Confirm Selection
      </button>
    </div>
  {/if}
</div>