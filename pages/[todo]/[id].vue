<script setup lang="ts">
import { X } from 'lucide-vue-next';
const route = useRoute();


</script>

<template>
    <div class="relative z-10">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <NuxtLink to="/" class="flex justify-end mb-2">
                            <X class="cursor-pointer" />
                        </NuxtLink>
                        <edit-todo-form />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>