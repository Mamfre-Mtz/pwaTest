<template>
  <div>
    <PokeCard :pokemon="data" />
  </div>
</template>

<script>
import PokeCard from "./card.vue";
export default {
  name: "starters-page",
  components: { PokeCard },
  data() {
    return {
      data: null,
    };
  },
  async created() {
    const number = random();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await response.json();
    this.data = data;
  },
};

function random() {
  return Math.floor(Math.random() * (800 - 1) + 1);
}
</script>

<style></style>
