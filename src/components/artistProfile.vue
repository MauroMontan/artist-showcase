<script lang='ts' setup >
import fbLogo from '../assets/facebook_logo.svg';
import IgLogo from '../assets/instagram_logo.svg';
import YtLogo from '../assets/youtube.svg';
interface Props {
    name: string
}

const { name } = defineProps<Props>();

</script>

<template>
    <div class="artist-profile">
        <h1>{{ name }}</h1>
        <ul class="networks">
            <li>
                <a href="#">
                    <img :src="fbLogo" alt="fbLogo">
                </a>
            </li>
            <li>
                <a href="#">
                    <img :src="IgLogo" alt="IgLogo"> 
                </a>
            </li>
            <li>
                <a href="#"><img :src="YtLogo" alt="YtLogo"></a>
                
            </li>
        </ul>
    </div>
</template>

<style scoped>
.artist-profile {
    display: flex;
    padding: 0.6rem;
    align-items: center;
    min-height: fit-content;
    gap: 1rem;
    justify-content: space-between;
}

.artist-profile .networks {
    display: flex;
    gap: 1rem;
}
.artist-profile .networks  li{
    list-style-type: none;
}

.artist-profile .networks li a img {
    height: 2rem;
    width: 2rem;
}

.artist-profile h1 {
    font-size: 1.5rem;
}

@media (max-width:768px) {
    .artist-profile h1{
        font-size: 1.2rem;
    }
    .artist-profile .networks li a img{
        height: 1.5rem;
        width: 1.5rem;
    }
}
</style>