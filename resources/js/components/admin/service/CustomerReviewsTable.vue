<template>
    <div v-if="reviews">
        <h5 class="text-xl text-slate-900 text-left mx-12">
            Customer Reviews:
        </h5>
        <div v-if="reviews.data.length">
            <div class="flex justify-end mb-4 space-x-4 px-12">
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50"
                    :disabled="selectedReview === null"
                    @click="shouldShowRemoveModal = true"
                >
                    Remove
                    <FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-slate-500 disabled:opacity-50"
                    :disabled="selectedReview === null"
                    @click="shouldShowViewModal = true"
                >
                    View <FontAwesomeIcon icon="fa fa-expand"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50"
                    :disabled="selectedReview === null"
                    @click="shouldShowUpdateModal = true"
                >
                    Toggle Verification
                    <FontAwesomeIcon icon="fa fa-check"></FontAwesomeIcon>
                </button>
            </div>
            <div class="grid mb-8">
                <div class="col-start-1 row-start-1 h-16 bg-slate-200"></div>
                <table class="mx-12 col-start-1 row-start-1">
                    <tr class="text-slate-900 h-16 px-12">
                        <th></th>
                        <th class="text-left px-4">Name</th>
                        <th class="text-left px-4">Message</th>
                        <th class="text-left px-4">Verification</th>
                        <th class="text-left px-4">Received on</th>
                    </tr>
                    <tr
                        v-for="(review, index) in reviews.data"
                        :key="index"
                        class="hover:bg-slate-100 cursor-pointer border-b"
                        :class="
                            selectedReview === review
                                ? 'border-transparent bg-slate-100 shadow rounded'
                                : 'border-amber-500'
                        "
                        @click="selectedReview = review"
                    >
                        <td class="px-4 py-2">
                            <p
                                class="text-slate-500 leading-10 w-10 text-center"
                                v-if="selectedReview === review"
                            >
                                <FontAwesomeIcon
                                    icon="fa fa-check-square"
                                ></FontAwesomeIcon>
                            </p>
                            <div
                                v-else
                                class="rounded-full shadow overflow-hidden w-10 h-10"
                            >
                                <BaseImage
                                    v-if="review.image_url"
                                    :src="review.image_url"
                                    is-external
                                    class="block object-cover"
                                ></BaseImage>
                                <BaseImage
                                    v-else
                                    src="/user.jpg"
                                    class="block"
                                ></BaseImage>
                            </div>
                        </td>
                        <td class="px-4 py-2">
                            {{ review.name }}
                        </td>
                        <td class="px-4 py-2 max-w-xs truncate">
                            {{ review.message }}
                        </td>
                        <td class="px-4 py-2">
                            {{ review.is_verified ? "Verified" : "Pending" }}
                        </td>
                        <td class="px-4 py-2">
                            {{ formatDate(review.created_at) }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <p
            v-else
            class="bg-slate-200 py-2 my-4 text-center text-slate-900 rounded-md mx-12"
        >
            No se encontraron reseñas
        </p>
        <BasePagination
            :pagination-data="reviews"
            @refetch-requested="(url) => emit('refetch-requested', url)"
        ></BasePagination>
        <ViewReviewModal
            v-model:should-show="shouldShowViewModal"
            :review="selectedReview"
        ></ViewReviewModal>
        <UpdateReviewVerificationModal
            v-model:should-show="shouldShowUpdateModal"
            :review="selectedReview"
            @success="handleReviewUpdateSuccess"
        ></UpdateReviewVerificationModal>
        <RemoveReviewModal
            v-model:should-show="shouldShowRemoveModal"
            :reviewId="selectedReview?.id"
            @success="handleReviewDeleteSuccess"
        >
        </RemoveReviewModal>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import BasePagination from "@/components/global/BasePagination.vue";
import { formatDate } from "@/plugins/Formatters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import UpdateReviewVerificationModal from "./UpdateReviewVerificationModal.vue";
import RemoveReviewModal from "./RemoveReviewModal.vue";
import ViewReviewModal from "./ViewReviewModal.vue";

defineProps({
    reviews: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["refetch-requested"]);

const selectedReview = ref(null);

const shouldShowViewModal = ref(false);
const shouldShowUpdateModal = ref(false);
const shouldShowRemoveModal = ref(false);

function handleReviewUpdateSuccess() {
    shouldShowUpdateModal.value = false;
    selectedReview.value = null;
    emit("refetch-requested");
}

function handleReviewDeleteSuccess() {
    shouldShowRemoveModal.value = false;
    selectedReview.value = null;
    emit("refetch-requested");
}

watch(
    [shouldShowViewModal, shouldShowUpdateModal, shouldShowRemoveModal],
    (newVal) => {
        if (newVal.some((e) => e)) scrollTo({ top: 0, behavior: "smooth" });
    }
);
</script>
