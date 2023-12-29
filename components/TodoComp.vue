<script setup lang="ts">
import { Pencil, Trash2 } from 'lucide-vue-next';
import type { TodoRecord } from '~/lib/xata';

const router = useRouter()
const props = defineProps<{
    todos: TodoRecord[]
}>();
const errorMsg = ref<string>("");

const onDelete = async (id: string) => {
    const response = await $fetch("/api/deleteTodo", {
        method: "DELETE",
        body: { id }
    })

    if (response.status === 200) {
        router.go(0)
    } else {
        errorMsg.value = String(response.error?.message)
    }
}
</script>

<template>
    <div class='flex border p-2 rounded-lg mb-2' v-for="todo in props.todos" :key="todo.id">
        <div class='ml-4'>
            <header class='flex items-center mb-2'>
                <h5 class='font-medium'>Todo item {{ todo.id }}</h5>
                <p class='mx-1 font-light'>|</p>
                <p class='text-sm'>{{ todo.xata.createdAt.toString().slice(0, 10) }}</p>
            </header>
            <p class='text-sm text-zinc-500 mb-2'>
                {{ todo.description }}
            </p>
            <div class='flex gap-4 items-center'>
                <NuxtLink :to="`todo/${todo.id}`" class='flex items-center border py-1 px-2 rounded-lg hover:bg-zinc-300'>
                    <Pencil class='h-4 w-4' />
                    <p class='ml-2 text-sm'>Edit</p>
                </NuxtLink>
                <button @click="onDelete(todo.id)" class='flex items-center border py-1 px-2 rounded-lg hover:bg-red-300'>
                    <Trash2 class='h-4 w-4' />
                    <p class='ml-2 text-sm'>
                        Delete
                    </p>
                </button>
            </div>
        </div>
    </div>
</template>