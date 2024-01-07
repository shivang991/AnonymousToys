<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="py-8 flex justify-center w-80" v-if="isFetchingProduct">
            <div
                class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <form v-else class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseImageInput
                    :default-src="productImgSrc"
                    class="w-full h-40 object-cover"
                    label="Imagen del Producto"
                    v-model="fields.image"
                ></BaseImageInput>
                <BaseTextField
                    v-model="fields.title"
                    label="Nombre del producto"
                ></BaseTextField>
                <BaseTextField
                    v-model="fields.description"
                    label="Descripción"
                    is-text-area
                ></BaseTextField>
                <div class="flex space-x-4">
                    <BaseTextField
                        v-model="fields.price"
                        label="Precio"
                    ></BaseTextField>
                    <BaseTextField
                        v-model="fields.brand"
                        label="Marca"
                    ></BaseTextField>
                </div>
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

            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isFormSubmitting"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isFormSubmitting"
                >
                </span>
                <span v-else> Actualizar </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref, watch } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
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

let lastProductId = null;

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

const isFetchingProduct = ref(false);
const isFormSubmitting = ref(false);
const productImgSrc = ref(null);
const invalidFields = reactive(new Set());

const axios = useAxios();

const store = useStore();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields except image and booleans required
    Object.entries(fields).forEach(([key, val]) => {
        if (key === "image" || key.startsWith("is")) return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Price should be numeric
    const price = parseFloat(fields.price);
    if (isNaN(price)) invalidFields.add("price");
    if (invalidFields.size) return;

    isFormSubmitting.value = true;
    const { isLimitedEdition, isLowStock, isPromoted, ...data } = fields;
    axios
        .postMultipart(`/api/product/update/${props.productId}`, {
            ...data,
            is_limited_edition: Number(isLimitedEdition),
            is_low_stock: Number(isLowStock),
            is_promoted: Number(isPromoted),
        })
        .then((response) => {
            if (response.data.message === "success") {
                lastProductId = null; // Should refetch next time (with updated data)
                store.dispatch("products/refetch");
                emit("update:shouldShow", false);
                fireNotification(NotificationTypes.PRODUCT_UPDATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isFormSubmitting.value = false));
}

// Update the fields when productId changes
watch(
    () => props.shouldShow,
    async (newVal) => {
        if (lastProductId === props.productId) return;
        if (newVal) {
            isFetchingProduct.value = true;
            const { data: newProduct } = await axios.get(
                `/api/product/${props.productId}`
            );
            fields.title = newProduct.title;
            fields.description = newProduct.description;
            fields.price = String(newProduct.price);
            fields.brand = newProduct.brand;
            fields.isLimitedEdition = Boolean(newProduct.is_limited_edition);
            fields.isLowStock = Boolean(newProduct.is_low_stock);
            fields.isPromoted = Boolean(newProduct.is_promoted);
            productImgSrc.value = newProduct.image_url;
            isFetchingProduct.value = false;
            lastProductId = props.productId;
        }
    }
);
</script>
