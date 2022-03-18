<template>
  <div>
    <header>
      <MainNav />
    </header>
    <router-view />
    <footer class="footer">Made with love ♡ by Mamfre</footer>
  </div>
</template>

<script>
import MainNav from "./components/navbar.vue";
export default {
  name: "App",
  components: { MainNav },
};
</script>

<style src="./assets/css/main.css"></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  background-image: url("./assets/img/background.jpg");
}
.footer {
  background-color: #220a3d;
  bottom: 0;
  color: #ffffff;
  font-size: 1.4rem;
  height: 2.5rem;
  position: fixed;
  text-align: center;
  width: 100%;
}
</style>
