<template>
  <section>
    <carousel>
    <slide>
      <img src="../../../assets/laptop.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="../../../assets/workplace.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="../../../assets/workplace2.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="../../../assets/girl.jpg" width="100%" height="100%">
    </slide>
     <slide>
      <img src="../../../assets/paper.jpg" width="100%" height="100%">
    </slide>
</carousel>
    <Clients/>
    <Testimony/>
  </section>
</template>

<script>
import Clients from './Clients';
import Testimony from './Testimony';
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide,
        Clients,
        Testimony
    }
};

</script>

<style scoped>
img {
  margin-top: 50px;
}
</style>