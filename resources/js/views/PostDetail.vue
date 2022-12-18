<template>
    <div class="py-8 w-3/4 mx-auto" v-if="postMd">
        <h1 class="text-6xl font-bold mb-8 text-slate-900 max-w-lg">
            {{ postTitle }}
        </h1>
        <VueMarkdown class="md" :source="postMd"></VueMarkdown>
    </div>
    <div class="min-h-screen py-12 flex justify-center" v-else>
        <div
            class="w-10 h-10 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
        ></div>
    </div>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { ref } from "vue";
import VueMarkdown from "vue-markdown-render";
import { useRoute } from "vue-router";

const route = useRoute();
const axios = useAxios();

const postMd = ref(null);
const postTitle = ref(null);

axios
    .get(`/api/post/${route.params.id}`)
    .then(({ data: { content, post_images } }) => {
        postMd.value = content.replace(
            /\$image_(\d+)/g,
            (_, i) => post_images[i].url
        );
        postTitle.value = response.data.title;
    });
</script>
