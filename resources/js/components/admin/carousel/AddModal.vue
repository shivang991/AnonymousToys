<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <form class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8 w-80">
                <BaseImageInput
                    :is-invalid="invalidFields.has('image')"
                    v-model="fields.image"
                    class="w-full h-40 object-cover"
                    label="Imagen"
                ></BaseImageInput>
                <BaseTextField
                    :is-invalid="invalidFields.has('description')"
                    v-model="fields.description"
                    label="Descripcion"
                    is-text-area
                ></BaseTextField>
            </div>
            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Create </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";

defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:shouldShow", "item-added"]);

const fields = reactive({
    image: null,
    description: "",
});

const invalidFields = reactive(new Set());

const isLoading = ref(false);

const axios = useAxios();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields required
    Object.entries(fields).forEach(
        ([key, val]) => val || invalidFields.add(key)
    );
    if (invalidFields.size) return;

    isLoading.value = true;
    axios
        .postMultipart("/api/carousel/create", fields)
        .then((response) => {
            if (response.data.message === "success") {
                fields.image = null;
                fields.description = "";
                emit("update:shouldShow", false);
                emit("item-added");
                fireNotification(NotificationTypes.CAROUSEL_IMAGE_CREATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isLoading.value = false));
}
</script>
