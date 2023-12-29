<script setup lang="ts">
import type { TodoRecord } from '~/lib/xata';

const props = defineProps<{
    todo: TodoRecord
}>();
const description = ref<string>("");
const errorMsg = ref<string>("");

watchEffect(() => {
    if (props.todo) {
        description.value = props.todo.description || "";
    }
});

const onSubmit = async () => {
    const response = await $fetch("/api/updateTodo", {
        method: "PUT",
        body: { id: props.todo.id, description: description.value }
    })

    if (response.status === 200) {
        description.value = "";
        errorMsg.value = "";
        await navigateTo('/')
    } else {
        errorMsg.value = String(response.error?.message)
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <p class="text-sm text-red-500 text-center" v-if="errorMsg !== ''">{{ errorMsg }}</p>
        <textarea name="description" cols={30} rows={2} className="w-full border rounded-lg mb-2 p-4"
            placeholder="Input todo details" required v-model="description" />
        <div className="flex justify-end">
            <div>
                <button class="py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900">Update</button>
            </div>
        </div>
    </form>
</template>