<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="py-8 flex justify-center w-80" v-if="isFetchingStaffAccess">
            <div
                class="w-8 h-8 border-4 border-amber-500 border-b-transparent rounded-full animate-spin"
            ></div>
        </div>
        <form class="px-4 pb-8" @submit.prevent="handleSubmit" v-else>
            <div class="space-y-8">
                <div>
                    <BaseImageInput
                        :default-src="profileImgUrl"
                        v-model="fields.image"
                        class="w-40 h-40 object-cover rounded-full shadow mx-auto"
                        label="Imagen de Perfil"
                    ></BaseImageInput>
                    <button
                        @click="deletingProfileImage"
                        v-if="profileImgUrl"
                        type="button"
                        class="mt-2 py-1 px-2 border border-amber-500 rounded-md text-amber-500"
                    >
                        <span
                            class="w-4 block h-4 border-2 my-1 border-b-transparent border-amber-500 animate-spin rounded-full"
                            v-if="isDeletingProfileImage"
                        >
                        </span>
                        <span v-else> Quita la imagen </span>
                    </button>
                </div>
                <BaseTextField
                    v-model="fields.name"
                    label="Nombre"
                    :min="4"
                    :max="24"
                    :is-invalid="invalidFields.has('name')"
                ></BaseTextField>
                <div>
                    <p class="mb-2 text-slate-500">Access:</p>
                    <div class="grid grid-cols-2 gap-x-4">
                        <div
                            class="flex space-x-2 items-center"
                            v-for="(permissionKey, index) in staffAccessOptions"
                            :key="index"
                        >
                            <input
                                type="checkbox"
                                v-model="accessInput"
                                :value="permissionKey"
                                class="accent-amber-500"
                            />
                            <p class="capitalize">{{ permissionKey }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                class="bg-amber-500 py-2 mt-8 text-white rounded-md w-full"
                :disabled="isSubimitting"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isSubimitting"
                >
                </span>
                <span v-else> Actualizar </span>
            </button>
        </form>
    </base-modal>
</template>

<script setup>
import BaseTextField from "@/components/global/BaseTextField.vue";
import BaseImageInput from "@/components/global/BaseImageInput.vue";
import BaseModal from "@/components/global/BaseModal.vue";
import { reactive, ref, watch } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { staffAccessOptions } from "@/store/auth";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    staff: {
        type: Object, // {name,id,email,profile_image_url}
        default: null,
    },
});
const emit = defineEmits(["update:shouldShow", "success"]);

const fields = reactive({
    name: "",
    image: null,
});

const profileImgUrl = ref(null);
const isDeletingProfileImage = ref(false);
const accessInput = ref(new Set());
const invalidFields = reactive(new Set());
const isSubimitting = ref(false);
const isFetchingStaffAccess = ref(false);
const axios = useAxios();

watch(
    () => props.shouldShow,
    (newVal) => {
        const currentStaff = props.staff;
        if (newVal && currentStaff) {
            fields.name = currentStaff.name;
            fields.image = null;
            profileImgUrl.value = currentStaff.profile_image_url;
            isFetchingStaffAccess.value = true;
            accessInput.value.clear();
            axios
                .authGet(`/api/user/staff/${currentStaff.id}`)
                .then((response) => {
                    if (response.data) {
                        Object.entries(response.data).forEach(
                            ([key, value]) => {
                                if (value && staffAccessOptions.includes(key))
                                    accessInput.value.add(key);
                            }
                        );
                        isFetchingStaffAccess.value = false;
                    }
                });
        }
    }
);

function deletingProfileImage() {
    if (!isDeletingProfileImage.value) {
        isDeletingProfileImage.value = true;
        axios
            .authDelete(`/api/user/staff/image/${props.staff.id}`)
            .then((response) => {
                if (response.data.message === "success") {
                    isDeletingProfileImage.value = false;
                    profileImgUrl.value = null;
                }
            });
    }
}

function handleSubmit() {
    invalidFields.clear();
    // Validation: name required
    if (!fields.name) invalidFields.add("name");

    if (invalidFields.size) return;

    isSubimitting.value = true;
    axios
        .postMultipart(`/api/user/staff/update/${props.staff.id}`, {
            name: fields.name,
            image: fields.image,
            ...Object.fromEntries(
                staffAccessOptions.map((v) => [
                    v,
                    Number(accessInput.value.has(v)),
                ])
            ),
        })
        .then((response) => {
            if (response.data.message === "success") {
                emit("update:shouldShow", false);
                emit("success");
                fireNotification(NotificationTypes.STAFF_UPDATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isSubimitting.value = false));
}
</script>
