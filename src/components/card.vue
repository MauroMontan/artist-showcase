<script lang='ts' setup >
import { ref, Ref, computed, defineProps } from 'vue'
import Card from '../interfaces/card';
import { useUi } from '../store';

interface Props {
    card: Card;
}

const { card } = defineProps<Props>();

const {  imageUrl } = card;

const uiStore = useUi();

const openImage = ()=>{
    uiStore.setcurrentImage(imageUrl);
    uiStore.toggleDialog();
}

</script>

<template>
 
    <article class="card">
        <img class="card-image" :src="imageUrl" alt="placholdercad">
        <div class="overlay">

            <span @click="openImage" class="material-symbols-outlined">
                open_in_full
            </span>
            <span class="material-symbols-outlined">
                play_circle
            </span>

        </div>
    </article>
</template>

<style scoped >
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
    border: solid 1px rgba(0,0,0,0.1);
}

.card-image {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
}

span {
    font-size: 1.3rem;
}

.overlay {
    position: absolute;
    height: fit-content;
    width: fit-content;
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: 0 0 0 0.5rem;
    display: flex;
    gap: 1rem;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
}

</style>