<template>
  <div class="hero-container">
    <h1 class="title">lamstore <br> shop t-shirts and other apparel</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.hero-container{
    height: 25vh;
    background: url(@/static/wiggle.svg) ,linear-gradient(15deg, var(--sec-accent-color), var(--main-accent-color)) ;
    display:flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    text-align: center;
}

</style>