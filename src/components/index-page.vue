<template>
  <div class="text-center">
    <h1 class="mt-5">Look for your pokemon</h1>
    <div class="mt-2">
      <input
        type="text"
        name="pokemonName"
        id="pokemonName"
        v-model="inputName"
      />
      <button
        class="btn ml-5 bg-primary-color border-primary-color-light"
        @click="search"
      >
        Go!!
      </button>
      <p class="result">{{ resultName }}</p>
    </div>
    <PokeCard :pokemon="data" v-if="data" />
  </div>
</template>

<script>
import PokeCard from "./card.vue";
export default {
  name: "main-page",
  components: { PokeCard },
  data() {
    return {
      inputName: "",
      resultName: "no entries yet",
      data: null,
    };
  },
  methods: {
    async search() {
      const lowercase = this.inputName.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${lowercase}`
      );
      const data = await response.json();
      this.data = data;
      this.resultName = "it's " + data.name + "!!";
    },
  },
};
</script>

<style>
.result {
  font-size: 3rem;
}
input {
  font-size: 1.6rem;
  height: 3rem;
  padding: 1rem;
}
</style>
