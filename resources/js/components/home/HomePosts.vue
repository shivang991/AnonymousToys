<template>
    <div class="grid my-12 rounded-md shadow-xl overflow-hidden" v-if="posts">
        <div class="row-start-1 col-start-1 grid">
            <div
                class="w-full h-full opacity-50 bg-slate-900 row-start-1 col-start-1"
            ></div>
            <BaseImage
                class="w-full h-full row-start-1 col-start-1"
                src="posts_bg.jpg"
            ></BaseImage>
        </div>
        <div class="row-start-1 col-start-1 py-12 px-8 relative">
            <h4 class="font-semibold text-2xl mb-8 text-center text-slate-200">
                Actualizaciones del equipo
            </h4>
            <ul class="space-y-4 max-w-lg mx-auto">
                <li v-for="post in posts.data">
                    <router-link
                        :to="{ name: 'PostDetail', params: { id: post.id } }"
                        class="py-8 px-4 bg-white flex space-x-4 items-center rounded-md hover:bg-slate-100"
                    >
                        <BaseImage
                            v-if="post.thumbnail_image"
                            is-external
                            :src="post.thumbnail_image.url"
                            class="w-40 h-20 object-cover rounded-md shadow"
                        ></BaseImage>
                        <BaseImage
                            v-else
                            src="logo.png"
                            class="w-40 h-20 object-cover rounded-md shadow"
                        ></BaseImage>
                        <div>
                            <p class="mb-4">
                                {{ post.title }}
                            </p>
                            <p class="text-sm font-semibold text-slate-500">
                                Creado el {{ formatDate(post.created_at) }}
                            </p>
                        </div>
                    </router-link>
                </li>
                <li
                    class="py-4 bg-white rounded-md shadow-xl"
                    v-if="posts && posts.last_page !== 1"
                >
                    <BasePagination :paginationData="posts"></BasePagination>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { formatDate } from "@/plugins/Formatters";
import { ref } from "vue";
import BaseImage from "../global/BaseImage.vue";
import BasePagination from "../global/BasePagination.vue";

const posts = ref(null);

const axios = useAxios();
function fetchPosts() {
    axios.get("/api/post/all").then(({ data }) => (posts.value = data));
}
fetchPosts();
</script>
