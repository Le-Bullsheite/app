<template>
  <div id="app"> 
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" />
    </div>
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="postcss" scoped>

scoped>
body {
  margin: 0;
}

.logo-container {
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 1;
  transition: 1s opacity;
  animation-fill-mode: both;
  animation-delay: 0;
  animation-duration: 2s;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
  .logo {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: vw;
  height: vh;
  }
}

@-webkit-keyframes fadeOut {
  80% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
}
@keyframes fadeOut {
  80% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
  }
</style>
