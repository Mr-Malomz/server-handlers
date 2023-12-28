<script setup lang="ts">
import { Pencil, Trash2 } from 'lucide-vue-next';
</script>

<template>
    <div class='flex border p-2 rounded-lg mb-2'>
        <div class='ml-4'>
            <header class='flex items-center mb-2'>
                <h5 class='font-medium'>Todo item 1</h5>
                <p class='mx-1 font-light'>|</p>
                <p class='text-sm'>2023-11-13</p>
            </header>
            <p class='text-sm text-zinc-500 mb-2'>
                Sample todo item
            </p>
            <div class='flex gap-4 items-center'>
                <NuxtLink to='todo/123' class='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'>
                    <Pencil class='h-4 w-4' />
                    <p class='ml-2 text-sm'>Edit</p>
                </NuxtLink>
                <button class='flex items-center border py-1 px-2 rounded-lg hover:bg-red-300'>
                    <Trash2 class='h-4 w-4' />
                    <p class='ml-2 text-sm'>
                        Delete
                    </p>
                </button>
            </div>
        </div>
    </div>
</template>