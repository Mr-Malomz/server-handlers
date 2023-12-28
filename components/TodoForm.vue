<script setup lang="ts">

</script>

<template>
    <form>
        <textarea name="description" cols={30} rows={2} class="w-full border rounded-lg mb-2 p-4"
            placeholder="Input todo details" required />
        <div class="flex justify-end">
            <div>
                <button class="py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900">Create</button>
            </div>
        </div>
    </form>
</template>