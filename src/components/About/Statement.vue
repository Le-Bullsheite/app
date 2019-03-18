<template>
  <section>
    <ul class="statement-container">
    <li class="strike-through"> WE ARE CREATORS </li>
    <li> WE ARE DISRUPTORS </li>
    <li class="strike-through"> WE ARE MARKETERS </li>
    <li> WE ARE INNOVATORS </li>
    </ul>
  </section>
</template>

<script>

</script>

<style lang="postcss" scoped>

.statement-container {
  margin-top: 7em;
}

li {
  font-size: 50px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  list-style: none;
  letter-spacing: .02em; 
}
.strike-through {
  padding: 2em;
  font-size: 40px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  list-style: none;
  position: relative;
    z-index: 1;
    
    &:before {
        border-top: 2px solid black;
        content:"";
        margin: 0 auto; /* this centers the line to the full width specified */
        position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
        top: 47%; left: 0; right: 0; bottom: 0;
        width: 50%;
    }

    span { 
        /* to hide the lines from behind the text, you have to set the background color the same as the container */ 
        background: #fff; 
        padding: 0 15px; 
    }
}

</style>
