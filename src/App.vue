<template>
  <nav v-if="paginaAtual != 'inicio'">
    <router-link to="/" v-on:click="paginaInicial">Início</router-link>
    <button v-on:click="voltar">
      Voltar
    </button>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        paginaAtual: "inicio"
      }
    },
    methods: {
      voltar() {
        this.$router.go(-1)
        if(this.$route.name == 'inicio') {
          this.paginaAtual = 'inicio'
        }
      },

      paginaInicial() {
        this.paginaAtual = 'inicio'
      }
    }
  }
</script>

<style>
  @font-face {
    font-family: Montserrat;
    src: url('./assets/fonts/Montserrat-Regular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: Montserrat;
    src: url('./assets/fonts/Montserrat-Bold.ttf');
    font-weight: 700;
  }

  * {
    padding: 0;
    border: 0;
    margin: 0;
    background-color: #00171F;
    color: #FFFFFF;
    font-family: Montserrat;
    font-weight: 400;
  }
</style>
