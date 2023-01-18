<script lang='ts' setup >
</script>

<template>
      <article class="video-banner">
        <video poster="./assets/vue.svg" role="presentation"  loop autoplay muted>
        <source src="../assets/Autoheart - Time Machine (Official Music Video).mp4">
    </video>
    </article>
</template>

<style scoped>

.video-banner{
    margin-top: 4rem;
    width:100% ;
    height: 30rem;

}
.video-banner video{
    object-position: center;
    object-fit: cover;
    height: 100%;
    width: 100%;
    aspect-ratio: 16/9;
}

</style>