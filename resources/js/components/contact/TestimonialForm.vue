<template>
    <form @submit.prevent="handleSubmit">
        <div class="space-y-8 w-full">
            <div class="flex space-x-2 justify-center text-2xl">
                <button
                    v-for="i in 5"
                    @click="fields.stars = i"
                    type="button"
                    class="text-amber-500"
                >
                    <FontAwesomeIcon
                        v-if="i > fields.stars"
                        icon="far fa-star"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon v-else icon="fa fa-star"></FontAwesomeIcon>
                </button>
            </div>
            <base-image-input
                v-model="userImage"
                label="Adjunta una foto aquí"
                class="w-40 h-40 object-cover rounded-full shadow mx-auto"
            ></base-image-input>
            <base-text-field
                v-model="fields.name"
                label="Su nombre"
                :is-invalid="invalidFields.has('name')"
            />
            <base-text-field
                v-model="fields.message"
                label="Mensaje"
                is-text-area
                :is-invalid="invalidFields.has('message')"
            />
        </div>
        <button
            class="bg-amber-500 py-2 text-white rounded-md mt-8 w-full"
            type="submit"
            :disabled="isSubmitting"
        >
            <span
                class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                v-if="isSubmitting"
            >
            </span>
            <span v-else> Enviar </span>
        </button>
    </form>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { reactive, ref } from "vue";
import BaseImageInput from "../global/BaseImageInput.vue";
import BaseTextField from "../global/BaseTextField.vue";

const fields = reactive({
    name: "",
    message: "",
    stars: 5,
});
const userImage = ref(null);

const invalidFields = ref(new Set([]));
const isSubmitting = ref(false);
const axios = useAxios();

function handleSubmit() {
    invalidFields.value.clear();
    // Validation: all fields except image required
    Object.entries(fields).forEach(([field, value]) => {
        if (!value) invalidFields.value.add(field);
    });

    if (invalidFields.value.size) return;

    isSubmitting.value = true;

    axios
        .postMultipart("/api/review/create", {
            ...fields,
            ...(userImage.value && { image: userImage.value }),
        })
        .then((response) => {
            if (response.data.message === "success") {
                fields.message = "";
                fields.name = "";
                userImage.value = null;
                fireNotification(NotificationTypes.REVIEW_ADDED);
                isSubmitting.value = false;
            }
        });
}
</script>
