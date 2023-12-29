<script setup lang="ts">
const description = ref<string>("");
const errorMsg = ref<string>("");
const emit = defineEmits();

const onSubmit = async () => {
    const response = await $fetch("/api/createTodo", {
        method: "POST",
        body: { description: description.value }
    })

    if (response.status === 201) {
        emit("todo-created", response.data);
        description.value = "";
        errorMsg.value = "";
    } else {
        errorMsg.value = String(response.error?.message)
    }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <p class="text-sm text-red-500 text-center" v-if="errorMsg !== ''">{{ errorMsg }}</p>
        <textarea name="description" cols={30} rows={2} class="w-full border rounded-lg mb-2 p-4"
            placeholder="Input todo details" required v-model="description" />
        <div class="flex justify-end">
            <div>
                <button class="py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900">Create</button>
            </div>
        </div>
    </form>
</template>