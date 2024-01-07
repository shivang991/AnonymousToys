<template>
    <div>
        <div v-show="isPaid" class="mb-8 mt-12">
            <BaseImage src="/logo.png" class="w-80 mb-8 mx-auto"></BaseImage>
        </div>
        <div v-if="isPaid" class="max-w-lg mx-auto">
            <h1 class="text-slate-900 text-4xl font-semibold mb-8 text-center">
                Hemos recibido tu pago, Gracias por tu compra, Te mantendremos
                informado por correo.
            </h1>
            <p class="text-slate-900 text-center mb-2">
                Si tienes alguna duda puedes contactarnos por Whatsapp o Email.
            </p>
            <RouterLink
                class="text-slate-900 mx-auto block w-max underline"
                :to="{ name: 'Home' }"
                >Seguir Navegando en la tienda</RouterLink
            >
        </div>
        <div class="max-w-lg mx-auto py-12" v-else>
            <form v-show="isReady" @submit.prevent="handleSubmit">
                <h4 class="text-2xl font-semibold text-slate-500">
                    Ya casi es tuyo!, tu compra por
                    {{ formatPrice(totalPrice) }}
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
            <BaseModal
                :should-show="shouldShowConfirmationModal"
                @close="shouldShowConfirmationModal = false"
            >
                <div class="px-4 pb-8 max-w-xs">
                    <div class="text-slate-900 mb-8 text-center">
                        <p>
                            Todos tus datos son correctos?, Estas a punto de
                            crear una orden, si estas seguro da clic en "Pagar"
                            para continuar.
                        </p>
                    </div>
                    <button
                        @click="handleConfirmation"
                        class="bg-amber-500 py-2 text-white rounded-md w-full"
                        type="submit"
                    >
                        Pagar
                    </button>
                </div>
            </BaseModal>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import BaseTextField from "@/components/global/BaseTextField.vue";
import useAxios from "@/plugins/Axios";
import { formatPrice } from "@/plugins/Formatters";
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

    shouldShowConfirmationModal.value = true;
}

// for showing confirmation modal before user pays
const shouldShowConfirmationModal = ref(false);

function handleConfirmation() {
    shouldShowConfirmationModal.value = false;
    isSubmitting.value = true;
    stripe
        .confirmCardSetup(clientSecret, {
            payment_method: {
                card: stripeCard,
                billing_details: fields,
            },
        })
        .then((result) => {
            if (result.error && result.error.type === "validation_error") {
                isSubmitting.value = false;
                return;
            }

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
