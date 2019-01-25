<template>
    <div>
        <img id="adult" src="../../assets/adult.jpg">
        <h1>
            Work <span id="with">With</span> Us
        </h1>
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
            <Job/>
        </div>
    </div>
</template>

<script>
import Job from './Job.vue';

export default {
    components: {
        Job
    }
};
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500|Sorts+Mill+Goudy');
#join-container {
    background-color: rgb(250, 250, 250);
    padding: 3vh;   
}
#adult {
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: auto;
    z-index: -1;
}
#with {
    color:rgb(254, 243, 132);

}
h1 {
    text-align: center;
    margin-top: 20vh;
    font-size: 16vh;
    color: rgb(88, 85, 85);
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
    color: rgb(88, 85, 85);
    font-family: 'Sorts Mill Goudy', serif;
}
hr {
    border-top: 1px solid rgb(88, 85, 85);
    width: 30%;
}
</style>
