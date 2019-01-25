<template>
<section>
  <div>
    <h2> Clients </h2>
  </div>
  <ul>
    <li>
     <img src="../../../assets/Logo3.jpg" width="100%" heigth="100%">
    </li>
     <li>
    <img src="../../../assets/Logo6.jpg" width="100%" heigth="100%">
    </li>
     <li>
     <img src="../../../assets/Logo5.jpg" width="100%" heigth="100%">
    </li>
     <li>
     <img src="../../../assets/Logo7.jpg" width="100%" heigth="100%">
    </li>
     <li>
    <img src="../../../assets/Logo8.png" width="100%" heigth="100%">
    </li>
     <li>
    <img src="../../../assets/Logo9.jpg" width="100%" heigth="100%">
    </li>
    <li>
    <img src="../../../assets/Logo10.png" width="100%" heigth="100%">
    </li>
     <li>
    <img src="../../../assets/Logo12.png" width="100%" heigth="100%">
    </li>
  </ul>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');
* {
  font-family: 'Sorts Mill Goudy', serif;
}
h2 {
  margin-top: 100px;
  text-align: center;
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
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
} 
.color {
  border: 2pt solid rgb(254, 243, 132);
  padding: 30px;
}
</style>
