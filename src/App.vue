<script lang="ts" setup>
import ArtistCollection from "./components/artistCollection.vue";
import Appbar from "./components/appbar.vue";
import VideoBanner from "./components/videoBanner.vue";
import Dialog from "./components/dialog.vue";
import ImageViewer from "./components/imageViewer.vue";
import { useUi } from "./store";
import VideoModal from "./components/video_modal.vue";

const uiStore = useUi();

const { toggleDialog, toggleVideoDialog } = uiStore;

const { artists } = uiStore;
</script>

<template>
    <VideoModal
        v-if="uiStore.isVideoModalOpened"
        @toggle-modal="toggleVideoDialog"
    ></VideoModal>
    <Dialog v-if="uiStore.isDialogOpened" @close-overlay="toggleDialog">
        <ImageViewer :imageUrl="uiStore.imageUrl"></ImageViewer>
    </Dialog>
    <Appbar></Appbar>

    <VideoBanner id="inicio"></VideoBanner>

    <article class="banner">
        <div class="banner-info">
            <h1>Arallia</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                velit recusandae consequuntur, enim officiis vel ullam deserunt,
                officia animi laudantium dolore! Doloribus dolores voluptates
                quisquam! Nobis nemo officiis earum ad. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Explicabo eligendi illo
                maiores quis dolorum eos, corrupti nisi cupiditate
            </p>
        </div>

        <div class="image-container">
            <img
                src="https://cdn.discordapp.com/attachments/888619711758229535/1065800773449044029/WhatsApp_Image_2023-01-12_at_9.03.10_PM.jpeg"
                alt="aralia"
            />
        </div>
    </article>

    <article id="about" class="about">
        <h1>¿Quienes somos?</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eligendi illo maiores quis dolorum eos, corrupti nisi cupiditate
            voluptate accusamus. Repellendus expedita facilis temporibus
            repellat minima quaerat inventore nisi amet. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo
        </p>
    </article>

    <article id="artistas" class="collections">
        <h2>Nuestros Artistas</h2>

        <ArtistCollection
            v-for="artist in artists"
            :artist="artist"
        ></ArtistCollection>
    </article>

    <article class="contact">
        <div class="contact-card">
            <div class="title">
                <h1>Interesado en trabajar con nosotros?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <a href="mailto: abc@example.com" class="material-symbols-outlined">
                mail
            </a>
            <i>email@gmail.com</i>
        </div>
    </article>
    <footer>
        Copyright © 2023 Casa productora Nómada. Todos los derechos reservados.
    </footer>
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

.banner {
    margin: auto;
    padding: 3rem;
    display: flex;
    height: 35rem;
    background-image: linear-gradient(
        to left,
        #1b3460,
        #364c78,
        #506691,
        #6a80aa,
        #859cc4
    );
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

.contact {
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 50%;
}
.contact .contact-card .title h1 {
    font-size: 1.5rem;
}
.contact .contact-card .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-card {
    padding: 3.5rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    height: 25rem;
    width: fit-content;
    border-radius: 1rem;
}
.contact-card a {
    text-decoration: none;
    color: black;
    background-color: rgb(119, 136, 153, 0.2);
    display: flex;
    padding: 1rem;
    user-select: none;
    border-radius: 0.5rem;
    font-size: 5rem;
    transition: all ease 0.5s;
}

.contact-card a:active {
    transform: scale(110%);
}

footer {
    padding: 0.5rem;
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
    .banner {
        height: fit-content;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 3rem;
        background-image: linear-gradient(
            to top,
            #1b3460,
            #364c78,
            #506691,
            #6a80aa,
            #859cc4
        );
    }
    .banner .banner-info {
        width: 100%;
        padding: 0;
        gap: 1rem;
    }
}
</style>
