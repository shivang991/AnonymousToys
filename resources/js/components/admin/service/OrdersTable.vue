<template>
    <div v-if="orders">
        <h5 class="text-xl text-slate-900 text-left mx-12">Pedidos:</h5>
        <div v-if="orders.data.length">
            <div class="flex justify-end mb-4 space-x-4 px-12">
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50"
                    :disabled="
                        selectedOrder === null ||
                        selectedOrder.status === 'delivered'
                    "
                    @click="shouldShowUpdateModal = true"
                >
                    Actualizar Status
                    <FontAwesomeIcon icon="fa fa-pen"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-slate-500 disabled:opacity-50"
                    :disabled="selectedOrder === null"
                    @click="shouldShowViewModal = true"
                >
                    Ver <FontAwesomeIcon icon="fa fa-expand"></FontAwesomeIcon>
                </button>
            </div>
            <div class="grid mb-8">
                <div class="col-start-1 row-start-1 h-16 bg-slate-200"></div>
                <table class="mx-12 col-start-1 row-start-1">
                    <tr class="text-slate-900 h-16 px-12">
                        <th>ID</th>
                        <th class="text-left px-4">Precio</th>
                        <th class="text-left px-4">Creado</th>
                        <th class="text-left px-4">
                            Correo
                        </th>
                        <th>
                            <select
                                class="bg-transparent focus:outline-none"
                                v-model="statusFilter"
                            >
                                <option value="all">Estatus</option>
                                <option
                                    v-for="(label, value) in orderStatusLabels"
                                    :key="value"
                                    :value="value"
                                >
                                    {{ label }}
                                </option>
                            </select>
                        </th>
                    </tr>
                    <tr
                        v-for="(order, index) in filteredOrders"
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
                        <td class="px-4 py-2 capitalize">
                            {{ orderStatusLabels[order.status] }}
                        </td>
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
import { computed, ref } from "vue";
import UpdateOrderStatusModal from "./UpdateOrderStatusModal.vue";
import ViewOrderModal from "./ViewOrderModal.vue";

// map order.status to corresponding spanish labels
const orderStatusLabels = {
    paid: "Pagado",
    shipped: "Enviado",
    delivered: "Entregado",
};

const props = defineProps({
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

// order filtering by status
const statusFilter = ref("all");

const filteredOrders = computed(() => {
    if (statusFilter.value === "all") return props.orders.data;

    return props.orders.data.filter(
        (order) => order.status === statusFilter.value
    );
});
</script>
