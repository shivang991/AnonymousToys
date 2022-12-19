<template>
    <div class="grid overflow-hidden">
        <Transition :name="transitionName">
            <div
                class="col-start-1 row-start-1 h-96 mb-8 overflow-hidden duration-1000 rounded-md"
                :key="currentIndex"
            >
                <BaseImage
                    class="w-full h-full object-cover"
                    :src="carouselSlides[currentIndex].img"
                />
            </div>
        </Transition>
        <Transition name="fade">
            <div
                :key="currentIndex"
                class="col-start-1 row-start-1 bg-slate-900 bg-opacity-50 flex items-center justify-center flex-col relative"
            >
                <h1
                    class="text-6xl text-center font-bold bg-gradient-to-r from-orange-600 to-pink-700 text-transparent bg-clip-text max-w-xs py-4"
                >
                    {{ carouselSlides[currentIndex].title }}
                </h1>
                <router-link
                    :to="{ name: 'Productos' }"
                    class="max-w-xs text-xl text-amber-500 hover:underline font-semibold text-center leading-none"
                    >{{ carouselSlides[currentIndex].desc }}</router-link
                >
            </div>
        </Transition>
        <div
            class="row-start-1 col-start-1 flex h-96 rounded-md overflow-hidden"
        >
            <button
                @click="moveLeft"
                class="-rotate-180 hover:bg-slate-100 opacity-50 px-4 relative"
                v-show="currentIndex > 0"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
            <div class="flex-grow"></div>
            <button
                @click="moveRight"
                class="hover:bg-slate-100 opacity-50 px-4 relative"
                v-show="currentIndex < carouselLen - 1"
            >
                <FontAwesomeIcon icon="fa-chevron-right"></FontAwesomeIcon>
            </button>
        </div>
        <div class="row-start-2 flex justify-center space-x-2">
            <button
                v-for="i in 3"
                class="w-2 h-2 bg-slate-200 rounded-full"
                :class="{ 'opacity-50': currentIndex !== i - 1 }"
                :key="i"
                @click="updateImgIndex(i - 1)"
            ></button>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
import BaseImage from "../global/BaseImage.vue";

const transitionName = ref(""); // "left" | "right"
const currentIndex = ref(0);

const carouselSlides = [
    {
        img: "naruto.jpg",
        title: "Naruto",
        desc: "Descubre más de 200 juguetes premium",
    },
    {
        img: "dbz.jpg",
        title: "Dragon Ball",
        desc: "Los mejores descuentos; hasta un 40% de descuento!",
    },
    {
        img: "ds.jpg",
        title: "Demon Slayer",
        desc: "¡Colecciona mercancía de tu franquicia favorita!",
    },
];

const carouselLen = carouselSlides.length;

function updateImgIndex(newIndex) {
    const di = newIndex - currentIndex.value;
    if (!di) return;
    currentIndex.value = newIndex;
    if (di > 0) transitionName.value = "right";
    if (di < 0) transitionName.value = "left";
}

function moveRight() {
    const newIndex = currentIndex.value + 1;
    if (newIndex >= carouselLen) return;
    transitionName.value = "right";
    currentIndex.value = newIndex;
}
function moveLeft() {
    const newIndex = currentIndex.value - 1;
    if (newIndex < 0) return;
    transitionName.value = "left";
    currentIndex.value = newIndex;
}
</script>

<style scoped>
.left-enter-from,
.right-leave-to {
    @apply -translate-x-full;
}
.left-leave-to,
.right-enter-from {
    @apply translate-x-full;
}
</style>
