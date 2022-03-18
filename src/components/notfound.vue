<template>
  <div class="grid justify-center">
    <h3 class="title-404 primary-color">Page not found</h3>
    <figure class="notfound-img mt-5">
      <img
        src="https://s3.amazonaws.com/kandipatternspatterns/characters/10670_Ghost_Missingno_Sprite.png"
        alt="none"
      />
    </figure>
  </div>
</template>

<script>
export default {
  name: "not-found",
};
</script>

<style>
.title-404 {
  font-size: 5rem;
}
.notfound-img {
  justify-self: center;
  width: 20vw;
}
.notfound-img > img {
  height: 100%;
  width: 100%;
}
</style>
