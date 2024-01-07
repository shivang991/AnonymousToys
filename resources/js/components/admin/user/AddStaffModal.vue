<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <form class="px-4 pb-8" @submit.prevent="handleSubmit">
            <div class="space-y-8">
                <BaseImageInput
                    :is-invalid="invalidFields.has('image')"
                    v-model="fields.image"
                    class="w-40 h-40 object-cover rounded-full shadow mx-auto"
                    label="Imagen de Perfil"
                ></BaseImageInput>
                <div class="flex space-x-4">
                    <BaseTextField
                        v-model="fields.name"
                        label="Nombre"
                        :min="4"
                        :max="24"
                        :is-invalid="invalidFields.has('name')"
                    ></BaseTextField>
                    <BaseTextField
                        :is-invalid="invalidFields.has('email')"
                        v-model="fields.email"
                        label="Correo"
                    ></BaseTextField>
                </div>
                <div class="flex space-x-4">
                    <BaseTextField
                        :is-invalid="invalidFields.has('password')"
                        v-model="fields.password"
                        type="password"
                        :min="6"
                        label="Contraseña"
                    ></BaseTextField>
                    <BaseTextField
                        :is-invalid="invalidFields.has('passwordConfirm')"
                        v-model="fields.passwordConfirm"
                        type="password"
                        label="Confirmar contraseña"
                    ></BaseTextField>
                </div>
                <div>
                    <p class="mb-2 text-slate-500">Acceso a modulos:</p>
                    <div class="grid grid-cols-2 gap-x-4">
                        <div
                            class="flex space-x-2 items-center"
                            v-for="(label, option) in staffAccessOptionLabels"
                            :key="option"
                        >
                            <input
                                type="checkbox"
                                v-model="accessInput"
                                :value="option"
                                class="accent-amber-500"
                            />
                            <p class="capitalize">{{ label }}</p>
                        </div>
                    </div>
                </div>
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
                <span v-else> Crear </span>
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
import { staffAccessOptions } from "@/store/auth";

// map staffAccessOptions to corresponding spanish labels
const staffAccessOptionLabels = {
    carouselManager: "Gestor del Carrusel de Imagenes",
    productManager: "Gestor de Productos",
    customerServiceManager: "Modulo de atención a clientes",
    postCreator: "Creador de Posts",
};

defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});

const fields = reactive({
    name: "",
    password: "",
    passwordConfirm: "",
    email: "",
    image: null,
});

const accessInput = ref(new Set());

const invalidFields = reactive(new Set());

const isLoading = ref(false);

const axios = useAxios();

function handleSubmit() {
    invalidFields.clear();
    // Validation: All fields except image required
    Object.entries(fields).forEach(([key, val]) => {
        if (key === "image") return;
        if (!val) invalidFields.add(key);
    });
    // Validation: Email should be valid
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) invalidFields.add("email");

    // Validation: passwordConfirm should match password
    if (fields.password !== fields.passwordConfirm)
        invalidFields.add("passwordConfirm");
    if (invalidFields.size) return;

    isLoading.value = true;
    axios
        .postMultipart("/api/user/staff/create", {
            name: fields.name,
            email: fields.email,
            image: fields.image,
            password: fields.password,
            ...Object.fromEntries(
                staffAccessOptions.map((v) => [
                    v,
                    Number(accessInput.value.has(v)),
                ])
            ),
        })
        .then((response) => {
            if (response.data.message === "success") {
                fields.image = null;
                fields.name = "";
                fields.email = "";
                fields.password = "";
                fields.passwordConfirm = "";
                accessInput.value = [];
                emit("update:shouldShow", false);
                emit("success");
                fireNotification(NotificationTypes.STAFF_CREATED);
            }
        })
        .catch((error) => {
            if (error.response.status === 422)
                fireNotification(NotificationTypes.USER_EXISTS);
            else fireNotification(NotificationTypes.GENERAL_ERROR);
            console.log(error.response);
        })
        .finally(() => (isLoading.value = false));
}

const emit = defineEmits(["update:shouldShow", "success"]);
</script>
