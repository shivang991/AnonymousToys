<template>
    <li class="rounded-md overflow-hidden shadow p-2 sm:p-4">
        <div
            class="grid grid-cols-2 sm:grid-cols-3 justify-between px-4 sm:px-8 py-8 gap-4"
        >
            <BaseImage
                :src="imgSrc"
                is-external
                class="sm:h-20 sm:w-20 object-cover col-span-2 sm:col-span-1 w-full"
            ></BaseImage>
            <div class="text-slate-900">
                <h4 class="text-2xl font-semibold mb-2">
                    {{ title }}
                </h4>
                <p class="flex space-x-2 items-center">
                    <span> Cantidad: </span>
                    <input
                        class="w-20 px-4 py-2 rounded-md outline-2 outline-amber-500"
                        ref="quantityInputEl"
                        type="number"
                        :value="quantity"
                        :min="1"
                        @change="updateQuantity"
                        @blur="isEditingQuantity = false"
                        v-if="isEditingQuantity"
                    />
                    <span v-else class="py-2">
                        {{ quantity }}
                    </span>
                </p>
            </div>
            <div class="justify-self-end">
                <p class="text-slate-900 mb-2">Precio:</p>
                <h4 class="text-2xl font-semibold text-slate-500">
                    {{ formatPrice(price) }}
                </h4>
            </div>
        </div>
        <div class="flex justify-end space-x-2">
            <button
                class="rounded-md px-4 py-2 text-white bg-amber-500"
                @click="isEditingQuantity = true"
            >
                <FontAwesomeIcon icon="fa fa-pen"></FontAwesomeIcon>
            </button>
            <button
                class="rounded-md px-4 py-2 text-white bg-red-600"
                @click="emit('quantity-update', 0)"
            >
                <FontAwesomeIcon icon="fa fa-trash"></FontAwesomeIcon>
            </button>
        </div>
    </li>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import { formatPrice } from "@/plugins/Formatters";

defineProps({
    imgSrc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(["quantity-update"]);

const isEditingQuantity = ref(false);
const quantityInputEl = ref(null);

const updateQuantity = (ev) => {
    const newQuantity = Number(ev.target.value);
    emit("quantity-update", newQuantity);
};

watch(
    isEditingQuantity,
    (newVal) => {
        if (newVal) quantityInputEl.value.focus();
    },
    { flush: "post" }
);
</script>
