<template>
    <div>
      <span>
          <a>Software Developer</a>
      </span>
      <span>
          <a>Software Developer</a>
      </span>
      <span>
          <a>Software Developer</a>
      </span>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
span {
    background-color: rgb(234, 234, 234);
    padding: 2vh;
    margin: 10px;
    width: 10vw;
    text-align: center;
    border-radius: 20px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;
    border: 1px solid rgb(234, 234, 234);
}
span:hover {
    background-color: white;
    border: 1px solid rgb(254, 243, 132);
    border-radius: 20px;
    cursor: pointer;
}
a {
    color: rgb(88, 85, 85);
    font-weight: bolder;
    font-size: 16px;
}
a:hover {
    color: black;
}
div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}
</style>
