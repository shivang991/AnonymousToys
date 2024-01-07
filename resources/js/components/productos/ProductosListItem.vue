<template>
    <div
        title="Ver el producto"
        @click="viewProduct"
        class="bg-slate-100 hover:shadow-xl cursor-pointer flex flex-col items-center px-8 py-12 shadow-sm rounded-tl-md rounded-tr-2xl rounded-bl-2xl rounde-br-md"
    >
        <div class="grid">
            <BaseImage
                isExternal
                :src="imgSrc"
                class="row-start-1 col-start-1 w-60 h-40 object-cover mb-4 rounded"
            />
            <div
                class="flex flex-col items-start space-y-2 row-start-1 col-start-1 self-start mb-4"
            >
                <p
                    class="px-2 text-sm bg-red-50 border border-red-600 text-red-600 rounded-full"
                    v-if="isLowStock"
                >
                    Existencias bajas
                </p>
                <p
                    class="px-2 text-sm bg-white text-slate-500 rounded-full border border-slate-500"
                    v-if="isLimited"
                >
                    Edición limitada
                </p>
                <p
                    class="px-2 text-sm bg-white text-amber-500 rounded-full border border-amber-500"
                    v-if="isPromoted"
                >
                    Promocionado
                </p>
            </div>
        </div>
        <h5 class="text-xl font-semibold mb-2 text-center leading-none">
            {{ title }}
        </h5>
        <p class="mb-8 text-center">Precio: {{ formattedPrice }}</p>
        <div
            class="flex justify-center items-center space-x-4"
            v-if="quantityInCart"
        >
            <button
                class="py-1 px-2 rounded-md border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                @click.stop="removeFromCart"
            >
                <FontAwesomeIcon icon="fa fa-minus"></FontAwesomeIcon>
            </button>

            <span class="text-xl font-semibold text-slate-500">{{
                quantityInCart
            }}</span>
            <button
                class="py-1 px-2 rounded-md border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                @click.stop="addToCart"
            >
                <FontAwesomeIcon icon="fa fa-plus"></FontAwesomeIcon>
            </button>
        </div>
        <button
            class="flex justify-between w-full items-center py-2 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-md"
            @click.stop="addToCart"
            v-else
        >
            <span>Añadir al carrito</span>
            <FontAwesomeIcon icon="fa-shopping-cart"></FontAwesomeIcon>
        </button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import BaseImage from "../global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from "vuex";
import { computed, toRaw } from "vue";
import { formatPrice } from "@/plugins/Formatters";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isLimited: {
        type: Boolean,
        required: true,
    },
    isPromoted: {
        type: Boolean,
        required: true,
    },
    isLowStock: {
        type: Boolean,
        required: true,
    },
});

const formattedPrice = computed(() => formatPrice(props.price));

const router = useRouter();

const store = useStore();

const quantityInCart = computed(() =>
    store.getters["cart/itemCount"](props.id)
);

const rawProduct = toRaw(props);

const addToCart = () => store.commit("cart/ADD_ONE_ITEM", rawProduct);
const removeFromCart = () => store.commit("cart/REMOVE_ONE_ITEM", props.id);

const viewProduct = () =>
    router.push({ name: "ProductDetail", params: { id: props.id } });
</script>
