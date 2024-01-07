<template>
    <div class="py-8 w-11/12 lg:w-3/4 mx-auto">
        <h4 class="font-semibold mb-8 text-2xl">Bienvenido, {{ profile.name }}</h4>
        <AdminDashboard
            v-if="profile && profile.role === 'admin'"
        ></AdminDashboard>
        <StaffDashboard
            v-if="profile && profile.role === 'staff'"
        ></StaffDashboard>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import AdminDashboard from "@/components/admin/dashboard/AdminDashboard.vue";
import StaffDashboard from "@/components/admin/dashboard/StaffDashboard.vue";

const store = useStore();

const profile = computed(() => store.state.auth.profile);
</script>
