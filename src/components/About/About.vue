<template>
  <section>
    <Statement />
    <div>
      <h2>Our Mission Statement</h2>
      <blockquote class="mission"> Lé Bullsheite is an agency that strives revolutionize
        the way people think about brands. To deliver a brand-centered product, that not only
        excites but sparks excitment. Lé Bullsheite is an agency that strives to disrupt
        the way people think about marketing.
      </blockquote>
    </div>
    <div class="fade-in">
    <figure>
      <blockquote>
          <span> No, </span>
      </blockquote> 
      <figcaption>
          <span class="span">-- Rosa Parks, </span><i>Civil Disruptor</i>
      </figcaption>
  </figure>
    </div>
  <History />
  </section>
</template>

<script>
import History from './History';
import Statement from './Statement';
export default {
    components: {
        History,
        Statement
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');
* {
  font-family: 'Sorts Mill Goudy', serif;
}

h2 {
  margin-top: 100px;
  text-align:center;
   font-size: 4vh;
   text-decoration: underline;
}
.mission {
   display: block;
    text-align: center;
    padding: 2vw;
    font-size: 4vh;
    width: 75%;
    margin: 0 auto 0 auto;
}
figure {
    display: block;
    text-align: center;
    padding: 2vw;
    font-size: 4vh;
    width: 50%;
    margin: 0 auto 0 auto;
}
blockquote {
    margin: 1vh auto 1vh auto;
    letter-spacing: .03em;
    margin-top: 100px;
}
.span {
    color: rgb(254, 243, 132);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(254, 243, 132);
    letter-spacing: .03em;
    font-style: italic;
}
</style>

