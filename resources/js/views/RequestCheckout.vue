<template>
    <div class="max-w-lg mx-auto py-12">
        <div
            class="flex space-x-4 text-xl items-center p-4 text-center justify-center bg-slate-100 text-slate-900 rounded-lg shadow-lg"
            v-if="!cart.items.size"
        >
            <FontAwesomeIcon icon="fa-exclamation-triangle" />
            <p>Tu carrito esta vacío...</p>
        </div>
        <div v-else>
            <h2 class="text-4xl font-semibold text-slate-900 mb-8">
                Confirmar pago
            </h2>
            <p class="text-slate-500 mb-4">
                Por favor ingrese su correo electrónico para iniciar el proceso.
            </p>
            <form class="flex space-x-4 w-full" @submit.prevent="handleSubmit">
                <BaseTextField
                    label="Email"
                    v-model="emailInput"
                    :is-invalid="isEmailInvalid"
                    class="flex-grow"
                ></BaseTextField>
                <button
                    class="bg-amber-500 px-8 py-2 text-white rounded-md disabled:opacity-50"
                    :disabled="shouldDisableSubmit"
                    type="submit"
                >
                    <span
                        class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                        v-if="requestState === 'loading'"
                    >
                    </span>
                    <span v-else-if="resendCountdown === 0"> Resend </span>
                    <span v-else> Ingresar </span>
                </button>
            </form>
            <p class="text-slate-500" v-if="resendCountdown > 0">
                Resend available in {{ resendCountdown }}s
            </p>

            <div
                v-if="requestState === 'success'"
                class="mb-8 bg-slate-200 border rounded-md border-slate-500 py-8 px-4 flex space-x-4 mt-4"
            >
                <FontAwesomeIcon
                    icon="fa-check"
                    class="text-2xl text-slate-500"
                />
                <p class="text-slate-900">
                    El enlace para proceder con la compra ha sido enviado por
                    correo. Por favor revise su correo electrónico y siga las
                    instrucciones.
                </p>
            </div>
            <div
                v-if="requestState === 'error'"
                class="mb-8 bg-red-50 border rounded-md border-red-600 py-8 px-4 flex space-x-4 mt-4"
            >
                <FontAwesomeIcon
                    icon="fa-exclamation-triangle"
                    class="text-2xl text-red-600"
                ></FontAwesomeIcon>
                <p class="text-red-600">
                    Se produjo algún error. Por favor, intenta de nuevo
                </p>
            </div>
            <div class="bg-slate-100 py-4 px-8 rounded-md shadow mt-8">
                <h4 class="text-2xl font-semibold mb-2">
                    Solicitud de Proceso de compra:
                </h4>
                <p class="flex space-x-2 items-center">
                    <span>Precio Total:</span
                    ><span class="text-xl">{{
                        formatPrice(cart.totalPrice)
                    }}</span>
                </p>
                <p class="flex space-x-2 items-center mb-4">
                    <span>Articulos a comprar:</span
                    ><span class="text-xl">{{ cart.items.size }}</span>
                </p>
                <router-link
                    :to="{ name: 'Cart' }"
                    class="text-amber-500 hover:underline"
                    >Modificar Carrito</router-link
                >
            </div>
        </div>
    </div>
</template>
<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import useAxios from "@/plugins/Axios";
import { formatPrice } from "@/plugins/Formatters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const emailInput = ref("");
const isEmailInvalid = ref(false);
const axios = useAxios();

const store = useStore();
const cart = computed(() => store.state.cart);

const requestState = ref("pending"); // "pending"|"loading"|"success"|"error"

const resendCountdown = ref(-1);
let resendIntervalId;

const shouldDisableSubmit = computed(
    () =>
        resendCountdown.value !== 0 &&
        !["pending", "error"].includes(requestState.value)
);

function handleSubmit() {
    const { items } = cart.value;
    if (!items.size) return;

    if (shouldDisableSubmit.value) return;
    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        isEmailInvalid.value = true;
        return;
    }

    requestState.value = "loading";
    resendCountdown.value = -1;
    axios
        .post("/api/checkout", {
            email: emailInput.value,
            items: [...items.entries()].map(([id, { quantity }]) => ({
                product_id: id,
                quantity,
            })),
        })
        .then((response) => {
            if (response.data.message === "success") {
                requestState.value = "success";

                resendCountdown.value = 30;
                resendIntervalId = setInterval(() => {
                    resendCountdown.value--;
                    if (resendCountdown.value === 0)
                        clearInterval(resendIntervalId);
                }, 1000);
                // store.commit("cart/CLEAR");
            }
        })
        .catch((error) => {
            console.log(error.response);
            requestState.value = "error";
        });
}
</script>
