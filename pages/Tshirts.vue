<template>
  <main>
   <div class="headers"> 
     <h2 class="subtitle">T-shirts</h2></div>
      <Grid :products="products" />
  </main>
</template>

<script>
import Grid from '../components/Grid.vue'
export default {
    transition: 'fade',
   components: {
    Grid
     
  },
  data(){
    return{
      
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "products/tshirts",
      })
      .then((res) => {
        console.log(res);
        return {
          products: res.data.stories.map((pr) => {
            return {
              title: pr.content.name,
              desc: pr.content.description,
              price: pr.content.price,
              imgsrc:pr.content.images[0].filename,
              incat:pr.content.incategory,
              catlist:pr.tag_list,
              full_slug:pr.full_slug
            };
          }),
        };
      })
      .catch((e) => console.log(e));
  },

}
</script>

<style>

</style>