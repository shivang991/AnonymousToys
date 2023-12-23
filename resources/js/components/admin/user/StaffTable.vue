<template>
    <div v-if="data">
        <h5 class="text-xl text-slate-900 text-left mx-12">Empleados:</h5>
        <div class="flex justify-end mb-4 space-x-4 px-12">
            <button
                class="rounded-md shadow-lg px-4 py-2 text-slate-500"
                @click="shouldShowAddModal = true"
            >
                Crear <FontAwesomeIcon icon="fa fa-plus"></FontAwesomeIcon>
            </button>
            <button
                class="rounded-md shadow-lg px-4 py-2 text-amber-500 disabled:opacity-50"
                :disabled="selectedStaff === null"
                @click="shouldShowEditModal = true"
            >
                Modificar <FontAwesomeIcon icon="fa fa-pen"></FontAwesomeIcon>
            </button>
            <button
                class="rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50"
                :disabled="selectedStaff === null"
                @click="shouldShowRemoveModal = true"
            >
                Eliminar
                <FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon>
            </button>
        </div>
        <div class="grid">
            <div class="col-start-1 row-start-1 h-16 bg-slate-200"></div>
            <table class="mx-12 col-start-1 row-start-1">
                <tr class="text-slate-900 h-16 px-12">
                    <th></th>
                    <th class="text-left px-4">Nombre</th>
                    <th class="text-left px-4">Correo</th>
                    <th class="text-left px-4">Fecha de Creación</th>
                </tr>
                <tr
                    v-for="(staff, index) in data"
                    :key="index"
                    class="hover:bg-slate-100 cursor-pointer border-b"
                    :class="
                        selectedStaff === staff
                            ? 'border-transparent bg-slate-100 shadow rounded'
                            : 'border-amber-500'
                    "
                    @click="selectedStaff = staff"
                >
                    <td class="px-4 py-2">
                        <p
                            class="text-slate-500 leading-10 w-10 text-center"
                            v-if="selectedStaff === staff"
                        >
                            <FontAwesomeIcon
                                icon="fa fa-check-square"
                            ></FontAwesomeIcon>
                        </p>
                        <div
                            v-else
                            class="rounded-full shadow overflow-hidden w-10 h-10"
                        >
                            <BaseImage
                                v-if="staff.profile_image_url"
                                :src="staff.profile_image_url"
                                is-external
                                class="block object-cover"
                            ></BaseImage>
                            <BaseImage
                                v-else
                                src="/user.jpg"
                                class="block"
                            ></BaseImage>
                        </div>
                    </td>
                    <td class="px-4 py-2">{{ staff.name }}</td>
                    <td class="px-4 py-2">{{ staff.email }}</td>
                    <td class="px-4 py-2">
                        {{ formatDate(staff.created_at) }}
                    </td>
                </tr>
            </table>
        </div>
        <AddStaffModal
            @success="emit('update')"
            v-model:should-show="shouldShowAddModal"
        ></AddStaffModal>
        <RemoveStaffModal
            @success="emit('update')"
            v-model:should-show="shouldShowRemoveModal"
            :staff="selectedStaff"
        ></RemoveStaffModal>
        <EditStaffModal
            @success="emit('update')"
            v-model:should-show="shouldShowEditModal"
            :staff="selectedStaff"
        ></EditStaffModal>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import AddStaffModal from "./AddStaffModal.vue";
import RemoveStaffModal from "./RemoveStaffModal.vue";
import EditStaffModal from "./EditStaffModal.vue";
import { formatDate } from "@/plugins/Formatters";

defineProps({
    data: {
        type: Array, // {id,name,email,profile_image_url,created_at}[]
        default: null,
    },
});

const emit = defineEmits(["update"]);

const selectedStaff = ref(null); // {id,name,email,profile_image_url,created_at}

const shouldShowAddModal = ref(false);
const shouldShowRemoveModal = ref(false);
const shouldShowEditModal = ref(false);

watch(
    [shouldShowAddModal, shouldShowRemoveModal, shouldShowEditModal],
    (newVal) => {
        if (newVal.some((e) => e)) scrollTo({ top: 0, behavior: "smooth" });
    }
);
</script>
