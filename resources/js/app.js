/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
    .use(store)
    .use(router)
    .mount("#app");

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faRightFromBracket,
    faPlus,
    faPen,
    faChevronDown,
    faArrowRight,
    faEnvelope,
    faHeadset,
    faMoneyCheckDollar,
    faUpload,
    faFaceSmile,
    faStar,
    faExclamationTriangle,
    faShoppingCart,
    faBars,
    faTimes,
    faChevronRight,
    faPhone,
    faMapLocation,
    faCheck,
    faCheckSquare,
    faMinus,
    faCartShopping,
    faTrash,
    faExpand,
    faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faStar as faStarOutlined } from "@fortawesome/free-regular-svg-icons";

library.add(
    faTrash,
    faCartShopping,
    faPlus,
    faMinus,
    faCheck,
    faCheckSquare,
    faRightFromBracket,
    faChevronDown,
    faChevronRight,
    faArrowRight,
    faEnvelope,
    faHeadset,
    faMoneyCheckDollar,
    faFaceSmile,
    faInstagram,
    faFacebook,
    faStar,
    faExclamationTriangle,
    faShoppingCart,
    faBars,
    faTimes,
    faPhone,
    faMapLocation,
    faPlus,
    faPen,
    faUpload,
    faExpand,
    faQuoteLeft,
    faStarOutlined
);
