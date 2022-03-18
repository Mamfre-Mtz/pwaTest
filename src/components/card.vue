<template>
  <div class="card">
    <figure class="img-w">
      <img :src="pokemon.sprites.front_default" alt="none" />
    </figure>
    <p class="font-xl">{{ pokemon.name }}</p>
    <div class="flex justify-center">
      <p class="font-lg" v-for="type of pokemon.types" :key="type">
        {{ type.type.name }}
      </p>
    </div>
    <p class="font-lg">No. {{ pokemon.order }}</p>
  </div>
</template>

<script>
export default {
  name: "poke-card",
  data() {
    return {
      msg: "hi",
    };
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.img-w {
  margin: auto;
  width: 24rem;
}
.img-w > img {
  width: 100%;
  height: 100%;
}
.card {
  background-color: #ffffff;
  border: solid 5px #fb7823;
  border-radius: 2rem;
  color: #000000;
  margin: 5rem auto;
  min-width: 280px;
  padding: 1rem;
  width: 22vw;
}
.card p {
  margin: 0 1rem;
  text-align: center;
}
</style>
