<template>
    <div>
        <div id="picture-container"> 
            <img src="../../assets/adult.jpg">
        </div>
        <div id="join-container">
            <h2>
                Join Our Team
            </h2>
            <hr>
            <h3>
                Lé Bullsheité is a true one of a kind agency. We combined our passion for BUZZWORD to help our clients
                BUZZWORD.
            </h3>
            <hr>
        </div>
    </div>
</template>

<script>
import Header from './Header';
export default {
    components: {
        Header
    }
};
</script>

<style lang="postcss" scoped>
#join-container {
    background-color: rgb(250, 250, 250);
    padding: 3vh;   
}
#picture-container {

}
img {
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: fixed;
    bottom: 0;
    right: 0;
}
h2 {
    text-align: center;
    margin: 0;
    padding: 0 3vh 3vh 3vh;
    font-size: 6vh;
    color: rgb(88, 85, 85);
    font-weight: bolder;
}
h3 {
    text-align: center;
    margin: 4vh auto 4vh auto;
    line-height: 5vh;
    width: 40%;
    color: rgb(88, 85, 85)
}
hr {
    border-top: 1px solid rgb(88, 85, 85);
    width: 30%;
}
</style>
