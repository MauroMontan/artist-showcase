<script lang="ts" setup></script>

<template>
    <article id="about" class="about">
        <h1>¿Quienes somos?</h1>
        <p>
            Somos una casa hecha por y para artistas, nos reunimos para
            desarrollar proyectos independientes donde cualquiera puede proponer
            y dirigir un proyecto en conjunto de un grupo de talentosos
            artistas.
        </p>
    </article>
</template>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 0.5rem;
    margin: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.about h1 {
    font-size: 2rem;
}
.about p {
    padding: 1rem;
    font-size: x-large;
    line-height: 2;
}

@media (max-width: 768px) {
    .about {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: auto;
        width: 90%;
    }

    .about h1 {
        font-size: 2rem;
    }
    .about p {
        font-size: larger;
        padding-inline: 1rem;
        word-break: break-all;
        line-height: 2;
    }
}
</style>
