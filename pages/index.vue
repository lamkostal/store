<template>
  <main>
      <div class="headers">
        <h2 class="subtitle">featured products</h2>
      </div>
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
          imgsrc:'https://vangogh.teespring.com/v3/image/EZES_XNUyfpsJHpKzHHHAv-CsLk/560/560.jpg'
        },
        {title:"tee2",
          desc:"this is t2",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/M63KtOuMIAHawejyqPPauiee6AI/560/560.jpg'
        },
        
         {title:"tee3",
          desc:"this is t3",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/RnSeS2neTzDOLtIy6BNQqRd5gEs/560/560.jpg'
        },
         {title:"tee4",
          desc:"this is t4",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/RnSeS2neTzDOLtIy6BNQqRd5gEs/560/560.jpg'
        },
           {title:"tee5",
          desc:"this is t5",
          price:15,
          imgsrc:'https://vangogh.teespring.com/v3/image/RnSeS2neTzDOLtIy6BNQqRd5gEs/560/560.jpg'
        },
      ]
    }
  }
}
</script>

<style>
main{
  max-width: 100%;
  flex-grow: 1;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  max-width: 1360px;
  margin: 20px auto;

}
.headers{
  margin:20px 0 50px;

}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 2.7em;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 100;
  font-size: 2.5em;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: var(--sec-text-color);;
}

.links {
  padding-top: 15px;
}
</style>
