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

}
</script>

<style>
    .brands{
        margin-top: 5em;
        padding: 5em 0 5em;
    }
    .brand_logos{
        padding: 1em;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
     .brand_logos picture{
        /* padding: 0.5em; */
     }
</style>