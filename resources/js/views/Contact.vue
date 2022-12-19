<template>
    <div class="py-12">
        <h2 class="max-w-xs text-2xl text-center mx-auto font-semibold mb-12">
            Nos encanta saber de ti, ponte en contacto con nosotros &#x1F44B;
        </h2>
        <div
            class="flex flex-col-reverse sm:grid grid-cols-2 mx-auto gap-x-8 w-11/12 md:w-3/4 mb-12"
        >
            <div
                class="grid h-max overflow-hidden rounded-xl mt-8 sm:mt-0 bg-amber-500"
            >
                <div
                    class="px-8 py-24 text-white row-start-1 col-start-1 min-w-0 z-10"
                >
                    <h4 class="text-2xl mb-8 font-semibold">
                        Información del contacto
                    </h4>
                    <p class="mb-12">
                        Rellena el formulario y nuestro equipo se pondrá en
                        contacto contigo dentro de las 24 horas
                    </p>
                    <ul class="space-y-4">
                        <li
                            class="flex items-center space-x-4"
                            v-for="(item, index) in contactInfo"
                            :key="index"
                        >
                            <FontAwesomeIcon
                                :icon="item.icon"
                                class="text-slate-600"
                            ></FontAwesomeIcon>
                            <p class="max-w-xs leading-none truncate">
                                {{ item.text }}
                            </p>
                        </li>
                    </ul>
                </div>
                <div
                    class="row-start-1 col-start-1 bg-slate-600 w-40 h-40 rounded-full self-end justify-self-end translate-x-1/4 translate-y-1/4"
                ></div>
            </div>
            <div>
                <div class="grid grid-cols-2 mb-8">
                    <button
                        class="py-2 px-4 text-slate-900 border-b font-semibold"
                        @click="shouldShowTestimonialForm = false"
                        :class="
                            shouldShowTestimonialForm
                                ? 'border-transparent opacity-50'
                                : 'border-amber-500 bg-slate-100 rounded-t-md'
                        "
                    >
                        Escribe un mensaje
                    </button>
                    <button
                        @click="shouldShowTestimonialForm = true"
                        class="py-2 px-4 text-slate-900 border-b font-semibold"
                        :class="
                            shouldShowTestimonialForm
                                ? 'border-amber-500 bg-slate-100 rounded-t-md'
                                : 'border-transparent opacity-50'
                        "
                    >
                        Dejar un comentario
                    </button>
                </div>
                <div class="grid">
                    <Transition name="fade">
                        <testimonial-form
                            class="row-start-1 col-start-1"
                            v-if="shouldShowTestimonialForm"
                        ></testimonial-form>
                        <contact-form
                            class="row-start-1 col-start-1"
                            v-else
                        ></contact-form>
                    </Transition>
                </div>
            </div>
        </div>
        <contact-map></contact-map>
    </div>
</template>

<script setup>
import ContactForm from "@/components/contact/ContactForm.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ContactMap from "@/components/contact/ContactMap.vue";
import TestimonialForm from "@/components/contact/TestimonialForm.vue";
import { ref } from "vue";

const contactInfo = [
    { icon: "fa-phone", text: "5518697112" },
    {
        icon: "fa-map-location",
        text: "Mercado del sonora pasillo 6 local 147",
    },
    {
        icon: "fa-map-location",
        text: " Gutemberg 29 colonia centro Cuernavaca morelos",
    },
];

const shouldShowTestimonialForm = ref(false);
</script>
