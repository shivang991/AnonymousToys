<template>
    <div class="bg-slate-900">
        <div
            class="flex justify-center md:justify-between items-center w-3/4 mx-auto"
        >
            <div class="hidden md:block">
                <h1 class="text-4xl text-slate-200 mb-4">Naruto Shippuden</h1>
                <p
                    class="mb-12 text-xl bg-gradient-to-r bg-clip-text text-transparent font-bold from-amber-800 w-max to-amber-500"
                >
                    #DATTEBAYO
                </p>
                <div class="flex space-x-8 mb-12">
                    <BaseImage
                        class="w-20 mb-12"
                        v-for="(src, index) in leftDecorationImages"
                        :src="src"
                        :key="index"
                    />
                </div>
                <router-link
                    :to="{ name: 'Productos' }"
                    class="text-2xl py-4 px-8 text-white bg-amber-500 rounded-md mt-8 font-semibold"
                    >Ver más
                </router-link>
            </div>
            <div class="lg:flex space-x-8 items-center">
                <BaseImage src="home_central.png" width="480" />
                <div class="hidden lg:block">
                    <div
                        class="border rounded-md border-amber-500 px-4 py-2 text-slate-200 mb-8"
                    >
                        <p>Hasta</p>
                        <p class="flex space-x-2 items-end">
                            <span class="text-amber-500 text-4xl font-semibold"
                                >40%</span
                            >
                            <span class="leading-none">de descuento</span>
                        </p>
                    </div>
                    <BaseImage src="home_dec1.png" class="w-40" />
                </div>
            </div>
        </div>
        <div class="flex justify-center pb-8">
            <button class="text-slate-200 text-lg">
                <FontAwesomeIcon icon="fa-chevron-down" />
            </button>
        </div>
    </div>
    <HomeCarousel></HomeCarousel>
    <HomePromotions></HomePromotions>
    <div class="my-16 w-11/12 lg:w-3/4 mx-auto">
        <h4 class="text-2xl font-semibold text-slate-900 mb-8 sm:mb-20">
            Servicios
        </h4>
        <ul class="space-y-12">
            <li
                class="flex even:flex-row-reverse group items-center w-full"
                v-for="(service, index) in services"
                :key="index"
            >
                <div
                    class="flex shadow-xl items-center group-even:flex-row-reverse p-8 border-b-4 border-amber-500 rounded-xl max-w-lg"
                >
                    <p class="text-6xl font-bold text-slate-500">
                        0{{ index + 1 }}
                    </p>
                    <div
                        class="space-y-4 text-slate-900 ml-8 group-even:mr-8 group-even:ml-0"
                    >
                        <h5 class="text-xl font-semibold">
                            {{ service.title }}
                        </h5>
                        <p>{{ service.desc }}</p>
                    </div>
                </div>
                <div
                    class="hidden md:block text-8xl text-slate-500 p-8 rounded border-b-4 border-amber-500 shadow-xl ml-8 group-even:mr-8 group-even:ml-0"
                >
                    <FontAwesomeIcon :icon="service.icon"></FontAwesomeIcon>
                </div>
            </li>
        </ul>
        <HomePosts></HomePosts>
    </div>
    <HomeTestimonial></HomeTestimonial>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import HomeTestimonial from "@/components/home/HomeTestimonial.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import HomePromotions from "@/components/home/HomePromotions.vue";
import HomePosts from "@/components/home/HomePosts.vue";

const leftDecorationImages = [
    "home_dec4.png",
    "home_dec3.png",
    "home_dec2.png",
];

const services = [
    {
        title: "Embalaje absoluto",
        desc: "Todos nuestros envíos están 100% protegidos con empaques de coleccionista.",
        icon: "fa-envelope",
    },
    {
        title: "Satisfacción o Retorno",
        desc: "Tenemos una política de satisfacción del 100%, si no está satisfecho con el producto, le devolvemos su dinero.",
        icon: "fa-smile",
    },
    {
        title: "Atención al cliente las 24 horas",
        desc: "Sabemos la importancia de resolver todas tus dudas, por eso nuestro correo siempre está abierto.",
        icon: "fa-headset",
    },
    {
        title: "Pagos seguros",
        desc: "Utilizamos métodos confiables y mantenemos su información completamente protegida.",
        icon: "fa-money-check-dollar",
    },
];
</script>
