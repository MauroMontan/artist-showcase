<script lang='ts' setup >


interface Props {
    imageUrl: string;
}

const { imageUrl } = defineProps<Props>();
</script>

<template>
    <article class="image-viewer">
        <img :src="imageUrl" :alt="imageUrl">
    </article>
</template>

<style scoped>
.image-viewer {
    height: 35rem;
    margin: auto;
    width: fit-content;
    position: relative;
    height:80vh;
    background-color: black;
    border-radius: 1rem;
}

.image-viewer img {
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
    object-position: center;
    user-select: none;
    -webkit-user-drag: none;
}

@media (max-width:768px) {
    .image-viewer {
        margin:auto;
        width:90%;
        height:70%;
    }
    .image-viewer img{
        object-fit:scale-down;
    }
    
}
</style>