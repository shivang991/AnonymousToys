<template>
    <base-modal
        :should-show="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <form class="w-80 px-4 pb-8" @submit.prevent="handleSubmit">
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
import { computed, reactive, ref, watch } from "vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { useStore } from "vuex";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:shouldShow", "success"]);

const fields = reactive({
    name: "",
    image: null,
});

const profileImgUrl = ref(null);
const isDeletingProfileImage = ref(false);
const invalidFields = reactive(new Set());
const isSubimitting = ref(false);

const store = useStore();
const adminProfile = computed(() => store.state.auth.profile);
const axios = useAxios();

watch(
    () => props.shouldShow,
    (newVal) => {
        if (newVal) {
            fields.name = adminProfile.value.name;
            profileImgUrl.value = adminProfile.value.profile_image_url;
            fields.image = null;
        }
    }
);

function deletingProfileImage() {
    if (!isDeletingProfileImage.value) {
        isDeletingProfileImage.value = true;
        axios.authDelete("/api/user/admin/image").then((response) => {
            if (response.data.message === "success") {
                store.commit("auth/SET_PROFILE", {
                    profile: response.data.profile,
                });
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
        .postMultipart("/api/user/admin/update/", {
            name: fields.name,
            image: fields.image,
        })
        .then((response) => {
            if (response.data.message === "success") {
                store.commit("auth/SET_PROFILE", {
                    profile: response.data.profile,
                });
                emit("update:shouldShow", false);
                emit("success");
                fireNotification(NotificationTypes.ADMIN_UPDATED);
            }
        })
        .catch((error) => {
            console.log(error.response);
            fireNotification(NotificationTypes.GENERAL_ERROR);
        })
        .finally(() => (isSubimitting.value = false));
}
</script>
