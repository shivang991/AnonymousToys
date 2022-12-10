<template>
    <div class="grid" v-if="promotionTiles">
        <BaseImage
            src="home_promotions_2.png"
            class="justify-self-end row-start-1 col-start-1 hidden sm:block"
        />
        <div
            class="w-11/12 lg:w-3/4 justify-self-center py-16 col-start-1 row-start-1"
        >
            <h4 class="text-center text-2xl text-slate-900 mb-4 font-semibold">
                Los favoritos de nuestros clientes
            </h4>
            <BaseImage
                src="home_promotions_1.png"
                class="block translate-y-12 w-80"
            />
            <div
                class="bg-gradient-to-br from-orange-600 to-pink-700 py-12 px-8 rounded-xl relative"
            >
                <div
                    class="md:grid grid-cols-2 gap-y-20 space-y-12 md:space-y-0"
                >
                    <div
                        class="grid"
                        v-for="(tile, index) in promotionTiles"
                        :key="index"
                    >
                        <BaseImage
                            v-if="tile.image_url"
                            :src="tile.image_url"
                            is-external
                            class="w-64 h-64 rounded-md row-start-1 col-start-1 -translate-y-8 place-self-center z-10 object-cover"
                        />
                        <div
                            class="col-start-1 row-start-1 w-64 h-32 bg-slate-900 opacity-25 rounded-xl self-end justify-self-center"
                        ></div>
                        <router-link
                            class="mt-4 text-slate-200 text-center hover:underline"
                            :to="{
                                name: 'ProductDetail',
                                params: { id: tile.id },
                            }"
                        >
                            {{ tile.title }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import useAxios from "@/plugins/Axios";
import { ref } from "vue";

const axios = useAxios();

const promotionTiles = ref(null);
axios.get("/api/product/favorite").then((res) => {
    promotionTiles.value = res.data;
});
</script>
