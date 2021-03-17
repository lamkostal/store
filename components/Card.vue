<template>
  <article>
      <div class="card-container">
          <h3 class="prod-name">{{title}}</h3>
          <p class="prod-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eius.</p>
      </div>
  </article>
</template>

<script>

export default {
    props:['title','desc','price','imgsrc'],

}
</script>

<style>
.card-container{
    width:250px;
    border: 1px solid black;
    border-radius: 15px;
    box-shadow: 0 2px 2px 1px black;
    margin: auto;
}
</style>