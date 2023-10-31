<template>
    <nav v-if="this.$route.name != 'inicio'">
        <router-link to="/"><button class="botaoInicio">Início</button></router-link>
        <button v-on:click="voltar" class="botaoVoltar">Voltar</button>
    </nav>
</template>

<script>
    export default {
        name: 'navBar',
        methods: {
            voltar() {
                this.$router.go(-1)
            },
        }
    }
</script>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        margin: 2.19rem 5.81rem 0 5.81rem;
    }

    .botaoInicio {
        font-size: 2rem;
        color: #00A8E8;
        cursor: pointer;
        border-radius: 0.37rem;
        border: 0.25rem solid #00A8E8;
        width: 7.25rem;
        height: 3.25rem;
    }

    .botaoInicio:hover {
        transition: 200ms;
        font-size: 2rem;
        color: #FFF;
        background-color: #00A8E8;
        cursor: pointer;
        border-radius: 0.37rem;
        border: 0.25rem solid #00A8E8;
        width: 7.25rem;
        height: 3.25rem;
    }

    .botaoVoltar {
        font-size: 2rem;
        color: #00A8E8;
        cursor: pointer;
        border-radius: 0.37rem;
        border: 0.25rem solid #00A8E8;
        width: 7.25rem;
        height: 3.25rem;
    }

    .botaoVoltar:hover {
        transition: 200ms;
        font-size: 2rem;
        color: #FFF;
        background-color: #00A8E8;
        cursor: pointer;
        border-radius: 0.37rem;
        border: 0.25rem solid #00A8E8;
        width: 7.25rem;
        height: 3.25rem;
    }
</style>