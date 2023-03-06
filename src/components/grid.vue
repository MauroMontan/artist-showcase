<script lang='ts' setup >
import { ref, Ref, onMounted } from "vue";

const wrapper: Ref<HTMLElement | null> = ref(null);

const scrollStep: number = 2;


const wheelBeh = () => {
    wrapper.value!.addEventListener("wheel", (event: any) => {
        event.preventDefault();
 
        if ( event.deltaY < 0) {
            wrapper.value!.scrollLeft -= scrollStep;
        }
        if (event.deltaY > 0 ) {
            wrapper.value!.scrollLeft += scrollStep;
        }
    });

}

</script>

<template>
    <article @wheel="wheelBeh" ref="wrapper" class="grid">
        <slot />

    </article>
</template>

<style scoped>
.grid {
    display: flex;
    width: 100%;
    height: 24rem;
    overflow-x:scroll;
    gap: 1rem;
    padding:0.5rem;
}

.grid::-webkit-scrollbar {
    display: none;
}

</style>