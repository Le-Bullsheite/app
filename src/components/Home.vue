<template>
  <section>
     <head>
    <title> Le Bullsheite - Home </title>
    </head>
    <hooper :itemsToShow="4" :centerMode="true" pagination="no">
      <slide>
      <img src="../../assets/adult.jpg">
      </slide>
      <slide>
      <img src="../../assets/adult.jpg" alt="">
      </slide>
      <slide>
      <img src="../../assets/adult.jpg" alt="">
      </slide>
      <slide>
      <img src="../../assets/adult.jpg" alt="">
      </slide>
    </hooper>
     <button>&#10094;</button>
    <button>&#10095;</button>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper';

  export default {
    name: 'App',
    components: {
      Hooper,
      Slide
    },
    data() {
      return {
        hooperSettings: {
          itemsToShow: 1,
          centerMode: true
        }
      }
    }
  }

</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}

</style>