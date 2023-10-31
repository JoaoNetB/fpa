<template>
  <navBar />
  <router-view/>
</template>

<script>
  import navBar from './components/navBar.vue'

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
      },
    },
    components: {
      navBar
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
