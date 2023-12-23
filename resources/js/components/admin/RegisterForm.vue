<template>
    <form @submit.prevent="submitForm">
        <div class="space-y-8">
            <BaseTextField
                :min="4"
                :max="24"
                v-model="fields.name"
                :is-invalid="invalidFields.has('name')"
                label="Nombre"
            ></BaseTextField>
            <BaseTextField
                v-model="fields.email"
                :is-invalid="invalidFields.has('email')"
                label="Correo"
            ></BaseTextField>
            <BaseTextField
                :min="6"
                v-model="fields.password"
                :is-invalid="invalidFields.has('password')"
                label="Contraseña"
                type="password"
            ></BaseTextField>
            <BaseTextField
                v-model="fields.passwordConfirm"
                :is-invalid="invalidFields.has('passwordConfirm')"
                label="Confirmar Contraseña"
                type="password"
            ></BaseTextField>
            <button
                class="w-full py-2 bg-amber-500 text-white rounded-md"
                :disabled="isFormSending"
            >
                <span
                    v-if="isFormSending"
                    class="w-4 mx-auto block h-4 my-1 border-2 border-white border-b-transparent rounded-full animate-spin"
                ></span>
                <span v-else>Crear</span>
            </button>
        </div>
    </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useAxios } from "@/plugins/Axios";
import BaseTextField from "../global/BaseTextField.vue";
import { useStore } from "vuex";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { useRouter } from "vue-router";

const emit = defineEmits(["email-error", "general-error"]);

const store = useStore();
const router = useRouter();

const axios = useAxios();
const isFormSending = ref(false);
const invalidFields = ref(new Set());

const fields = reactive({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
});

async function submitForm() {
    invalidFields.value.clear();
    // Validation: All fields required
    Object.entries(fields).forEach(([key, val]) => {
        if (!val) invalidFields.value.add(key);
    });
    // Validation: Email should be valid
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) invalidFields.value.add("email");
    // Validation: password should match passwordConfirm
    if (fields.password !== fields.passwordConfirm)
        invalidFields.value.add("passwordConfirm");
    if (invalidFields.value.size) return;

    isFormSending.value = true;
    try {
        const response = await axios.authPost("/api/user/admin/register", {
            name: fields.name,
            email: fields.email,
            password: fields.password,
        });
        if (response.data.message === "success") {
            store.commit("auth/SET_PROFILE", {
                accessToken: response.data.token,
                profile: response.data.profile,
            });
            fireNotification(NotificationTypes.ADMIN_REGISTERED);
            isFormSending.value = false;
            router.push({ name: "AdminDashboard" });
        }
    } catch (error) {
        console.log(error.response);
        if (error.response.status === 422) {
            emit("email-error");
        } else emit("general-error");
        isFormSending.value = false;
    }
}
</script>
