<template>
  <main>
   <div class="headers"> 
     <h2 class="subtitle">Baseball t-shirts</h2>
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
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--4fYqqydy--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_376/c_crop,g_north_west,h_502,w_376,x_0,y_0/g_north_west,u_upload:v1446840676:production:blanks:vckar9iig1uncttqvjgw,x_-455,y_-298/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1615420108/production/designs/19673958_1'
        },
        {title:"tee2",
          desc:"this is t2",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--EOePFGBH--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,h_502/c_crop,g_north_west,h_502,w_376,x_-21,y_0/g_north_west,u_upload:v1446840679:production:blanks:rtkb3tbbkr8x46opplsg,x_-476,y_-298/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1590952301/production/designs/10833524_0'
        },
        
         {title:"tee3",
          desc:"this is t3",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--89SaxRw6--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_376/c_crop,g_north_west,h_502,w_376,x_0,y_0/g_north_west,u_upload:v1446840676:production:blanks:vckar9iig1uncttqvjgw,x_-455,y_-298/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1585427251/production/designs/8730361_0'
        },
         {title:"tee4",
          desc:"this is t4",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--bUsa-pwo--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,h_402/c_crop,g_north_west,h_502,w_376,x_-57,y_-6/g_north_west,u_upload:v1446840678:production:blanks:xanmpjsqu7priq0w8vud,x_-512,y_-304/b_rgb:eeeeee/c_limit,f_auto,h_313,q_90,w_313/v1545185400/production/designs/3771375_1'
        },
       
      ]
    }
  }

}
</script>

<style>

</style>