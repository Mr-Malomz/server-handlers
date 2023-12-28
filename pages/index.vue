<script setup lang="ts">

</script>

<template>
    <main class="min-h-screen w-full bg-[#fafafa]">
        <nav-bar />
        <div class="w-full mt-6 flex justify-center">
            <div class="w-full lg:w-1/2">
                <todo-form />
                <section class="border-t border-t-zinc-200 mt-6 px-2 py-4">
                    <todo-comp />
                </section>
            </div>
        </div>
    </main>
</template>
