<template>
    <div
        ref="inputAreaEl"
        contenteditable
        class="md px-4 py-2 outline-none overflow-y-auto focus:ring ring-amber-500"
        @blur="updateMarkdown"
        @input="handleInput"
    ></div>
</template>

<script setup>
import { ref } from "vue";
import TurndownService from "turndown";

const emit = defineEmits(["update"]); // data: {imgIds,content}

// didContentChange variable allows us to update the md (which happens on blur event)
// only when there is a real change
// Its just a simulation of the "change" event for a contenteditable div
let didContentChange = false;

// Set it (didContentChange) to true in following two cases:
// 1. User inputs some text or formats it
// 2. User inserts an image
const handleInput = () => (didContentChange = true);
function insertImage(imgEl) {
    if (inputAreaEl.value) {
        didContentChange = true;
        inputAreaEl.value.appendChild(imgEl);
        updateMarkdown();
    }
}
function clear() {
    if (inputAreaEl.value) {
        inputAreaEl.value.innerHTML = "";
        emit("update", {
            content: "",
            imgIds: [],
        });
    }
}

// The parent component is responsible for calling inserImage (refer to BodyInput.vue)
defineExpose({ insertImage, clear });

const inputAreaEl = ref();

function updateMarkdown() {
    if (didContentChange) {
        didContentChange = false;
        if (inputAreaEl.value) {
            const service = new TurndownService({
                emDelimiter: "_",
                linkStyle: "inlined",
                headingStyle: "atx",
            });

            let currentImgIndex = -1;
            service.addRule("", {
                filter: "img",
                replacement: function () {
                    currentImgIndex++;
                    return `![]($image_${currentImgIndex})`;
                },
            });
            const imgEls = Array.from(
                inputAreaEl.value.getElementsByTagName("img")
            );

            emit("update", {
                content: service.turndown(inputAreaEl.value),
                imgIds: imgEls.map((i) => i.id),
            });
        }
    }
}
</script>
