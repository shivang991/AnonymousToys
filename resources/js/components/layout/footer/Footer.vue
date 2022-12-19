<template>
    <FooterHome
        v-if="$route.name === 'Home'"
        :internal-links="internalLinks"
        :social-media-links="socialMediaLinks"
    ></FooterHome>
    <FooterRest
        v-else
        :social-media-links="socialMediaLinks"
        :internal-links="internalLinks"
    ></FooterRest>
</template>

<script setup>
import FooterHome from "./FooterHome.vue";
import FooterRest from "./FooterRest.vue";

const socialMediaLinks = [
    {
        href: "https://www.instagram.com/anonymoustoys10/",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "https://www.facebook.com/profile.php?id=100088318848951&mibextid=LQQJ4d",
        icon: "fa-brands fa-facebook",
    },
];

const internalLinks = [
    { route: "Home", title: "Inicio" },
    { route: "About", title: "Acerca de" },
    { route: "Productos", title: "Productos" },
    { route: "Contacto", title: "Contacto" },
];
</script>
