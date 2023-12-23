<template>
    <div class="bg-slate-900">
        <div class="w-3/4 mx-auto py-12">
            <HomeHero></HomeHero>
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
import HomePromotions from "@/components/home/HomePromotions.vue";
import HomePosts from "@/components/home/HomePosts.vue";
import HomeHero from "@/components/home/HomeHero.vue";

const services = [
    {
        title: "Envios protegidos contra desperfectos",
        desc: "Todos nuestros envios estan protegidos para llegar en las mejores condiciones hasta tu puerta",
        icon: "fa-shopping-cart",
    },
    {
        title: "Compra protegida",
        desc: "Contamos con una garantía de satisfacción del 100% en tu pedido, contamos con politica de devoluciones",
        icon: "fa-shield-alt",
    },
    {
        title: "Amplio soporte a nuestros clientes",
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
