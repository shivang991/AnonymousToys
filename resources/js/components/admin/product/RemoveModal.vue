<template>
    <base-modal
        :shouldShow="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 pb-8 max-w-xs">
            <div class="text-slate-900 mb-8 text-center">
                <p>¿Está seguro de que desea eliminar el producto</p>
                <p class="font-semibold">"{{ productTitle }}" ?</p>
            </div>
            <button
                @click="handleConfirmed"
                class="bg-amber-500 py-2 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Si </span>
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    productId: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(["update:shouldShow"]);

const store = useStore();

const productTitle = computed(
    () =>
        store.state.products.data?.find((p) => p.id === props.productId)
            ?.title ?? ""
);

const isLoading = ref(false);

const axios = useAxios();

function handleConfirmed() {
    isLoading.value = true;
    axios
        .authDelete(`/api/product/${props.productId}`)
        .then((response) => {
            if (response.data.message === "success") {
                store.dispatch("products/refetch");
                emit("update:shouldShow", false);
                fireNotification(NotificationTypes.PRODUCT_DELETED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isLoading.value = false));
}
</script>
