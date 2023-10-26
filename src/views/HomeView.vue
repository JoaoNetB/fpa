<template>
    <div class="tela-inicio">
      <h1>
        Escolha a sua posição
      </h1>
      <div class="botoes">
        <button>Piloto</button>
        <button>ATC</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>

  .tela-inicio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    line-height: normal;
    margin-top: 6.75rem;
    margin-bottom: 10rem;
  }

  .botoes {
    display: flex;
    justify-content: center;
    column-gap: 4rem;
    row-gap: 4rem;
    flex-wrap: wrap;
  }

  button {
    cursor: pointer;
    width: 14rem;
    height: 14rem;
    background-color: #00A8E8;
    border-radius: 0.37rem;
    font-size: 3rem;
    font-weight: 700;
  }

  button:hover {
    transition: 300ms;
    background-color: #007EA7;
  }
</style>

