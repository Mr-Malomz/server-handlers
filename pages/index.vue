<script setup lang="ts">
import type { TodoRecord } from '~/lib/xata';

const todos = ref<TodoRecord[]>([]);
const errorMsg = ref<string>("");

const fetchData = async () => {
    try {
        const response = await $fetch<ApiResponse<TodoRecord[]>>("/api/listTodo", {
            method: "GET",
        });

        if (response.status === 200) {
            todos.value = response.data!;
        } else {
            errorMsg.value = response.error!.message;
        }
    } catch (error) {
        errorMsg.value = "Error fetching data";
    }
};

const handleTodoCreated = (createdTodo: TodoRecord) => {
    todos.value.push(createdTodo);
};

onMounted(() => {
    fetchData();
});
</script>


<template>
    <main class="min-h-screen w-full bg-[#fafafa]">
        <nav-bar />
        <div class="w-full mt-6 flex justify-center">
            <div class="w-full lg:w-1/2">
                <todo-form @todo-created="handleTodoCreated" />
                <section class="border-t border-t-zinc-200 mt-6 px-2 py-4">
                    <p class="text-sm text-red-500 text-center" v-if="errorMsg !== ''">{{ errorMsg }}</p>
                    <p className='text-sm text-zinc-500 text-center' v-else-if="todos.length === 0">No todos yet!</p>
                    <todo-comp v-else :todos="todos" />
                </section>
            </div>
        </div>
    </main>
</template>
