<template>
  <div id="app">
    <Header/>
    <main>
      <RouterView></RouterView>
    </main>
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

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

body {
  margin: 0;
}


</style>
