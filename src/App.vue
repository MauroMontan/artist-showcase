<script lang="ts" setup>
import About from "./components/about.vue";
import ArtistCollection from "./components/artistCollection.vue";
import Appbar from "./components/appbar.vue";
import VideoBanner from "./components/videoBanner.vue";
import Dialog from "./components/dialog.vue";
import ImageViewer from "./components/imageViewer.vue";
import { useUi } from "./store";
import VideoModal from "./components/video_modal.vue";
import Contact from "./components/contact.vue";

const uiStore = useUi();

const { toggleDialog, toggleVideoDialog } = uiStore;

const { artists } = uiStore;
</script>

<template>
    <VideoModal v-if="uiStore.isVideoModalOpened" @toggle-modal="toggleVideoDialog"></VideoModal>
    <Dialog v-if="uiStore.isDialogOpened" @close-overlay="toggleDialog">
        <ImageViewer :imageUrl="uiStore.imageUrl"></ImageViewer>
    </Dialog>
    <Appbar />

    <VideoBanner id="inicio" />

    <About></About>

    <article id="artistas" class="collections">
        <h2>Nuestros Artistas</h2>

        <ArtistCollection v-for="artist in artists" :artist="artist"></ArtistCollection>
    </article>

    <Contact />

    <footer>
        <p>
            Copyright © 2023 Casa productora Nómada. Todos los derechos
            reservados.
        </p>
        <p class="creator">made by @MauroMontan</p>
    </footer>
</template>

<style scopeed>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html {
    color-scheme: light;
    scroll-behavior: smooth;
}

@font-face {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    src: url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
    font-display: swap;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
}

#app {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.collections {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0.5rem;
    width: 90%;
}

.collections h2 {
    font-size: 2rem;
}

.banner {
    margin: auto;
    padding: 3rem;
    display: flex;
    height: 35rem;
    background-image: linear-gradient(to left,
            #1b3460,
            #364c78,
            #506691,
            #6a80aa,
            #859cc4);
    gap: 5rem;
    color: rgb(8, 19, 36);
}

.banner .image-container {
    display: flex;
    width: 20rem;
    height: 30rem;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.banner .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all ease-out 0.5s;
}

.banner-info {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding-left: 3rem;
    gap: 3.5rem;
}

.banner-info h1 {
    font-size: 4.5em;
}

.banner-info p {
    font-size: larger;
    line-height: 1.9;
    text-align: justify;
    font-weight: bold;
}

footer {
    padding: 1rem;
    display: flex;
    height: 10rem;
    padding-inline: 3rem;
    align-items: end;
    justify-content: space-between;
    color: lightslategray;
}

footer .creator {
    font-weight: bold;
    color: lightgray;
}

@media (max-width: 768px) {
    .collections {
        width: 100%;
    }

    .collections h2 {
        font-size: 1.6rem;
        margin-left: 1rem;
    }

    .banner {
        height: fit-content;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 3rem;
        background-image: linear-gradient(to top,
                #1b3460,
                #364c78,
                #506691,
                #6a80aa,
                #859cc4);
    }

    .banner .banner-info {
        width: 100%;
        padding: 0;
        gap: 1rem;
    }

    footer {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;
        gap: 1rem;
        height: fit-content;
        padding: 1rem;
        padding-inline: 0.5rem;
        font-size: 0.8rem;
    }
}
</style>
