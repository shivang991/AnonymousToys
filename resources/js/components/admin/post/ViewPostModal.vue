<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="flex justify-center py-4 w-80" v-if="isLoading">
            <div
                class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <div class="p-4 max-w-lg text-slate-900" v-else>
            <VueMarkdown
                class="md"
                v-if="postMd"
                :source="postMd"
            ></VueMarkdown>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { ref, watch } from "vue";
import VueMarkdown from "vue-markdown-render";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    postId: {
        type: Number,
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow"]);

const isLoading = ref(true);

const axios = useAxios();
const post = ref(null); // {id,created_at,order_items:[{id,quantity,product:{id,title,price}}]}
const postMd = ref(null);
watch(
    () => props.shouldShow,
    (newVal) => {
        if (!props.postId || props.postId === post.value?.id) return;
        if (newVal) {
            isLoading.value = true;
            axios.authGet(`/api/post/${props.postId}`).then((response) => {
                post.value = response.data;
                isLoading.value = false;
                const content = response.data.content;
                const images = response.data.post_images;
                postMd.value = content.replace(
                    /\$image_(\d+)/g,
                    (_, i) => images[i].url
                );
            });
        }
    }
);
</script>
