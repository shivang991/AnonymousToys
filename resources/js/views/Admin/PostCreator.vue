<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <form class="px-12 mb-12" @submit.prevent="handlePostSubmit">
            <h4 class="font-semibold text-2xl mb-8">Crea Aqui tu Post</h4>
            <div class="space-y-4">
                <BaseTextField
                    v-model="titleInput"
                    label="Titulo de tu Post"
                    :is-invalid="invalidFields.has('title')"
                ></BaseTextField>
                <BodyInput
                    ref="bodyInputComponent"
                    @update="handleContentUpdate"
                ></BodyInput>
            </div>
            <div
                v-if="invalidFields.has('body')"
                class="bg-red-50 border rounded-md border-red-600 py-4 px-4 flex space-x-4 mt-4"
            >
                <FontAwesomeIcon
                    icon="fa-exclamation-triangle"
                    class="text-2xl text-red-600"
                ></FontAwesomeIcon>
                <p class="text-red-600">Se requiere algún contenido.</p>
            </div>
            <button
                class="bg-amber-500 px-8 py-2 text-white rounded-md mt-8"
                type="submit"
                :disabled="isSubmitting"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isSubmitting"
                >
                </span>
                <span v-else> Ingresar </span>
            </button>
        </form>
        <PostsTable :posts="posts" @refetch-requested="fetchPosts"></PostsTable>
    </div>
</template>

<script setup>
import BodyInput from "@/components/admin/post/body-input/BodyInput.vue";
import BaseTextField from "@/components/global/BaseTextField.vue";
import PostsTable from "@/components/admin/post/PostsTable.vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const titleInput = ref("");

const bodyInputComponent = ref();

let body;
const handleContentUpdate = (newContent) => (body = newContent);

const axios = useAxios();
const isSubmitting = ref(false);

const invalidFields = ref(new Set([]));

function handlePostSubmit() {
    invalidFields.value.clear();
    if (!body || !body.content) invalidFields.value.add("body");
    if (!titleInput.value) invalidFields.value.add("title");
    if (invalidFields.value.size) return;
    isSubmitting.value = true;
    axios
        .postMultipart("/api/post/create", {
            ...body,
            title: titleInput.value,
        })
        .then((response) => {
            if (response.data.message === "success") {
                fireNotification(NotificationTypes.POST_CREATED);
                bodyInputComponent.value.clear();
                fetchPosts();
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isSubmitting.value = false));
}

const posts = ref(null);

function fetchPosts(url) {
    axios.authGet(url ?? "/api/post/all").then((response) => {
        posts.value = response.data;
    });
}
fetchPosts();
</script>
