<template>
  <main>
      <div class="headers">
        <h2 class="subtitle">{{$route.params.cat}}</h2>
      </div>
      <Grid :products="products" />

  </main>
</template>

<script>
import Grid from '../../components/Grid.vue'


export default {
  transition: 'fade',
   
  components: {
    Grid
  },
   asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `products/${context.params.cat}`,
      })
      .then((res) => {
        console.log(res);
        if(!res.data.stories.length){
           throw "erroo"
        }
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
              discount:pr.content.discount
            };
          }),
        };
        
      })
      .catch((e) => {
          console.log(e)
            context.error({ statusCode: 404, message: 'Page does not exist' })
          }
          );
  },
  
}
</script>

<style>
main{
  max-width: 100%;
  flex-grow: 1;
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
