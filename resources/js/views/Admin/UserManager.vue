<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <div class="mb-12 px-12">
            <h4 class="font-semibold mb-8 text-2xl">
                Administrador de Usuarios
            </h4>
            <div class="mb-12">
                <h5 class="text-slate-900 mb-4 text-xl">
                    Iniciaste sesión como:
                </h5>
                <div class="flex space-x-4 items-center">
                    <BaseImage
                        v-if="myProfile.profile_image_url"
                        :src="myProfile.profile_image_url"
                        class="w-16 h-16 rounded-full shadow"
                        is-external
                    ></BaseImage>
                    <BaseImage
                        v-else
                        src="/user.jpg"
                        class="w-16 h-16 rounded-full shadow"
                    ></BaseImage>
                    <div>
                        <p>{{ myProfile.name }}</p>
                        <p class="text-slate-500 mb-2">{{ myProfile.email }}</p>
                        <button
                            class="text-amber-500 hover:underline"
                            @click="shouldShowEditMeModal = true"
                        >
                            Modificar
                        </button>
                    </div>
                </div>
            </div>
            <AdminsTable :data="adminUsers"></AdminsTable>
        </div>
        <StaffTable @update="fetchData" :data="staffUsers"></StaffTable>
        <EditSelfModal
            v-model:shouldShow="shouldShowEditMeModal"
        ></EditSelfModal>
    </div>
</template>

<script setup>
import AdminsTable from "@/components/admin/user/AdminsTable.vue";
import EditSelfModal from "@/components/admin/user/EditSelfModal.vue";
import StaffTable from "@/components/admin/user/StaffTable.vue";
import BaseImage from "@/components/global/BaseImage.vue";
import useAxios from "@/plugins/Axios";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const adminUsers = ref(null);
const staffUsers = ref(null);

const axios = useAxios();

function fetchData() {
    axios.authGet("/api/user/all").then((res) => {
        adminUsers.value = res.data.admins;
        staffUsers.value = res.data.staff;
    });
}
fetchData();

const store = useStore();

const myProfile = computed(() => store.state.auth?.profile);

const shouldShowEditMeModal = ref(false);
</script>
