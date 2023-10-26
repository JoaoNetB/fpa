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
    display: grid;
    grid-template-columns: repeat(2, 14rem);
  }

  button {
    cursor: pointer;
    width: 100%;
    width: 100%;
    background-color: #00A8E8;
    border-radius: 0.37rem;
    font-size: 3rem;
    font-weight: 700;
  }
</style>

