<script lang='ts' setup >
import { ref, Ref, computed } from 'vue';
import logo from "../assets/casanomadalogo.png";

const isMenuOpened: Ref<boolean> = ref(false);

const toggleMenu = () => {
    isMenuOpened.value = !isMenuOpened.value;
}

const menuState = computed(() => isMenuOpened.value);

</script>

<template>
    <header class="appbar">
        <h1>Generic gallery</h1>
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
    <div v-show="menuState" class="mobile-menu">
        <nav class="mobile-links">
            <ul>
                <li>
                    <a href="#inicio">Inicio</a>
                </li>
                <li>
                    <a href="#about">¿Quienes somos?</a>
                </li>
                <li>
                    <a href="#artistas">Artistas</a>
                </li>

                <li>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.appbar {
    background-color: #EFF1F5;

    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    max-height: 4rem;
    padding-inline: 7rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    z-index: 30;
}

.mobile-links {
    background-color: #EFF1F5;
    position: fixed;
    right: 0;
    margin: 0;
    top: 4rem;
    z-index: 20;
    padding: 1rem;
    border-radius: 0 0 0 0.4rem;
    text-align: end;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px;
    animation: appearsFromTop 0.4s;
}



.mobile-links ul {
    display: flex;
    gap: 1.3rem;
    flex-direction: column;
}

.mobile-links ul li {
    list-style-type: none;

}

.links {
    width: max-content;
}

.appbar ul {
    display: flex;
    width: 100%;
    gap: 2rem;
}

.appbar ul li {
    list-style-type: none;
    width: max-content;
}

.appbar ul li:hover {
    font-weight: bolder;
    text-decoration: underline;
    font-weight: bold;
    text-underline-offset: 5px;
}

.appbar ul li a,
.mobile-links ul li a {
    text-decoration: none;
    color: inherit;

    font-weight: bold;
}


.appbar ul li a:hover,
.mobile-links ul li a :hover {
    font-weight: bolder;
}

.logo {
    width: fit-content;
    height: 30%;
    object-fit: scale-down;
}

.burger {
    display: none;
    user-select: none;
    cursor: pointer;
}

h1 {
    font-size: 1rem;
}

@media (max-width:768px) {
    .links {
        display: none;
    }

    .appbar {
        padding: 1rem;
    }

    .burger {
        display: flex;
        font-size: 1.8rem;
    }
}

@keyframes appearsFromTop {
    0% {
        transform: translateY(-200px)
    }

    100% {
        transform: translateY(0);
    }
}
</style>