<script lang='ts' setup >
import { ref, Ref, onMounted } from "vue";

const wrapper: Ref<HTMLElement | null> = ref(null);

const scrollStep: number = 2;



</script>

<template>
    <article class="grid">
        <slot />

    </article>
</template>

<style scoped>
.grid {
    display: flex;
    width: 100%;
    height: 24rem;
    overflow-x: scroll;
    gap: 1rem;
    padding: 0.5rem;
    scroll-snap-type: x mandatory;
}

.grid::-webkit-scrollbar {
    display: none;
}
</style>