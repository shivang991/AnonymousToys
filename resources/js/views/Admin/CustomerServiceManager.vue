<template>
    <div class="mt-8 py-8 w-11/12 lg:w-3/4 mx-auto bg-white rounded-md shadow">
        <h4 class="font-semibold text-2xl mb-12 px-12">
            Modulo de atención a clientes
        </h4>
        <OrdersTable
            :orders="orders"
            @refetch-requested="fetchOrders"
        ></OrdersTable>
        <div class="py-4"></div>
        <ContactMessagesTable
            :messages="messages"
            @refetch-requested="fetchMessages"
        ></ContactMessagesTable>
        <div class="py-4"></div>
        <CustomerReviewsTable
            :reviews="reviews"
            @refetch-requested="fetchReviews"
        ></CustomerReviewsTable>
    </div>
</template>

<script setup>
import ContactMessagesTable from "@/components/admin/service/ContactMessagesTable.vue";
import CustomerReviewsTable from "@/components/admin/service/CustomerReviewsTable.vue";
import OrdersTable from "@/components/admin/service/OrdersTable.vue";
import useAxios from "@/plugins/Axios";
import { ref } from "vue";

const orders = ref(null); // Paginated<{id,user_id,created_at,total_price,user:{email,id}}>
const messages = ref(null);
const reviews = ref(null);

const axios = useAxios();

function fetchOrders(url) {
    axios.authGet(url ?? "/api/order/all").then((res) => {
        orders.value = res.data;
    });
}
fetchOrders();

function fetchMessages(url) {
    axios.authGet(url ?? "/api/contact/all").then((res) => {
        messages.value = res.data;
    });
}
fetchMessages();

function fetchReviews(url) {
    axios.authGet(url ?? "/api/review/all").then((res) => {
        reviews.value = res.data;
    });
}
fetchReviews();
</script>
