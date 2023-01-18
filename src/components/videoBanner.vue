<script lang='ts' setup >
import videoUrl from "../assets/Autoheart - Time Machine (Official Music Video).mp4";
</script>

<template>
      <article class="video-banner">
        <video  role="presentation"  loop autoplay muted>
        <source :src="videoUrl">
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