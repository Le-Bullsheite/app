<template>
  <section>
    <!-- <Welcome/> -->
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
    <div class="fade-in">
    <figure>
      <blockquote>
          <span> How can mirrors be real if our eyes aren't real? </span>
      </blockquote> 
      <figcaption>
          <span class="span">-- Jaden Smith, </span><i>Youth Philosopher</i>
      </figcaption>
  </figure>
    </div>
    <Clients/>
    <Testimony/>
  </section>
</template>

<script>
import Clients from './Clients';
import Testimony from './Testimony';
import { Carousel, Slide } from 'vue-carousel';
// import Welcome from '../Welcome';
export default {
    components: {
        Carousel,
        Slide,
        Clients,
        Testimony,
        // Welcome
    }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');

* {
 font-family: 'Sorts Mill Goudy', serif;
}
img {
  margin-top: 50px;
}

figure {
    display: block;
    text-align: center;
    padding: 2vw;
    font-size: 4vh;
    width: 50%;
    margin: 0 auto 0 auto;
    letter-spacing: .03em;
}
blockquote {
    margin: 1vh auto 1vh auto;
}
div {
  margin-top: 40px;
}
.span {
  color: yellow;
  -webkit-text-stroke-width: .4px;
  -webkit-text-stroke-color:rgb(184, 182, 182);
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