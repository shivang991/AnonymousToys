<template>
    <div class="py-20 bg-slate-900" v-if="carouselSlides.length">
        <div class="flex justify-between w-3/4 items-center mx-auto mb-12">
            <h2 class="text-slate-200 font-semibold text-4xl">
                Nuestras Promociones
            </h2>
            <div class="flex space-x-2 text-slate-200">
                <button
                    :disabled="marginLeft <= minXTranslation"
                    @click="marginLeft -= 350"
                    class="w-8 h-8 flex items-center justify-center border border-slate-500 rounded-full rotate-180 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>
                </button>
                <button
                    :disabled="marginLeft >= 0"
                    @click="marginLeft += 350"
                    class="w-8 h-8 flex items-center justify-center border border-slate-500 rounded-full disabled:opacity-50 disabled:pointer-events-none"
                >
                    <FontAwesomeIcon icon="fa-arrow-right"></FontAwesomeIcon>
                </button>
            </div>
        </div>
        <div class="overflow-hidden">
            <div
                class="grid gap-x-8 grid-flow-col duration-500 ease-out"
                :style="{
                    transform: `translateX(${marginLeft}px)`,
                    gridTemplateColumns: `repeat(${carouselSlides.length},400px)`,
                }"
                ref="carouselEl"
            >
                <div v-for="(slide, i) in carouselSlides" :key="i" class="grid group">
                    <div class="h-64 col-start-1 row-start-1">
                        <BaseImage
                            :src="slide.image_url"
                            is-external
                            class="w-full h-full object-cover rounded-md block"
                            :alt="slide.description"
                        ></BaseImage>
                    </div>

                    <p
                        class="self-end col-start-1 row-start-1 text-center text-slate-200 py-4 px-8 bg-opacity-50 bg-slate-900 group-hover:opacity-100 opacity-0 duration-500"
                    >
                        {{ slide.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import BaseImage from "@/components/global/BaseImage.vue";
import useAxios from "@/plugins/Axios";

const marginLeft = ref(0);
const carouselEl = ref(null);
const minXTranslation = ref(0);

const carouselSlides = ref([]);

const axios = useAxios();

axios.get("/api/carousel").then((res) => {
    carouselSlides.value = new Array(10).fill(res.data[0]);
});

watch(carouselEl, (val) => {
    if (val)
        minXTranslation.value = -(
            val.scrollWidth - val.getBoundingClientRect().width
        );
});
</script>
