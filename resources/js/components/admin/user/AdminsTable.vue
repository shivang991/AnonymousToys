<template>
    <div v-if="data">
        <table class="mb-4">
            <caption class="text-xl text-slate-900 text-left">
                Administradores:
            </caption>
            <tr class="text-slate-900 h-10 px-12">
                <th></th>
                <th class="text-left px-4">Nombre</th>
                <th class="text-left px-4">Correo</th>
                <th class="text-left px-4">Ultimo Inicio de Sesión</th>
            </tr>
            <tr
                v-for="(admin, index) in data"
                :key="index"
                :class="{
                    'bg-slate-100 shadow rounded': myUserId === admin.id,
                }"
            >
                <td class="px-4 py-2">
                    <BaseImage
                        v-if="admin.profile_image_url"
                        :src="admin.profile_image_url"
                        is-external
                        class="w-10 h-10 rounded-full shadow object-cover"
                    ></BaseImage>
                    <BaseImage
                        v-else
                        src="/user.jpg"
                        class="w-10 h-10 rounded-full shadow"
                    ></BaseImage>
                </td>
                <td class="px-4">{{ admin.name }}</td>
                <td class="px-4">{{ admin.email }}</td>
                <td class="px-4">
                    {{ formatDate(admin.created_at) }}
                </td>
            </tr>
        </table>
        <router-link
            :to="{ name: 'AdminRegister' }"
            class="text-amber-500 hover:underline"
        >
            Crear nueva cuenta
        </router-link>
    </div>
</template>

<script setup>
import BaseImage from "@/components/global/BaseImage.vue";
import { formatDate } from "@/plugins/Formatters";
import { computed } from "vue";
import { useStore } from "vuex";

defineProps({
    data: {
        type: Array, // {id,name,email,profile_image_url,created_at}[]
        default: null,
    },
});

const store = useStore();

const myUserId = computed(() => store.state.auth.profile?.id);
</script>
