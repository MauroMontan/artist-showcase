<script lang="ts" setup>
import { computed } from "vue";
import Card from "../interfaces/card";
import { useUi } from "../store";

interface Props {
    card: Card;
}

const { card } = defineProps<Props>();

const { imageUrl, videoUrl } = card;

const uiStore = useUi();

const openImage = () => {
    uiStore.setcurrentImage(imageUrl);
    uiStore.toggleDialog();
};

const openVideo = () => {
    uiStore.setcurrentVideo(videoUrl!);
    uiStore.toggleVideoDialog();
};

const isVideo = computed(() => {
    return videoUrl != undefined;
});
</script>

<template>
    <article class="card">
        <img placeholder="../assets/favicon.png" decoding="async" loading="lazy" class="card-image" :src="imageUrl"
            alt="placholdercad" />
        <div class="overlay">
            <span v-if="isVideo" @click="openVideo" class="material-symbols-outlined">
                play_circle
            </span>
            <span v-else @click="openImage" class="material-symbols-outlined">
                open_in_full
            </span>
        </div>
    </article>
</template>

<style scoped>
* {
    color: white;
}

.card {
    min-width: 18rem;
    border-radius: 0.7rem;
    display: flex;
    position: relative;
    overflow: hidden;
    user-select: none;

    border: solid 1px rgba(0, 0, 0, 0.1);
    scroll-snap-align: center;
}

.card-image {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
}

span {
    font-size-adjust: 0.6;
}

.overlay {
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.7rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
}

.overlay span {
    font-size: 1.6rem;
}
</style>
