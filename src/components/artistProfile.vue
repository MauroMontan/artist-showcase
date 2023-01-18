<script lang='ts' setup >
interface Props{
    name:string
}

const {name} = defineProps<Props>();

</script>

<template>
    <article class="artist-profile">
        <div>
            <h1>{{ name }}</h1>
        </div>
    </article>
</template>

<style scoped>
.artist-profile {
    padding: 1rem;
    display: flex;
    gap: 1rem;
}
.artist-profile h1{
    font-size: 1.5rem;
}
</style>