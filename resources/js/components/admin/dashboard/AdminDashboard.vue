<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
        <router-link
            :to="{ name: 'PostCreator' }"
            class="col-span-2 flex py-8 px-4 bg-white rounded-md shadow justify-center space-x-8 cursor-pointer transition hover:shadow-xl hover:scale-110"
        >
            <h5 class="text-xl text-amber-500">Creador de Posts</h5>
            <BaseImage
                src="admin_post_creator.png"
                class="w-40 h-40 object-contain"
            ></BaseImage>
        </router-link>
        <router-link
            :to="{ name: 'CarouselManager' }"
            class="px-4 py-8 bg-white rounded-md shadow cursor-pointer transition hover:shadow-xl hover:scale-110"
        >
            <h5 class="text-xl text-amber-500 text-center">
                Gestor del Carrusel de Imagenes
            </h5>
        </router-link>
        <router-link
            :to="{ name: 'CustomerServiceManager' }"
            class="py-8 px-4 bg-white rounded-md shadow cursor-pointer transition hover:shadow-xl hover:scale-110"
        >
            <h5 class="text-xl text-amber-500 text-center mb-8">
                Modulo de atención a clientes
            </h5>
            <BaseImage
                src="admin_customer_service_manager.png"
                class="w-32 mx-auto"
            ></BaseImage>
        </router-link>
        <router-link
            :to="{ name: 'ProductManager' }"
            class="col-span-2 flex py-8 px-4 bg-white rounded-md shadow justify-center space-x-8 cursor-pointer transition hover:shadow-xl hover:scale-110"
        >
            <h5 class="text-xl text-amber-500">Gestor de Productos</h5>
            <BaseImage
                src="admin_product_manager.png"
                class="w-40 h-40 object-contain"
            ></BaseImage>
        </router-link>
        <router-link
            :to="{ name: 'UserManager' }"
            class="col-span-2 flex py-8 px-4 bg-white rounded-md shadow justify-center space-x-8 cursor-pointer transition hover:shadow-xl hover:scale-110"
        >
            <h5 class="text-xl text-amber-500">Administrador de Usuarios</h5>
            <BaseImage
                src="admin_user_manager.png"
                class="w-40 h-40 object-contain"
            ></BaseImage>
        </router-link>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
</script>
