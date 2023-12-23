<template>
    <div v-if="orders">
        <h5 class="text-xl text-slate-900 text-left mx-12">Pedidos:</h5>
        <div v-if="orders.data.length">
            <div class="flex justify-end mb-4 space-x-4 px-12">
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50"
                    :disabled="selectedOrder === null"
                    @click="shouldShowUpdateModal = true"
                >
                    Update Status
                    <FontAwesomeIcon icon="fa fa-pen"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-slate-500 disabled:opacity-50"
                    :disabled="selectedOrder === null"
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
                        <th class="text-left px-4">Price</th>
                        <th class="text-left px-4">Created On</th>
                        <th class="text-left px-4">Email</th>
                        <th>Status</th>
                    </tr>
                    <tr
                        v-for="(order, index) in orders.data"
                        :key="index"
                        class="hover:bg-slate-100 cursor-pointer border-b"
                        :class="
                            selectedOrder === order
                                ? 'border-transparent bg-slate-100 shadow rounded'
                                : 'border-amber-500'
                        "
                        @click="selectedOrder = order"
                    >
                        <td class="w-12 text-center py-2">
                            <FontAwesomeIcon
                                v-if="selectedOrder === order"
                                class="text-slate-500"
                                icon="fa fa-check-square"
                            ></FontAwesomeIcon>
                            <span v-else class="text-slate-900">{{
                                order.id
                            }}</span>
                        </td>
                        <td class="px-4 py-2">
                            {{ formatPrice(order.total_price) }}
                        </td>
                        <td class="px-4 py-2">
                            {{ formatDate(order.created_at) }}
                        </td>
                        <td class="px-4 py-2">{{ order.user.email }}</td>
                        <td class="px-4 py-2 capitalize">{{ order.status }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <p
            v-else
            class="bg-slate-200 py-2 my-4 text-center text-slate-900 rounded-md mx-12"
        >
            No se encontraron pedidos.
        </p>
        <BasePagination
            :pagination-data="orders"
            @refetch-requested="(url) => emit('refetch-requested', url)"
        ></BasePagination>
        <ViewOrderModal
            :order-id="selectedOrder?.id"
            v-model:should-show="shouldShowViewModal"
        ></ViewOrderModal>
        <UpdateOrderStatusModal
            :order="selectedOrder"
            v-model:should-show="shouldShowUpdateModal"
            @success="handleStatusUpdateSuccess"
        ></UpdateOrderStatusModal>
    </div>
</template>

<script setup>
import BasePagination from "@/components/global/BasePagination.vue";
import { formatDate, formatPrice } from "@/plugins/Formatters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import UpdateOrderStatusModal from "./UpdateOrderStatusModal.vue";
import ViewOrderModal from "./ViewOrderModal.vue";

defineProps({
    orders: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["refetch-requested"]);

const selectedOrder = ref(null);

const shouldShowViewModal = ref(false);
const shouldShowUpdateModal = ref(false);

function handleStatusUpdateSuccess() {
    shouldShowUpdateModal.value = false;
    selectedOrder.value = null;
    emit("refetch-requested");
}
</script>
