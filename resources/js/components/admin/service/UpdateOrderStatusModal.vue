<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 py-8 w-80" v-if="order && nextStatus">
            <p class="text-slate-500 mb-2">
                ¿Actualizar el estado del pedido a "{{ nextStatus.value }}"?
            </p>
            <p class="text-slate-900">{{ nextStatus.message }}</p>
            <div v-if="order.status === 'paid'" class="mt-8 space-y-4">
                <base-text-field
                    label="Servicio de Mensajeria"
                    :max="255"
                    v-model="orderShippingFields.postalService"
                />
                <base-text-field
                    label="Numero de Guía"
                    :max="255"
                    v-model="orderShippingFields.guideNumber"
                />
            </div>
            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="button"
                @click="updateStatus"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Confirmar </span>
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import BaseTextField from "@/components/global/BaseTextField.vue";
import useAxios from "@/plugins/Axios";
import { ref, computed, reactive } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    order: {
        type: Object,
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow", "success"]);

const isLoading = ref(false);

const nextStatus = computed(() => {
    const currentStatus = props.order?.status;
    switch (currentStatus) {
        case "paid":
            return {
                value: "Enviado",
                message:
                    "Esto le avisará al usuario que la orden ha sido enviada a su dirección.",
            };
        case "shipped":
            return {
                value: "Entregado",
                message:
                    "Marque este pedido como entregado. ¡Esta acción es irreversible!",
            };

        default:
            return null;
    }
});

const axios = useAxios();

// fields required when shifting order status from paid to shipped
const orderShippingFields = reactive({
    guideNumber: "",
    postalService: "",
});

const orderShippingInvalidFields = reactive(new Set());

function updateStatus() {
    if (!props.order || isLoading.value) return;

    let data = {};

    if (props.order.status === "paid") {
        orderShippingInvalidFields.clear();

        if (!orderShippingFields.guideNumber)
            orderShippingInvalidFields.add("guideNumber");
        if (!orderShippingFields.postalService)
            orderShippingInvalidFields.add("postalService");

        if (orderShippingInvalidFields.size) return;

        data = {
            guide_number: orderShippingFields.guideNumber,
            postal_service: orderShippingFields.postalService,
        };
    }

    isLoading.value = true;
    axios
        .authPost(`/api/order/update/${props.order.id}`, data)
        .then((response) => {
            isLoading.value = false;
            if (response.data.message === "success") emit("success");
        });
}
</script>
