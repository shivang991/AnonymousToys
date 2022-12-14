<template>
    <div class="mx-auto max-w-xs text-slate-900 text-center mt-8">
        <h1 class="text-6xl font-bold text-center mb-2">404</h1>
        <p class="mb-4">No se pudo encontrar la página</p>
        <router-link class="text-amber-500" :to="{ name: 'Home' }"
            >Vuelve a casa</router-link
        >
    </div>
</template>
