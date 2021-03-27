<template>
            

  <div class="grid">
     
                   <Card  v-for="product in products" :key="product.title"  
                    :title="product.title"
                    :desc="product.desc"
                    :price="product.price"
                    :imgsrc="product.imgsrc"
                    :imgalt="product.imgalt"
                    :catlist="product.catlist"
                    :index="index"
                    :full_slug="product.full_slug"
                  
                    />
     
  </div>
          

</template>

<script>
import Card from './Card.vue'
export default {
    props:['products','index'],
    components:{
        Card
    },
    

    

}
</script>

<style>
    ul{
        list-style: none;
    }
    .grid{
        padding: 10px 50px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
       grid-gap: 20px;
       flex-grow: 1;
      
    }
</style>