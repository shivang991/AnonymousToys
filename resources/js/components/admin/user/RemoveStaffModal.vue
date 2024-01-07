<template>
    <base-modal
        :shouldShow="shouldShow"
        @close="emit('update:shouldShow', false)"
    >
        <div class="px-4 pb-8 max-w-xs">
            <div class="text-slate-900 mb-8 text-center">
                <p>¿Estás seguro de que deseas eliminar el personal</p>
                <p class="font-semibold">"{{ staff?.name }}" ?</p>
            </div>
            <button
                @click="handleConfirmed"
                class="bg-amber-500 py-2 text-white rounded-md w-full"
                :disabled="isLoading"
                type="submit"
            >
                <span
                    class="h-4 block w-4 border-2 my-1 rounded-full border-b-transparent border-white animate-spin mx-auto"
                    v-if="isLoading"
                >
                </span>
                <span v-else> Si </span>
            </button>
        </div>
    </base-modal>
</template>

<script setup>
import BaseModal from "@/components/global/BaseModal.vue";
import useAxios from "@/plugins/Axios";
import { fireNotification, NotificationTypes } from "@/plugins/Notifications";
import { ref } from "vue";

const props = defineProps({
    shouldShow: {
        type: Boolean,
        default: false,
    },
    staff: {
        type: Object, // {id,name}
        default: null,
    },
});

const emit = defineEmits(["update:shouldShow", "success"]);

const isLoading = ref(false);

const axios = useAxios();

function handleConfirmed() {
    if (props.staff) {
        isLoading.value = true;
        axios
            .authDelete(`/api/user/staff/${props.staff.id}`)
            .then((response) => {
                if (response.data.message === "success") {
                    emit("update:shouldShow", false);
                    emit("success");
                    fireNotification(NotificationTypes.STAFF_DELETED);
                }
            })
            .catch((error) => {
                console.log(error.response);
                fireNotification(NotificationTypes.GENERAL_ERROR);
            })
            .finally(() => (isLoading.value = false));
    }
}
</script>
