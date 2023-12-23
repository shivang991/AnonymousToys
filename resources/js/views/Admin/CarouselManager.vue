<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <div class="px-12">
            <h4 class="font-semibold mb-8 text-2xl">
                Gestor del Carrusel de Imagenes
            </h4>
            <div class="py-8 flex justify-center" v-if="isLoading">
                <div
                    class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
                ></div>
            </div>
            <div v-else>
                <ul v-if="items.length" class="grid grid-cols-2 gap-4 mb-4">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="px-4 rounded-md shadow py-8"
                    >
                        <BaseImage
                            :src="item.image_url"
                            class="w-full h-40 object-cover rounded-md"
                            is-external
                        ></BaseImage>
                        <div class="text-slate-900 text-center mb-4">
                            {{ item.description }}
                        </div>
                        <div class="col-start-2 flex justify-center space-x-2">
                            <button
                                class="px-2 py-1 border border-amber-500 rounded-md text-amber-500"
                                @click="imageIdForDeletion = item.id"
                            >
                                Eliminar
                            </button>
                            <button
                                class="px-2 py-1 border border-amber-500 rounded-md text-amber-500"
                                @click="imgObjForUpdation = item"
                            >
                                Modificar
                            </button>
                        </div>
                    </li>
                </ul>
                <p
                    v-else
                    class="p-4 text-center bg-slate-100 rounded-md shadow text-slate-900"
                >
                    Ningún elemento para mostrar aquí
                </p>
                <button
                    class="py-2 px-8 bg-amber-500 text-white mt-8 rounded-md"
                    @click="shouldShowAddImageModal = true"
                >
                    Agregar una Imagen
                </button>
            </div>
        </div>
        <AddModal
            v-model:should-show="shouldShowAddImageModal"
            @item-added="fetchData"
        ></AddModal>
        <RemoveModal
            :carousel-image-id="imageIdForDeletion"
            @cancel="imageIdForDeletion = null"
            @success="handleDeletionSuccess"
        ></RemoveModal>
        <EditModal
            :carousel-image-obj="imgObjForUpdation"
            @cancel="imgObjForUpdation = null"
            @success="handleUpdationSuccess"
        ></EditModal>
    </div>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { ref } from "vue";
import AddModal from "@/components/admin/carousel/AddModal.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import RemoveModal from "@/components/admin/carousel/RemoveModal.vue";
import EditModal from "@/components/admin/carousel/EditModal.vue";

const axios = useAxios();
const isLoading = ref(true);
const items = ref([]);

const fetchData = () => {
    axios.get("/api/carousel").then((respose) => {
        isLoading.value = false;
        items.value = respose.data;
    });
};
fetchData();

const shouldShowAddImageModal = ref(false);
const imageIdForDeletion = ref(null);
const imgObjForUpdation = ref(null);

function handleDeletionSuccess() {
    items.value = items.value.filter((i) => i.id !== imageIdForDeletion.value);
    imageIdForDeletion.value = null;
}

function handleUpdationSuccess() {
    imgObjForUpdation.value = null;
    fetchData();
}
</script>
