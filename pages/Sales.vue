<template>
  <main>
      <div class="page-content container">
        <div class="headers">
          <h2 v-gsap.from="{y:-100,ease:'bounce.out',duration:1}" class="sales-title">NOW ON SALES!!</h2>
        </div>
        <Grid :products="products" index='true'/>

      </div >
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
        starts_with: "products/",
        filter_query:{sales:{in:true}}
      })
      .then((res) => {
        // console.log(...res.data);
        return {
          products: res.data.stories.map((pr) => {
           return {
              title: pr.content.name,
              desc: pr.content.description,
              price: pr.content.price,
              imgsrc:pr.content.images[0].filename,
              incat:pr.content.incategory,
              catlist:pr.tag_list,
              full_slug:pr.full_slug,
              size:pr.content.size,
              sales:pr.content.sales,
              discount:pr.content.discount,
              colors:pr.content.colors
              // featured:pr.content.featured
            };
          }),
        };
      })
      .catch((e) => console.log(e));
  },
}
</script>

<style >

.sales-title{
  color: var(--danger-color);
  font-family: 'Bugaki';
  font-size: 2rem;
}

</style>

