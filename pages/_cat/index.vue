<template>
  <main>
      <div class="headers">
        <h2 class="subtitle">{{$route.params.cat}}</h2>
      </div>
      <div class="sorting-field">
          <label for="sort-products">sort products by price:</label>
          <select name="ascending" id="sort-products" v-model="sortSetter">
            <option>ascending</option>
            <option>descending</option>
          </select>
        </div>

      <Grid :products="sortedProducts" />

  </main>
</template>

<script>
import Grid from '../../components/Grid.vue'


export default {
  transition: 'fade',
   
  components: {
    Grid
  },
  data(){
      return{
        sortSetter:'ascending'
      }
  },
   asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `products/${context.params.cat}`,
      })
      .then((res) => {
        
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
              full_slug:pr.full_slug,
              size:pr.content.size,
              sales:pr.content.sales,
              discount:pr.content.discount,
              colors:pr.content.colors,
              featured:pr.content.featured
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
  computed:{

    sortedProducts(){
      if(this.sortSetter==='ascending'){
         return this.products.sort((a,b)=>{
        return a.price-b.price
      })
      }else{
         return this.products.sort((a,b)=>{
        return b.price-a.price
      })
      }
     
    }
  }
  
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
.sorting-field{
  display: flex;
    align-items: center;
    justify-content: flex-end;
    margin:0em 3em 2em;
}
select{
  padding: 1em;
  margin-left: 1em;
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
