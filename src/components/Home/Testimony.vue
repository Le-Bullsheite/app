<template>
  <section>
    <div>
      <h2> What Our Clients Say About Us </h2> 
    </div>
    <ul>
    <li class="color">
      <h3> What does Lé Bullsheite even do?</h3>
      <h4> -- Satisfied Client</h4>
    </li>
     <li class="color">
      <h3> I've trusted Lé Bullsheite with all my marketing needs for over 15 years!</h3>
      <h4> -- Long Time Client</h4>
    </li>
     <li class="color">
      <h3> They did an ehh job.</h3>
      <h4> -- Trusted Professional</h4>
    </li>
     <li class="color">
      <h3> Not easy to work with and didn't deliever.</h3>
      <h4> -- Industry Client</h4>
    </li>
  </ul>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');
section {
  background-color: rgb(231, 227, 227);
  font-family: 'Sorts Mill Goudy', serif;
}
h2 {
  margin-top: 100px;
  text-align: center;
  padding: 30px;
  font-size: 2.5em;
  letter-spacing: .03em;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  grid-column-gap: 50px;
  grid-row-gap: 100px;
  padding: 0;
  margin-top: 30px;

}
li {
  margin-top: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-bottom: 100px;
} 

li:hover {
  background-color: rgb(241, 241, 241);
  
}
.color {
  border: 2pt solid rgb(254, 243, 132);
  padding: 30px;
}
</style>
