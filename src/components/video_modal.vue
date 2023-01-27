<script setup lang="ts">
import Dialog from "./dialog.vue";
import { useUi } from "../store";

const uiStore = useUi();
interface Emit {
    (event: "toggle-modal"): void;
}
const emit = defineEmits<Emit>();
</script>

<template>
    <Dialog @close-overlay="emit('toggle-modal')">
        <div class="video-modal">
            <iframe src="https://www.youtube.com/embed/mpaPBCBjSVc"></iframe>
        </div>
    </Dialog>
</template>

<style scoped>
.video-modal {
    margin: auto;
    width: 60%;
    height: 80vh;
    overflow: hidden;
    display: flex;
    border: none;
    outline: none;
}
.video-modal iframe{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 1rem;
}

</style>
