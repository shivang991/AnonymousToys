<template>
    <div v-if="posts">
        <h5 class="text-xl text-slate-900 text-left mx-12">
            Posts que ya haz creado:
        </h5>
        <div v-if="posts.data.length">
            <div class="flex justify-end mb-4 space-x-4 px-12">
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50"
                    :disabled="selectedPost === null"
                    @click="shouldShowRemoveModal = true"
                >
                    Remove
                    <FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-slate-500 disabled:opacity-50"
                    :disabled="selectedPost === null"
                    @click="shouldShowViewModal = true"
                >
                    View <FontAwesomeIcon icon="fa fa-expand"></FontAwesomeIcon>
                </button>
            </div>
            <div class="grid mb-8">
                <div class="col-start-1 row-start-1 h-16 bg-slate-200"></div>
                <table class="mx-12 col-start-1 row-start-1">
                    <tr class="text-slate-900 h-16 px-12">
                        <th>ID</th>
                        <th class="text-left px-4">Title</th>
                        <th class="text-left px-4">Created on</th>
                    </tr>
                    <tr
                        v-for="(post, index) in posts.data"
                        :key="index"
                        class="hover:bg-slate-100 cursor-pointer border-b"
                        :class="
                            selectedPost === post
                                ? 'border-transparent bg-slate-100 shadow rounded'
                                : 'border-amber-500'
                        "
                        @click="selectedPost = post"
                    >
                        <td class="w-12 text-center py-2">
                            <FontAwesomeIcon
                                v-if="selectedPost === post"
                                class="text-slate-500"
                                icon="fa fa-check-square"
                            ></FontAwesomeIcon>
                            <span v-else class="text-slate-900">{{
                                post.id
                            }}</span>
                        </td>
                        <td class="px-4 py-2">
                            {{ post.title }}
                        </td>
                        <td class="px-4 py-2">
                            {{ formatDate(post.created_at) }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <p
            v-else
            class="bg-slate-200 py-2 my-4 text-center text-slate-900 rounded-md mx-12"
        >
            No se encontraron publicaciones.
        </p>
        <BasePagination
            :pagination-data="posts"
            @refetch-requested="(url) => emit('refetch-requested', url)"
        ></BasePagination>
        <ViewPostModal
            v-model:should-show="shouldShowViewModal"
            :post-id="selectedPost?.id"
        ></ViewPostModal>
        <RemovePostModal
            :post-id="selectedPost?.id"
            v-model:should-show="shouldShowRemoveModal"
            @success="handleMsgDeleteSuccess"
        >
        </RemovePostModal>
    </div>
</template>

<script setup>
import BasePagination from "@/components/global/BasePagination.vue";
import { formatDate } from "@/plugins/Formatters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import RemovePostModal from "./RemovePostModal.vue";
import ViewPostModal from "./ViewPostModal.vue";

defineProps({
    posts: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["refetch-requested"]);

const selectedPost = ref(null);

const shouldShowViewModal = ref(false);
const shouldShowRemoveModal = ref(false);

function handleMsgDeleteSuccess() {
    shouldShowRemoveModal.value = false;
    selectedPost.value = null;
    emit("refetch-requested");
}

watch([shouldShowViewModal, shouldShowRemoveModal], (newVal) => {
    if (newVal.some((e) => e)) scrollTo({ top: 0, behavior: "smooth" });
});
</script>
