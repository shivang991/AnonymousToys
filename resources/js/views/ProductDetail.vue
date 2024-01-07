<template>
    <div v-if="product">
        <div
            class="w-11/12 md:w-3/4 mx-auto py-8 sm:py-20 sm:grid grid-cols-2 gap-x-2 lg:gap-x-8"
        >
            <div class="w-full mb-8 sm:mb-0">
                <BaseImage
                    is-external
                    :src="product.image_url"
                    :alt="product.title"
                    class="w-full h-80 object-cover"
                />
            </div>
            <div>
                <h1 class="text-4xl font-semibold leading-none mb-2">
                    {{ product.title }}
                </h1>
                <div class="flex space-x-2 mb-4">
                    <p
                        class="px-2 text-sm bg-red-50 text-red-600 rounded-md"
                        v-if="product.is_low_stock"
                    >
                        Existencias bajas
                    </p>
                    <p
                        class="px-2 text-sm bg-slate-100 text-slate-500 rounded-md"
                        v-if="product.is_limited_edition"
                    >
                        Edición limitada
                    </p>
                </div>
                <p class="font-semibold text-2xl text-slate-600 mb-4">
                    {{ formatPrice(product.price) }}
                </p>
                <div class="flex items-center space-x-2 mb-4">
                    <h4 class="text-xl">Cantidad:</h4>
                    <div class="flex space-x-2" v-if="quantity">
                        <button
                            class="py-1 px-2 rounded-md border border-amber-500 text-amber-500 text-sm"
                            @click.stop="
                                store.commit('cart/REMOVE_ONE_ITEM', product.id)
                            "
                        >
                            <FontAwesomeIcon
                                icon="fa fa-minus"
                            ></FontAwesomeIcon>
                        </button>

                        <span class="text-xl font-semibold text-slate-500">{{
                            quantity
                        }}</span>
                        <button
                            class="py-1 px-2 rounded-md border border-amber-500 text-amber-500 text-sm"
                            @click.stop="addToCart"
                        >
                            <FontAwesomeIcon
                                icon="fa fa-plus"
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                    <div class="px-4 py-2 bg-slate-200 rounded-md" v-else>
                        1
                    </div>
                </div>
                <div class="mb-8">
                    <h4 class="text-xl mb-2">Descripción:</h4>
                    <p>{{ product.description }}</p>
                </div>
                <div class="space-y-4" v-if="!quantity">
                    <button
                        @click="buyNow"
                        class="w-full py-2 border border-amber-500 text-amber-500 rounded-md"
                    >
                        Comprar ahora
                    </button>
                    <button
                        class="w-full py-2 bg-amber-500 text-white rounded-md"
                        @click="addToCart"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div
        v-else-if="isNotFound"
        class="flex flex-col items-center pt-8 justify-center"
    >
        <h1 class="text-slate-500 text-6xl font-bold mb-2">404</h1>
        <p class="text-slate-900">The product could not be found</p>
    </div>
    <div v-else class="pt-12 flex justify-center">
        <div
            class="w-12 h-12 rounded-full border-4 border-amber-500 animate-spin border-b-transparent"
        ></div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAxios } from "@/plugins/Axios";
import BaseImage from "../components/global/BaseImage.vue";
import { useStore } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { formatPrice } from "@/plugins/Formatters";

const route = useRoute();
const router = useRouter();
const axios = useAxios();
const store = useStore();

const product = ref(null);

const isNotFound = ref(false);

if (route.params.id) {
    axios
        .get(`/api/product/${route.params.id}`)
        .then(({ data }) => (product.value = data))
        .catch((err) => {
            if (err.response.status === 404) isNotFound.value = true;
        });
}

const quantity = computed(() =>
    store.getters["cart/itemCount"](product.value?.id)
);

function addToCart() {
    const prod = product.value;
    if (!prod) return;
    store.commit("cart/ADD_ONE_ITEM", {
        id: prod.id,
        imgSrc: prod.image_url,
        title: prod.title,
        price: prod.price,
    });
}

function buyNow() {
    addToCart();
    router.push({ name: "RequestCheckout" });
}
</script>
