<script lang='ts' setup >
import { ref, Ref, computed } from 'vue';

const isMenuOpened: Ref<boolean> = ref(false);

const toggleMenu = () => {
    isMenuOpened.value = !isMenuOpened.value;
}

const menuState = computed(() => isMenuOpened.value);

</script>

<template>
    <header class="appbar">
        <a class="logo" href="#">
            Casa Nomada
        </a>
        <nav class="links">
            <ul>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#about"> ¿Quienes somos?</a>
                </li>
                <li>
                    <a href="#artistas">Artistas</a>
                </li>
               
                <li>
                <a href="#contacto">
                    Contacto
                </a>    
                </li>
            </ul>
        </nav>

        <span v-if="!menuState" @click="toggleMenu" class="burger material-symbols-outlined">
            menu
        </span>
        <span v-else @click="toggleMenu" class="burger material-symbols-outlined">
            close
        </span>

    </header>
    <div v-if="menuState" class="mobile-menu">
        <nav class="mobile-links">
            <ul>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#artistas">Artistas</a>
                </li>
                <li>¿Quienes somos?</li>
                <li>Contacto</li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.appbar {
    display: flex;
    background-color:white;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding-inline: 1rem;
    z-index: 20;
}

.mobile-links {
    background-color: white;
    position: fixed;
    right: 0;
    bottom: 1;
    margin-top: 4rem;
    z-index: 30;
    padding: 1rem;
    border-radius: 0 0 0 1rem;
    text-align: end;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
}



.mobile-links ul {
    display: flex;
    gap: 1.3rem;
    flex-direction: column;
}

.mobile-links ul li {
    list-style-type: none;
}

.appbar ul {
    display: flex;
    gap: 1rem;
}

.appbar ul li {
    list-style-type: none;
}

.appbar ul li a,
.mobile-links ul li a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
}

.logo {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
}

.burger {
    display: none;
    user-select: none;
    cursor: pointer;
}

@media (max-width:768px) {
    .links {
        display: none;
    }

    .burger {
        display: flex;
        font-size: 2rem;
    }
}
</style>