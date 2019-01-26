<template>
  <section>
    <div>
      <h2>Our Mission Statement</h2>
      <blockquote class="mission"> Lé Bullsheite is {{ getNoun }} agency that strives to {{ verb }}
        the way people think about {{ noun }}. To deliver a {{ adjective }} product, that not only
        {{ verb }} but {{ adverb }}. 
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
  </section>
</template>

<script>

</script>

<style>
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
}
.span {
    color: rgb(254, 243, 132);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(254, 243, 132);
    letter-spacing: .03em;
    font-style: italic;
}
</style>

