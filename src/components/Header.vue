<template>
  <section>
    <header>
      <img src="../../assets/logo.png" alt="fancy logo">
    </header>
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/about"> About </RouterLink>
        <RouterLink to="/careers"> Careers </RouterLink>
        <RouterLink to="/contact"> Contact </RouterLink>
      </nav>
  </section>
</template>

<script>

export default {

};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
}

nav a {
  font-weight: bold;
  line-height: 1.6em;
  letter-spacing: .05em;
  padding: 30px;
  padding-left:20;
  color: black;
  text-decoration: none;
  font-size: 20px;
  /* display: block; */
}

img {
  width: 125px;
  height: 75px;
  z-index:99;
}
.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
}
@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
