<template>
    <div>
        <div v-show="isPaid" class="mb-8 mt-12">
            <BaseImage src="/logo.png" class="w-80 mb-8 mx-auto"></BaseImage>
        </div>
        <div v-if="isPaid" class="max-w-lg mx-auto">
            <h1 class="text-slate-900 text-4xl font-semibold mb-8 text-center">
                Thanks for your purchase, your order has been placed!
            </h1>
            <p class="text-slate-900 text-center">
                We will keep you updated about the delivery via your email.
            </p>
        </div>
        <div class="max-w-lg mx-auto py-12" v-else>
            <form v-show="isReady" @submit.prevent="handleSubmit">
                <h4 class="text-2xl font-semibold text-slate-500">
                    Ya casi es tuyo!, tu compra por ${{ totalPrice }} MXN
                </h4>
                <p class="mb-8 text-slate-500">
                    Completa los siguientes datos de tu medio de pago y presiona
                    "Pagar" para continuar
                </p>
                <div ref="cardEl"></div>
                <BaseTextField
                    v-model="fields.name"
                    label="Nombre de la tarjeta"
                    class="w-full mb-4 mt-8"
                    :is-invalid="invalidFields.has('name')"
                ></BaseTextField>
                <BaseTextField
                    v-model="fields.address"
                    label="Dirección de Pago"
                    class="w-full"
                    is-text-area
                    :is-invalid="invalidFields.has('address')"
                ></BaseTextField>
                <p
                    class="mt-4 py-1 px-4 bg-red-50 text-red-500 rounded-md"
                    v-if="isCardError"
                >
                    Your card got declined
                </p>
                <button
                    class="bg-amber-500 px-8 py-2 text-white rounded-md mt-8"
                    type="submit"
                    :disabled="isSubmitting"
                >
                    <span
                        class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                        v-if="isSubmitting"
                    >
                    </span>
                    <span v-else> Pagar </span>
                </button>
            </form>
            <div class="flex justify-center py-8" v-show="!isReady">
                <div
                    class="w-10 h-10 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import BaseTextField from "@/components/global/BaseTextField.vue";
import useAxios from "@/plugins/Axios";
import { loadStripe } from "@stripe/stripe-js/pure";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const cardEl = ref();

const totalPrice = ref();
const isReady = ref(false);
const isSubmitting = ref(false);
const isCardError = ref(false);
const isPaid = ref(false);

/** @type import('@stripe/stripe-js').Stripe */
let stripe;

/** @type import('@stripe/stripe-js').StripeCardElement */
let stripeCard;
/** @type string */
let clientSecret;

loadStripe.setLoadParameters({ advancedFraudSignals: false });

const axios = useAxios();
const route = useRoute();

const fields = reactive({
    address: "",
    name: "",
    email: "",
});
const invalidFields = ref(new Set([]));

onMounted(async () => {
    const orderId = route.query.id;
    if (!orderId) return;
    const { data } = await axios.get(`/api/order/${orderId}`);
    if (data.is_paid) {
        isPaid.value = true;
        return;
    }
    clientSecret = data.secret;
    fields.email = data.user.email;
    totalPrice.value = data.total_price;
    const loadResult = await loadStripe(process.env.MIX_STRIPE_PK);
    stripe = loadResult;
    const elements = stripe.elements();
    const card = elements.create("card");
    card.mount(cardEl.value);
    stripeCard = card;
    isReady.value = true;
});

function handleSubmit() {
    invalidFields.value.clear();
    Object.entries(fields).forEach(([key, value]) => {
        if (!value) invalidFields.value.add(key);
    });
    if (invalidFields.value.size || !stripe || !clientSecret) return;

    isSubmitting.value = true;
    stripe
        .confirmCardSetup(clientSecret, {
            payment_method: {
                card: stripeCard,
                billing_details: fields,
            },
        })
        .then((result) => {
            if (result.error && result.error.code === "card_declined") {
                isSubmitting.value = false;
                isCardError.value = true;
            } else if (result.setupIntent)
                axios
                    .post("/api/checkout/pay", {
                        secret: clientSecret,
                        payment_method: result.setupIntent.payment_method,
                        address: fields.address,
                    })
                    .then((response) => {
                        if (response.data.message === "success")
                            isPaid.value = true;
                    });
        });
}
</script>
