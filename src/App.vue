<script lang='ts' setup >
import ArtistCollection from './components/artistCollection.vue';
import Appbar from './components/appbar.vue';
import VideoBanner from './components/videoBanner.vue';
import Dialog from './components/dialog.vue';
import ImageViewer from './components/imageViewer.vue';
import { useUi } from './store';

const uiStore = useUi();

const {setcurrentImage, toggleDialog} = uiStore;

const {artists} = uiStore;

</script>

<template>
      <Dialog v-if="uiStore.isDialogOpened" @close-overlay="toggleDialog" >
                    <ImageViewer :imageUrl="uiStore.imageUrl"></ImageViewer>
                </Dialog>
    <Appbar></Appbar>

    <VideoBanner></VideoBanner>
    
    <ArtistCollection v-for="artist in artists" :artist="artist" ></ArtistCollection>
</template>

<style scopeed>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

html {
    color-scheme: light;
    scroll-behavior: smooth;
}



* {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


#app {
    width: 100%;
    display: flex;
    flex-direction: column;
}


</style>