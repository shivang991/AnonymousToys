import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/admin",
        meta: { isLayoutDisabled: true, requiredAdminAuth: true },
        component: () => import("../views/AdminLayaout.vue"),
        children: [
            {
                path: "",
                name: "AdminDashboard",
                component: () => import("../views/Admin/Dashboard.vue"),
            },
            {
                path: "product",
                name: "ProductManager",
                component: () => import("../views/Admin/ProductManager.vue"),
            },
            {
                path: "carousel",
                name: "CarouselManager",
                component: () => import("../views/Admin/CarouselManager.vue"),
            },
            {
                path: "post",
                name: "PostCreator",
                component: () => import("../views/Admin/PostCreator.vue"),
            },
            {
                path: "service",
                name: "CustomerServiceManager",
                component: () =>
                    import("../views/Admin/CustomerServiceManager.vue"),
            },
            {
                path: "user",
                name: "UserManager",
                component: () => import("../views/Admin/UserManager.vue"),
            },
            {
                path: "register",
                name: "AdminRegister",
                component: () => import("../views/Admin/AdminRegister.vue"),
            },
        ],
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path:'/post/:id',
        name: 'PostDetail',
        component: () => import('../views/PostDetail.vue')
    },
    {
        path: "/contact",
        name: "Contacto",
        component: () => import("../views/Contact.vue"),
    },
    {
        path: "/login",
        name: "AdminLogin",
        component: () => import("../views/Admin/Login.vue"),
        meta: { isLayoutDisabled: true },
    },

    {
        path: "/products",
        name: "Productos",
        component: () => import("../views/Products.vue"),
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: () => import("../views/ProductDetail.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
    },
    {
        path: "/request-checkout",
        name: "RequestCheckout",
        component: () => import("../views/RequestCheckout.vue"),
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
        meta: { isLayoutDisabled: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
        meta: { isLayoutDisabled: true },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// Proteccion de rutas
router.beforeEach(async (to) => {
    if (!store.state.auth.isReady)
        await new Promise((r) => window.addEventListener("authready", r));

    const isAdmin = store.getters["auth/isLoggedIn"];

    if (!isAdmin && to.matched.some((route) => route.meta.requiredAdminAuth))
        return { name: "AdminLogin" };
});

export default router;
