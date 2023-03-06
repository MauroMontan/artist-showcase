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
        <ArtistProfile :name="name" :networks="networks" ></ArtistProfile>
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
    border-radius:0.5rem;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 10px 36px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
    gap: 0.2rem;
    padding: 0.5rem;
    margin: auto;
    width: 90%;
    height:fit-content;

}

@media (max-width:768px) {
    .artist-collection {
        width: 100%;
    }
}
</style>