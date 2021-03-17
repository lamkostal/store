<template>
  <main>
      <h1 class="title">Home</h1>
      <Grid :iproducts="products"/>
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
          desc:"this is t1"
        },
        {title:"tee2",
          desc:"this is t2"
        },
         {title:"tee1",
          desc:"this is t1"
        },
         {title:"tee1",
          desc:"this is t1"
        },
         {title:"tee1",
          desc:"this is t1"
        },
         {title:"tee1",
          desc:"this is t1"
        },
         {title:"tee1",
          desc:"this is t1"
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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
