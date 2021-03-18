<template>
  <main>
   <div class="headers"> <h2 class="subtitle">Cups</h2></div>
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
        {title:"Cup1",
          desc:"this is t1",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--_axUsexn--/c_scale,h_704/c_lpad,g_north_west,h_801,w_1802,x_309,y_48/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug%20Effect%20Coffee3%20Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug%20Effect%20Coffee3%20Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:ffffff/c_limit,f_auto,h_313,q_90,w_313/v1611335419/production/designs/18762982_0'
        },
        {title:"Cup2",
          desc:"this is t2",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--5YqxMbra--/c_scale,h_704/c_lpad,g_north_west,h_801,w_1802,x_263,y_52/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:f2be5c/c_limit,f_auto,h_313,q_90,w_313/v1610710295/production/designs/18521939_0'
        },
         {title:"cup3",
          desc:"this is t3",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--v7wnRCRr--/c_scale,h_504/c_lpad,g_north_west,h_801,w_1802,x_182,y_148/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:1d6b5b/c_limit,f_auto,h_313,q_90,w_313/v1610707390/production/designs/18520549_0'
        },
          {title:"cup3",
          desc:"this is t3",
          price:15,
          imgsrc:'https://res.cloudinary.com/teepublic/image/private/s--v7wnRCRr--/c_scale,h_504/c_lpad,g_north_west,h_801,w_1802,x_182,y_148/c_crop,h_801,w_691,x_125/c_mfit,g_north_west,u_misc:Mug Effect Coffee3 Left/e_displace,fl_layer_apply,x_14,y_-2/c_mfit,g_north_east,u_misc:Mug Effect Coffee3 Right/e_displace,fl_layer_apply,x_-14,y_-2/c_crop,h_801,w_656/g_north_west,l_upload:v1466696262:production:blanks:w00xdkhjelyrnp8i8wxr,x_-410,y_-235/b_rgb:1d6b5b/c_limit,f_auto,h_313,q_90,w_313/v1610707390/production/designs/18520549_0'
        },
       
      ]
    }
  }

}
</script>

<style>

</style>