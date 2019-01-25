<template>
  <div>
    <Careers/>
  </div>
</template>

<script>
import Careers from './components/careers/Careers.vue'
export default {
  components: {
    Careers
// import QuoteBlock from './components/QuoteBlock.vue';
import Home from './components/Home';
import Header from './components/Header';

export default {
  components: {
    Home,
    Header
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
