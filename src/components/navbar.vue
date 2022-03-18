<template>
  <nav class="bg-secondary-color">
    <router-link :to="'/pwaTest'">Home</router-link>
    <router-link :to="'/pwaTest/about'">About</router-link>
    <router-link :to="'/pwaTest/day'">Pokemon of the day</router-link>
    <router-link :to="'/pwaTest/moves'">Moves</router-link>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
};
</script>

<style>
nav {
  align-items: center;
  display: flex;
  height: 4.5rem;
  justify-content: flex-end;
}
nav > a {
  color: #ffffff;
  font-size: 1.6rem;
  text-decoration: none;
  margin-right: 2rem;
}
</style>
