<template>
    <div class="grid grid-cols-2 gap-4 lg:gap-8">
        <router-link
            v-for="(link, index) in visibleLinks"
            :key="index"
            :to="{ name: link.route }"
            class="px-4 py-8 bg-white rounded-md shadow cursor-pointer transition hover:shadow-xl hover:scale-110"
        >
            <h5 class="text-xl text-amber-500 text-center mb-4">
                {{ link.title }}
            </h5>
            <BaseImage
                v-if="link.image"
                :src="link.image"
                class="w-32 mx-auto"
            ></BaseImage>
        </router-link>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const accessibleModules = computed(() => store.state.auth.accessibleModules);

const canAccess = (moduleRoute) => {
    // Route names are basically staffAccessOptions in PascalCase (instead of camelCase)
    const moduleKey = moduleRoute[0].toLowerCase() + moduleRoute.slice(1);
    return accessibleModules.value && accessibleModules.value.has(moduleKey);
};
const visibleLinks = [
    {
        title: "Creador de Posts",
        image: "admin_post_creator.png",
        route: "PostCreator",
    },
    {
        title: "Gestor del Carrusel de Imagenes",
        image: null,
        route: "CarouselManager",
    },
    {
        title: "Modulo de atención a clientes",
        image: "admin_customer_service_manager.png",
        route: "CustomerServiceManager",
    },
    {
        title: "Gestor de Productos",
        image: "admin_product_manager.png",
        route: "ProductManager",
    },
].filter((m) => canAccess(m.route));
</script>
