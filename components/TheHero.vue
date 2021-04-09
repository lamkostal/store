<template>
  <div class="hero-container">
    <h1 class="title" v-gsap.from="{x:20,opacity:0.3,duration:0.5}">
     <slot> lamstore </slot><br> </h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.hero-container{
    height: 20vh;
    background: url(@/static/wiggle.svg) ,linear-gradient(15deg, var(--sec-color), var(--main-color)) ;
    display:flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    text-align: center;
}

</style>