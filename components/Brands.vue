<template>
  <section class="brands">
  
     
          <h2 class="subtitle">Brands</h2>
    
     <div class="brand_logos">
          <picture><img src="/brand_imgs/rocky.jpg" alt=""></picture>
          <picture><img src="/brand_imgs/nb.jpg" alt=""></picture>
          <picture><img src="/brand_imgs/quicksilver.jpg" alt=""></picture>
          <picture><img src="/brand_imgs/vans.jpg" alt=""></picture>
          <picture><img src="/brand_imgs/addidas classic.jpg" alt=""></picture>
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
     
</style>