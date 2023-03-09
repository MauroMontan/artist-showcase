<script lang="ts" setup></script>

<template>
    <article id="contacto" class="contact">
        <div class="contact-card">
            <div class="title">
                <h1>¿Interesado en unirte al equipo?</h1>
                <p>
                    Mandame tu reel, portafolio o platicame tu idea al siguiente
                    correo.
                </p>
            </div>

            <a
                href="mailto: solamentevagotrabajo@gmail.com"
                class="material-symbols-outlined"
            >
                mail
            </a>
            <i>solamentevagotrabajo@gmail.com</i>
        </div>
    </article>
</template>

<style scoped>
.contact {
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 50%;
}
.contact .contact-card .title h1 {
    font-size: 1.5rem;
}
.contact .contact-card .title {
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
}

.contact .contact-card p {
    color: lightslategray;
}

.contact-card {
    padding: 3.5rem;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    height: 25rem;
    width: fit-content;
    border-radius: 1rem;
}
.contact-card a {
    text-decoration: none;
    color: black;
    background-color: rgb(119, 136, 153, 0.2);
    display: flex;
    padding: 1rem;
    user-select: none;
    border-radius: 0.5rem;
    font-size: 5rem;
    transition: all ease 0.5s;
}

.contact-card a:active {
    transform: scale(90%);
}
.contact-card i {
    font-weight: bolder;
    font-style: normal;
}

@media (max-width: 768px) {
    .contact {
        width: 100%;
        padding: 1rem;
    }
    .contact-card {
        width: 100%;
        padding: 1rem;
        gap: 1rem;
        text-align: center;
        justify-content: space-around;
    }
}
</style>
