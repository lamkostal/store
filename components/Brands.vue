<template>
  <section class="brands">
  
     
          <div class="headers"><h2 class="subtitle">Brands</h2></div>
    
     <div class="brand_logos">
          <picture><img src="/brand_imgs/rocky.png" alt="rocky logo"></picture>
          <picture><img src="/brand_imgs/nb.png" alt="new balance logo"></picture>
          <picture><img src="/brand_imgs/quicksilver.png" alt="quicksilver logo"></picture>
          <picture><img src="/brand_imgs/vans.png" alt="vans logo"></picture>
          <picture><img src="/brand_imgs/addidas classic.png" alt="adidas logo"></picture>
     </div>
  </section>
</template>

<script>

export default {
    components:{
      
    }
}
</script>

<style>
    .brands{
        margin-top: 0em;
        padding: 5em 0;
    }
      .brands::after h2{
          content:'';
          width:100px;
          position: absolute;
          top:0;
          left:0;
          height:10px;
          background: #000;
      }
    .brand_logos{
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
      .brand_logos picture{
        max-width: 120px;
    }
     
</style>