<template>

  <section class="carousel" v-if="produits.length">
    <h3 class="subtitle">Similar Products</h3>
      <div class="carousel-con">
          <ul class="slides-list"   >
              <li v-for="produit in produits" :key="produit.title">
                 <h4> {{produit.title}}</h4>
                <nuxt-link :to="produit.slug"> <img :src="produit.imgsrc" :alt="produit.imgalt"></nuxt-link>
                 <p>€{{produit.prc}}</p>
              </li>
             
          </ul>
      </div>
  </section>

</template>

<script>
export default {
    props:['priceIn','categIn','mytitle'],
    data(){
        return{
            produits:[]
        }
    },
    async fetch(){
        this.produits = await this.$nuxt.context.app.$storyapi
        .get('cdn/stories',{
              version: process.env.NODE_ENV == "production" ? "published" : "draft",
                starts_with: 'products/',
                filter_query:{
                    price:{
                        gt_int:this.lowerlimitPrice,
                        lt_int:this.upperlimitPrice
                          },
                    incategory:{
                        in_array:this.categIn[0]
                        },
                    name:{not_in:this.mytitle}
                    }
        })
        .then(response => {
            return response.data.stories.map((prod)=>{
                return {
                    title:prod.content.name,
                    imgsrc:prod.content.images[0].filename.replace("https://a.storyblok.com","https://img2.storyblok.com/200x200"),
                    imgalt:prod.content.images[0].alt,
                    prc:prod.content.price,
                    slug:prod.slug

                }
             })
            })
        .catch(error => { 
            console.log(error)
            })
    },
    computed:{
        upperlimitPrice(){
            return this.priceIn*1.5
        },
        lowerlimitPrice(){
            return this.priceIn*0.5
        },
        

    },
    // fetchOnServer: false,
    mounted(){
        console.log(this.upperlimitPrice)
        console.log('categoriesIn : '+this.categIn)
    }

    

}

</script>
    
<style>
    .carousel{
     text-align: center;

    }
    .carousel-con{
     display: grid;
     place-content: center;    
    }
   
    .slides-list{
        flex: 0;
        width: auto;
        display: flex;
        flex-wrap: wrap;
        /* overflow: hidden; */
        padding: 0;
        list-style: none;
        margin: 0;
        justify-content: center;

    }
    .slides-list li {
        flex:0 0 auto;
        /* flex-basis:45%;  */
        border:var(--light-grey) 1px solid;
        height:300px;
        margin: 0.4em;
        padding: 0.8em;
        border-radius: 5px;
        background: var(--bg-color);
    }
    .slides-list li *{
        margin: 0.4em 0;
    }

</style>