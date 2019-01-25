<template>
  <section>
    <div> 
      <h1>
        Home </h1> </div>
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