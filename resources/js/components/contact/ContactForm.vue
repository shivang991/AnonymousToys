<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col items-end">
        <div class="space-y-8 w-full">
            <base-text-field
                v-model="fields.name"
                label="Su nombre"
                :is-invalid="invalidFields.has('name')"
            />
            <base-text-field
                type="email"
                v-model="fields.email"
                label="Correo electronico"
                :is-invalid="invalidFields.has('email')"
            />
            <base-text-field
                v-model="fields.subject"
                label="Asunto"
                :is-invalid="invalidFields.has('subject')"
            />
            <base-text-field
                v-model="fields.message"
                label="Mensaje"
                is-text-area
                :is-invalid="invalidFields.has('message')"
            />
        </div>
        <button
            class="bg-amber-500 px-8 py-2 text-white rounded-md mt-8"
            type="submit"
            :disabled="isSubmitting"
        >
            <span
                class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                v-if="isSubmitting"
            >
            </span>
            <span v-else> Enviar mensaje </span>
        </button>
    </form>
</template>

<script setup>
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { reactive, ref } from "vue";
import BaseTextField from "../global/BaseTextField.vue";

const fields = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const invalidFields = ref(new Set([]));
const isSubmitting = ref(false);
const axios = useAxios();

function handleSubmit() {
    invalidFields.value.clear();
    // Validation: all fields required
    Object.entries(fields).forEach(([field, value]) => {
        if (!value) invalidFields.value.add(field);
    });
    if (invalidFields.value.size) return;

    isSubmitting.value = true;

    axios.post("/api/contact/create", fields).then((response) => {
        if (response.data.message === "success") {
            fields.message = "";
            fields.subject = "";
            fireNotification(NotificationTypes.CONTACT_MESSAGE_ADDED);
            isSubmitting.value = false;
        }
    });
}
</script>
