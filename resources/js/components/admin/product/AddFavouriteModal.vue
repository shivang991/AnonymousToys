<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <form class="px-4 pb-8 max-w-md" @submit.prevent="handleSubmit">
            <p class="text-slate-900 text-center max-w-xs mx-auto">
                <span v-if="isSelectedProdFavorite">
                    Este producto existe dentro de la lista de productos
                    favoritos. ¿Quieres eliminarlo?
                </span>
                <span v-else-if="isFavoriteListFull"
                    >Puedes tener un máximo de 4 productos destacados. Elija un
                    producto para ser reemplazado con el producto seleccionado.
                </span>
                <span v-else>
                    ¿Estás seguro de que quieres añadir este producto a
                    favoritos?
                </span>
            </p>
            <div class="mt-4 grid grid-cols-2 gap-2" v-if="canCauseOverflow">
                <button
                    type="button"
                    v-for="(product, i) in favouriteProducts"
                    @click="replaceProductId = product.id"
                    :key="i"
                    class="p-4 bg-slate-200 rounded-md shadow"
                >
                    <div class="grid">
                        <FontAwesomeIcon
                            v-if="replaceProductId === product.id"
                            class="text-amber-500 text-4xl justify-self-end col-start-1 row-start-1 relative"
                            icon="fa fa-check-square"
                        ></FontAwesomeIcon>
                        <BaseImage
                            :src="product.image_url"
                            is-external
                            class="w-full h-36 object-cover mb-2 col-start-1 row-start-1"
                        ></BaseImage>
                    </div>
                    <p class="text-center">{{ product.title }}</p>
                </button>
            </div>
            <button
                @click="handleConfirmed"
                class="bg-amber-500 py-2 text-white rounded-md w-full mt-8 disabled:opacity-50"
                :disabled="
                    isLoading ||
                    (canCauseOverflow && typeof replaceProductId !== 'number')
                "
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else-if="canCauseOverflow"> Confirmar </span>
                <span v-else>Si</span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import { ref, computed } from "vue";
import useAxios from "@/plugins/Axios";
import BaseImage from "@/components/global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    selectedProduct: {
        type: Object,
        default: null,
    },
    favouriteProducts: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(["update:shouldShow", "update:favouriteProducts"]);

const isFavoriteListFull = computed(() => props.favouriteProducts.length >= 4);
const isSelectedProdFavorite = computed(() =>
    props.favouriteProducts.some((p) => p.id === props.selectedProduct?.id)
);
const canCauseOverflow = computed(
    () => isFavoriteListFull.value && !isSelectedProdFavorite.value
);

const replaceProductId = ref(null);

const axios = useAxios();

const isLoading = ref(false);

function handleSubmit() {
    isLoading.value = true;
    axios
        .authPost(`/api/product/update-favorite/${props.selectedProduct?.id}`, {
            ...(typeof replaceProductId.value === "number" && {
                replace: replaceProductId.value,
            }),
        })
        .then(() => {
            isLoading.value = false;
            emit("update:shouldShow", false);
            const newFavProducts = isSelectedProdFavorite.value
                ? props.favouriteProducts.filter(
                      (p) => p.id !== props.selectedProduct.id
                  )
                : [...props.favouriteProducts, props.selectedProduct];

            emit("update:favouriteProducts", [
                ...newFavProducts.filter(
                    (p) => p.id !== replaceProductId.value
                ),
            ]);
            replaceProductId.value = null;
        });
}
</script>
