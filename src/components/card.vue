<template>
  <div>
    <figure class="img-w">
      <img :src="pokemon.sprites.front_default" alt="none" />
    </figure>
    <!-- <p>{{ pokemon.types.type.name }}</p> -->
    <p>{{ pokemon.order }}</p>
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
</style>
