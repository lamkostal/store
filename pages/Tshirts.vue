<template>
  <main>
   <div class="headers"> 
     <h2 class="subtitle">T-shirts</h2></div>
      <Grid :products="products"/>
  </main>
</template>

<script>
import Grid from '../components/Grid.vue'
export default {
   components: {
    Grid
     
  },
  data(){
    return{
      products:[
        {title:"tee1",
          desc:"this is t1",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/EZES_XNUyfpsJHpKzHHHAv-CsLk/560/560.jpg',
          imgalt:"this is an img alt"
        },
        {title:"tee2",
          desc:"this is t2",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/M63KtOuMIAHawejyqPPauiee6AI/560/560.jpg',
          imgalt:"this is an img alt"
          
        },
        
         {title:"tee3",
          desc:"this is t3",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/RnSeS2neTzDOLtIy6BNQqRd5gEs/560/560.jpg',
          imgalt:"this is an img alt"
        },
         {title:"tee4",
          desc:"this is t4",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/RnSeS2neTzDOLtIy6BNQqRd5gEs/560/560.jpg',
          imgalt:"this is an img alt"
        },
           {title:"tee5",
          desc:"this is t5",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/RnSeS2neTzDOLtIy6BNQqRd5gEs/560/560.jpg',
          imgalt:"this is an img alt"
        },
      ]
    }
  }

}
</script>

<style>

</style>