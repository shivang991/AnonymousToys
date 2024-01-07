<template>
    <div class="w-11/12 md:w-3/4 mx-auto py-12">
        <h2 class="text-4xl font-semibold text-slate-900 mb-8">Tu carrito</h2>
        <div
            class="flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"
            v-if="!items.size"
        >
            <FontAwesomeIcon icon="fa-exclamation-triangle" />
            <p>Tu carrito esta vacío...</p>
        </div>
        <div v-else>
            <ul class="space-y-8">
                <CartListItem
                    v-for="[id, item] in items"
                    @quantity-update="(q) => updateQuantity(id, q)"
                    :key="id"
                    :img-src="item.imgSrc"
                    :title="item.title"
                    :quantity="item.quantity"
                    :price="item.price"
                ></CartListItem>
            </ul>
            <div class="pt-8 mt-12 border-t border-slate-900">
                <div class="flex mb-8 justify-between text-4xl font-semibold">
                    <h2 class="text-slate-900">Precio Total</h2>
                    <h2 class="text-slate-500">
                        {{ formatPrice(store.state.cart.totalPrice) }}
                    </h2>
                </div>
                <div class="flex justify-end">
                    <router-link
                        :to="{ name: 'RequestCheckout' }"
                        class="py-2 px-8 text-xl text-white rounded-md bg-amber-500 font-semibold"
                        >Continuar Compra</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CartListItem from "@/components/cart/CartListItem.vue";
import { formatPrice } from "@/plugins/Formatters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

function updateQuantity(itemId, newQuantity) {
    store.commit("cart/UPDATE_QUANTITY", { id: itemId, newQuantity });
}

const items = computed(() => store.state.cart.items);
</script>
