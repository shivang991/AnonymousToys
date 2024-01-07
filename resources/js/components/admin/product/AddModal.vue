<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <form class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseImageInput
                    :is-invalid="invalidFields.has('image')"
                    v-model="fields.image"
                    class="w-full h-40 object-cover"
                    label="Imagen del Producto"
                ></BaseImageInput>
                <BaseTextField
                    v-model="fields.title"
                    label="Nombre del producto"
                    :is-invalid="invalidFields.has('title')"
                ></BaseTextField>
                <BaseTextField
                    :is-invalid="invalidFields.has('description')"
                    v-model="fields.description"
                    label="Descripción"
                    is-text-area
                ></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField
                        :is-invalid="invalidFields.has('price')"
                        v-model="fields.price"
                        label="Precio"
                    ></BaseTextField>
                    <BaseTextField
                        :is-invalid="invalidFields.has('brand')"
                        v-model="fields.brand"
                        label="Marca"
                    ></BaseTextField>
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex space-x-2">
                        <input
                            type="checkbox"
                            class="accent-amber-500"
                            v-model="fields.isLimitedEdition"
                        />
                        <label>Edición Limitada</label>
                    </div>
                    <div class="flex space-x-2">
                        <input
                            type="checkbox"
                            class="accent-amber-500"
                            v-model="fields.isLowStock"
                        />
                        <label>Pocas piezas</label>
                    </div>
                    <div class="flex space-x-2">
                        <input
                            type="checkbox"
                            class="accent-amber-500"
                            v-model="fields.isPromoted"
                        />
                        <label>En Promoción</label>
                    </div>
                </div>
            </div>
            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Crear </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";

defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const fields = reactive({
    image: null,
    title: "",
    description: "",
    price: "",
    brand: "",
    isLimitedEdition: false,
    isLowStock: false,
    isPromoted: false,
});

const invalidFields = reactive(new Set());

const isLoading = ref(false);

const axios = useAxios();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields except booleans required
    Object.entries(fields).forEach(([key, val]) => {
        if (key.startsWith("is")) return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Price should be numeric
    const price = parseFloat(fields.price);
    if (isNaN(price)) invalidFields.add("price");
    if (invalidFields.size) return;

    isLoading.value = true;

    const { isLimitedEdition, isLowStock, isPromoted, ...data } = fields;

    axios
        .postMultipart("/api/product/create", {
            ...data,
            is_limited_edition: Number(isLimitedEdition),
            is_low_stock: Number(isLowStock),
            is_promoted: Number(isPromoted),
        })
        .then((response) => {
            if (response.data.message === "success") {
                fields.image = null;
                fields.title = "";
                fields.price = "";
                fields.brand = "";
                fields.description = "";
                fields.isLimitedEdition = false;
                fields.isLowStock = false;
                fields.isPromoted = false;
                emit("update:shouldShow", false);
                fireNotification(NotificationTypes.PRODUCT_CREATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isLoading.value = false));
}

const emit = defineEmits(["update:shouldShow"]);
</script>
