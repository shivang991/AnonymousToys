<template>
    <div v-if="messages">
        <h5 class="text-xl text-slate-900 text-left mx-12">
            Correos de Clientes:
        </h5>
        <div v-if="messages.data.length">
            <div class="flex justify-end mb-4 space-x-4 px-12">
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-red-600 disabled:opacity-50"
                    :disabled="selectedMessage === null"
                    @click="shouldShowRemoveModal = true"
                >
                    Remove
                    <FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon>
                </button>
                <button
                    class="rounded-md shadow-lg px-4 py-2 text-slate-500 disabled:opacity-50"
                    :disabled="selectedMessage === null"
                    @click="shouldShowViewModal = true"
                >
                    View <FontAwesomeIcon icon="fa fa-expand"></FontAwesomeIcon>
                </button>
            </div>
            <div class="grid mb-8">
                <div class="col-start-1 row-start-1 h-16 bg-slate-200"></div>
                <table class="mx-12 col-start-1 row-start-1">
                    <tr class="text-slate-900 h-16 px-12">
                        <th>ID</th>
                        <th class="text-left px-4">Name</th>
                        <th class="text-left px-4">Email</th>
                        <th class="text-left px-4">Received on</th>
                        <th class="text-left px-4">Subject</th>
                    </tr>
                    <tr
                        v-for="(msg, index) in messages.data"
                        :key="index"
                        class="hover:bg-slate-100 cursor-pointer border-b"
                        :class="
                            selectedMessage === msg
                                ? 'border-transparent bg-slate-100 shadow rounded'
                                : 'border-amber-500'
                        "
                        @click="selectedMessage = msg"
                    >
                        <td class="w-12 text-center py-2">
                            <FontAwesomeIcon
                                v-if="selectedMessage === msg"
                                class="text-slate-500"
                                icon="fa fa-check-square"
                            ></FontAwesomeIcon>
                            <span v-else class="text-slate-900">{{
                                msg.id
                            }}</span>
                        </td>
                        <td class="px-4 py-2">
                            {{ msg.name }}
                        </td>
                        <td class="px-4 py-2">
                            {{ msg.email }}
                        </td>
                        <td class="px-4 py-2">
                            {{ formatDate(msg.created_at) }}
                        </td>
                        <td class="px-4 py-2">{{ msg.subject }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <p
            v-else
            class="bg-slate-200 py-2 my-4 text-center text-slate-900 rounded-md mx-12"
        >
            No se encontraron mensajes.
        </p>
        <BasePagination
            :pagination-data="messages"
            @refetch-requested="(url) => emit('refetch-requested', url)"
        ></BasePagination>
        <ViewMessageModal
            v-model:should-show="shouldShowViewModal"
            :msg-id="selectedMessage?.id"
        ></ViewMessageModal>
        <RemoveMessageModal
            :msg-id="selectedMessage?.id"
            v-model:should-show="shouldShowRemoveModal"
            @success="handleMsgDeleteSuccess"
        >
        </RemoveMessageModal>
    </div>
</template>

<script setup>
import BasePagination from "@/components/global/BasePagination.vue";
import { formatDate } from "@/plugins/Formatters";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, watch } from "vue";
import RemoveMessageModal from "./RemoveMessageModal.vue";
import ViewMessageModal from "./ViewMessageModal.vue";

defineProps({
    messages: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(["refetch-requested"]);

const selectedMessage = ref(null);

const shouldShowViewModal = ref(false);
const shouldShowRemoveModal = ref(false);

function handleMsgDeleteSuccess() {
    shouldShowRemoveModal.value = false;
    selectedMessage.value = null;
    emit("refetch-requested");
}

watch([shouldShowViewModal, shouldShowRemoveModal], (newVal) => {
    if (newVal.some((e) => e)) scrollTo({ top: 0, behavior: "smooth" });
});
</script>
