<template>
  <nav v-if="paginaAtual">
    <router-link to="/">Início</router-link>
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
        paginaAtual: this.$route.name == "inicio" ? false : true 
      }
    },
  }
</script>

<style>
  * {
    padding: 0;
    border: 0;
    margin: 0;
    background-color: #00171F;
  }
</style>
