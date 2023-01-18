<script lang='ts' setup >

interface Emit {
    (event: "close-overlay"): void
}
const emits = defineEmits<Emit>();

</script>

<template>
    <article @click.self="emits('close-overlay')" class="dialog" role="dialog">
        <slot />
    </article>
</template>

<style scoped>
.dialog {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 50;
    display: flex;
    top:0;
    left: 0;
}
</style>