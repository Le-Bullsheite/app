<template>
  <section>
    <carousel>
    <slide>
      <img src="../../assets/laptop.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="../../assets/paper.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="../../assets/workplace.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="../../assets/laptop.jpg" width="100%" height="100%">
    </slide>
</carousel>
    
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
};

</script>

<style scoped>
img {
  margin-top: 100px;
}
</style>