<script lang="ts" setup>
import Logo from "../assets/favicon.png";
</script>

<template>
    <article id="about" class="about">

        <p>
        <h1>¿Quienes somos?</h1>
        Somos una casa hecha por y para artistas, nos reunimos para
        desarrollar proyectos independientes donde cualquiera puede proponer
        y dirigir un proyecto en conjunto de un grupo de talentosos
        artistas.
        </p>

        <img :src="Logo" alt="Casa Nomada logo">
    </article>
</template>

<style scoped>
.about {
    display: flex;
    border-radius: 1rem;
    width: 90%;
    gap: 0.5rem;
    margin: auto;
    padding: 2rem;
    align-items: center;
    background-color: rgb(173, 215, 230, 0.1);
    justify-content: space-around;

}

.about p h1 {
    font-size: 2rem;
}

.about p {
    padding: 1rem;
    display: flex;
    width: 80%;
    flex-direction: column;
    gap: 1.5rem;
    font-size: x-large;
    line-height: 2;
}

img {
    width: 20%;
    height: 20%;
}

@media (max-width: 768px) {
    .about {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        margin: auto;
        width: 95%;
    }

    .about p h1 {
        font-size: 2rem;
    }

    .about p {
        font-size: larger;
        padding-inline: 0rem;
        word-break: break-all;
        line-height: 2;
    }
}
</style>
