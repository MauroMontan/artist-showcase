<script lang="ts" setup>
import {computed} from "vue";
import fbLogo from "../assets/facebook_logo.svg";
import IgLogo from "../assets/instagram_logo.svg";
import twitterLogo from "../assets/twitter_logo.svg";
import tiktokLogo from "../assets/tiktok_logo.svg";
import defaultLogo from "../assets/link_logo.svg";
import {useUi} from "../store";
import Artist from "../interfaces/artist";
import Network from "../interfaces/network";

const uiStore = useUi();

interface Props {
    name: string,
    networks:Array<Network>
}

const { name,networks } = defineProps<Props>();

const LogoSelector = computed(()=>{

});

</script>

<template>
    <div class="frame">
        <div class="artist-profile">
  
            <h1 class="name-item">{{ name }}</h1>
  
            <ul class="networks">
                <li :title="network.hint"  v-for="network in networks">
                    <a target="_blank" :href="network.url">
                        <img v-if="network.type==='facebook'" :src="fbLogo" alt="fb icon" />
                        <img v-else-if="network.type==='instagram'" :src="IgLogo" alt="instagram icon" />
                        <img v-else-if="network.type==='twitter'" :src="twitterLogo" alt="twitter icon" />
                        <img v-else-if="network.type==='tiktok'" :src="tiktokLogo" alt="tiktok icon" />
                        <img v-else :src="defaultLogo" alt="default link" />
                    </a>
                </li>
           
            </ul>
        </div>
        <p class="about-artist">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            excepturi! Maxime rem consectetur deserunt beatae placeat amet
          </p>
    </div>
</template>

<style scoped>
.frame {
    padding: 1rem;
}
.artist-profile {
    display: flex;
    align-items: center;
    min-height: fit-content;
    gap: 0.5rem;
    justify-content: space-between;
}

.about-artist {
    font-size: 1rem;
    width: 60%;
    display: block;
    max-height:5rem;
    color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
}



.artist-profile .networks {
    display: flex;
    gap: 1rem;
}
.artist-profile .networks li {
    list-style-type: none;
}

.artist-profile .networks li a img {
    height: 2rem;
    width: 2rem;
}



.artist-profile h1 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
    max-width: 60%;
 }


@media (max-width: 768px) {
    .artist-profile h1 {
        font-size: 1.2rem;
    }
    .artist-profile .networks li a img {
        height: 1.5rem;
        width: 1.5rem;
    }
    .artist-profile {
        align-items: flex-start;
    }

    .about-artist {
        width: 100%;
    }
}
</style>
