<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="py-8 flex justify-center w-80" v-if="isLoading">
            <div
                class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <div class="px-4 py-8 max-w-lg" v-else>
            <div class="mb-4">
                <p class="text-slate-500">Order placed on:</p>
                <h4 class="text-2xl text-slate-900">
                    {{ formatDate(order.created_at) }}
                </h4>
            </div>
            <div class="mb-4">
                <p class="text-slate-500">Address:</p>
                <p class="text-slate-900">{{ order.address }}</p>
            </div>
            <p class="text-slate-500">Products:</p>
            <table>
                <tr>
                    <th class="text-left px-4 py-2">Id</th>
                    <th class="text-left px-4 py-2">Title</th>
                    <th class="text-left px-4 py-2">Price</th>
                    <th class="text-left px-4 py-2">Quantity</th>
                </tr>
                <tr v-for="(item, index) in order.order_items" :key="index">
                    <td class="py-2 px-4 border-amber-500 border-y">
                        {{ item.product.id }}
                    </td>
                    <td class="py-2 px-4 border-amber-500 border-y">
                        {{ item.product.title }}
                    </td>
                    <td class="py-2 px-4 border-amber-500 border-y">
                        ${{ item.product.price }}
                    </td>
                    <td class="py-2 px-4 border-amber-500 border-y">
                        {{ item.quantity }}
                    </td>
                </tr>
            </table>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { formatDate } from "@/plugins/Formatters";
import { ref, watch } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    orderId: {
        type: Number,
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow"]);

const isLoading = ref(true);

const axios = useAxios();
const order = ref(null); // {id,created_at,order_items:[{id,quantity,product:{id,title,price}}]}
watch(
    () => props.shouldShow,
    (newVal) => {
        if (!props.orderId || props.orderId === order.value?.id) return;
        if (newVal) {
            isLoading.value = true;
            axios.get(`/api/order/${props.orderId}`).then((response) => {
                order.value = response.data;
                isLoading.value = false;
            });
        }
    }
);
</script>
