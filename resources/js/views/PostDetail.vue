<template>
    <div class="py-8 w-3/4 mx-auto" v-if="postMd">
        <h1 class="text-6xl font-bold mb-8 text-slate-900 max-w-lg">{{ postTitle }}</h1>
        <VueMarkdown class="preview" :source="postMd"></VueMarkdown>
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

axios.get(`/api/post/${route.params.id}`).then((response) => {
    const content = response.data.content;
    const images = response.data.post_images;
    postMd.value = content.replace(/\$image_(\d+)/, (_, i) => images[i].url);
    console.log(postMd)
    postTitle.value = response.data.title;
});
</script>

<style scoped>
.preview:deep(h1) {
    @apply text-4xl font-bold text-slate-500 mb-4;
}
.preview:deep(h2) {
    @apply text-3xl font-bold text-slate-500 mb-2;
}
.preview:deep(h3) {
    @apply text-2xl font-bold text-slate-500 mb-2;
}
.preview:deep(strong) {
    @apply font-bold text-slate-500;
}
.preview:deep(blockquote) {
    @apply bg-slate-200 text-slate-500 p-1 pl-2 border-l-4;
}
.preview:deep(ol) {
    @apply list-decimal list-inside;
}
.preview:deep(ul) {
    @apply list-disc list-inside;
}
.preview:deep(img) {
    @apply block max-w-full rounded;
}
</style>
