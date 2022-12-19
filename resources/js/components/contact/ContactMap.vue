<template>
    <div class="border-y-4 bg-slate-900 grid grid-cols-2 py-2 gap-x-2 px-12">
        <h2
            class="col-span-2 text-slate-200 text-2xl font-semibold py-4"
        >
            Nuestras Tiendas
        </h2>
        <div class="w-full">
            <p class="text-slate-200 py-2">
                Tienda principal: Mercado del sonora pasillo 6 local 147
            </p>
            <div ref="mapFirst" class="h-96 rounded-md"></div>
        </div>
        <div>
            <p class="text-slate-200 py-2">
                Tienda secundaria: Gutemberg 29 colonia centro Cuernavaca
                morelos
            </p>
            <div ref="mapSec" class="h-96 rounded-md"></div>
        </div>
    </div>
</template>

<script setup>
import { map, tileLayer, marker } from "leaflet";
import "leaflet/dist/leaflet.js";
import { ref, onMounted } from "vue";

const mapFirst = ref(null);
const mapSec = ref(null);

const latLngFirst = [19.42210969370727, -99.12478581914134];
const latLngSec = [18.922872372966772, -99.23184912903508];

function importLeafletCss() {
    const leafletCssId = "leaf";
    if (!document.getElementById(leafletCssId)) {
        const link = document.createElement("link");
        link.href = window.asset("css/leaflet.css");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.id = leafletCssId;
        link.media = "all";
        document.head.appendChild(link);
    }
}

function initMap(el, latLng) {
    const m = map(el).setView(latLng, 13);
    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(m);
    marker(latLng).addTo(m);
}

onMounted(() => {
    importLeafletCss();
    initMap(mapFirst.value, latLngFirst);
    initMap(mapSec.value, latLngSec);
});
</script>
