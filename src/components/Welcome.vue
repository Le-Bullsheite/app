<template>
<div class="welcome">
  <img class="fade-out" src="../../assets/logo.png" alt="">
</div>
</template>

<style scoped>
.fade-out {
    opacity: 0;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 3s; 
}
@keyframes fadeInOpacity {
   80% {opacity: 1;}
   100% {opacity: 0;
        z-index:-10}
} 
.welcome { 
  position: fixed;
  top: 0; 
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-repeat: no-repeat;
}

</style>
