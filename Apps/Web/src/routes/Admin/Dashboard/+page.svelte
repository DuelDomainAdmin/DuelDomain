<script lang="ts">
 import DD from '$lib/assets/DD.png';

</script>

<div class="xl:px-10 px-5">
    <main><img src={DD} alt="Logo" class="w-10 h-10 mt-2"  />
        <div class="mt-5">
            <h1 class="text-center font-bold text-lg">Welcome Admin. You have all the Power !</h1>
        </div>
        

        <div>
            <p class="text-center text-gray mt-5">game operations/</p>
            <div class="flex items-center justify-center gap-5 flex-wrap mt-3  ">
            <a class="link-primary p-2 rounded-md" href="Dashboard/Operations/Games/Add">Add-game</a>
            <a class="link-purple p-2 rounded-md" href="Dashboard/Operations/Games/Update">Update-game</a>
            <a class="bg-red-500 p-2 rounded-md" href="Dashboard/Operations/Games/Delete">Delete-game</a>
        </div>
        </div>
    </main>
</div>