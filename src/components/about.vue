<script lang="ts" setup>

</script>

<template>
    <article id="about" class="about">

        <p>
        <h1>¿Quienes somos?</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ex eligendi nobis temporibus perferendis
        culpa distinctio sed atque ipsam, soluta deleniti tenetur, maiores similique aliquam dicta iusto. Aspernatur, ipsum
        quos.
        </p>

        <img src="https://plus.unsplash.com/premium_photo-1684923604860-64e661f2ff72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYXRyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="Casa Nomada logo">
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
    justify-content: space-around;

}

.about p h1 {
    font-size: 2rem;
    width: max-content;
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
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 0.5rem;
}

@media (max-width: 768px) {
    .about {
        display: flex;
        gap: 0.5rem;
        padding: 1rem;
        margin: auto;
        align-items: center;
        width: 90%;
    }

    img {
        display: none;
    }

    .about p {
        width: 100%;
        font-size-adjust: 0.4;
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
