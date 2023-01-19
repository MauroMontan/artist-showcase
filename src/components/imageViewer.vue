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
        height: fit-content;
        margin: auto;
        width:90%;
    }
}
</style>