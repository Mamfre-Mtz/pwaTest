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
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/rowlet`);
    const data = await response.json();
    this.data = data;
  },
};
</script>

<style></style>
