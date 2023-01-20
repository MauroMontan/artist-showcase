<script lang="ts" setup>
import ArtistCollection from "./components/artistCollection.vue";
import Appbar from "./components/appbar.vue";
import VideoBanner from "./components/videoBanner.vue";
import Dialog from "./components/dialog.vue";
import ImageViewer from "./components/imageViewer.vue";
import { useUi } from "./store";
import VideoModal from "./components/video_modal.vue";

const uiStore = useUi();

const { toggleDialog,toggleVideoDialog } = uiStore;

const { artists } = uiStore;
</script>

<template>
    <VideoModal v-if="uiStore.isVideoModalOpened" @toggle-modal="toggleVideoDialog" ></VideoModal>
    <Dialog v-if="uiStore.isDialogOpened" @close-overlay="toggleDialog">
        <ImageViewer :imageUrl="uiStore.imageUrl"></ImageViewer>
    </Dialog>
    <Appbar></Appbar>

    <VideoBanner id="inicio"></VideoBanner>

    <article id="about" class="about">
        <h1>¿Quienes somos?</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eligendi illo maiores quis dolorum eos, corrupti nisi cupiditate
            voluptate accusamus. Repellendus expedita facilis temporibus
            repellat minima quaerat inventore nisi amet.
        </p>
    </article>

    <article id="artistas" class="collections">
        <h2>Titulo para esta seccion</h2>

        <ArtistCollection
            v-for="artist in artists"
            :artist="artist"
        ></ArtistCollection>
    </article>
</template>

<style scopeed>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html {
    color-scheme: light;
    scroll-behavior: smooth;
}

.material-icons {
    transition: opacity 0.9s;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
}

@font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-display: swap;
}

#app {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.about {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: auto;
    width: 90%;
}

.about h1 {
    font-size: 2rem;
}
.about p {
    padding: 2rem;
    font-size: x-large;
    line-height: 2;
}

.collections {
    font-size: 2rem;
}

.collections h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-left: 5rem;
}

@media (max-width: 768px) {
    .collections h2 {
        font-size: 1.6rem;
        margin-left: 1rem;
    }

    .about {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: auto;
        width: 90%;
    }

    .about h1 {
        font-size: 2rem;
        text-align: center;
    }
    .about p {
        font-size: larger;
        padding: 0;
        line-height: 1.5;
        text-align: center;
    }
}
</style>
