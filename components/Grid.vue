<template>
  <div class="grid">
      <div  v-for="product in iproducts" :key="product.title" >
               <Card :title="product.title"/>
      </div>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
    props:['iproducts'],
    components:{
        Card
    }

}
</script>

<style>
    ul{
        list-style: none;
    }
    .grid{
        padding: 10px 50px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
       grid-gap: 10px;
       flex-grow: 1;
      
    }
</style>