<script lang='ts' setup >
import Grid from './grid.vue';
import CardVue from './card.vue';
import ArtistProfile from './artistProfile.vue';
import Artist from '../interfaces/artist';
import { useUi } from '../store';


interface Props {
    artist: Artist,
}

const { setcurrentImage, dialogState, toggleDialog } = useUi();


const { artist } = defineProps<Props>();

const { artwork, networks, name } = artist;
</script>

<template>

    <div class="artist-collection">
        <ArtistProfile :name="name"></ArtistProfile>
        <Grid>
            <CardVue v-for="art in artwork" :card="art">
            </CardVue>
        </Grid>
    </div>
</template>

<style scoped>
.artist-collection {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: auto;
    width: 90%;
    height:fit-content;
    padding: 1rem;
}

@media (max-width:768px) {
    .artist-collection {
        width: 100%;
    }
}
</style>