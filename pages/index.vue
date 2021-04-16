<template>
  <main >

       <div class="container">
          <Homehero/>
          <div class="headers">
            <h2 class="subtitle">featured products</h2>
          </div>
          <Grid :products="products" index='true'/>
        <Brands />
       </div>
    <Iconsection />  
  </main>
</template>

<script>
import Grid from '../components/Grid.vue'
import Homehero from '../components/Homehero.vue'
import Brands from '../components/Brands'
import Iconsection from '../components/Iconsection'




export default {
  transition: 'fade',
  components: {
   Iconsection,
    Homehero,
    Grid,
    Brands
  },
  mounted(){
    let gsap = this.$gsap
    let subs = gsap.utils.toArray(".subtitle")
    
    subs.forEach(el => {
      gsap.from(el,{
        color:'var(--main-color)',
        letterSpacing:'25px',
        duration:1.5,
        ease:'power3.out',
        x:100,opacity:0,
        scrollTrigger:{
          trigger:el,
          toggleActions:'restart none none none'
        }
      })
    })
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
        filter_query:{featured:{in:true}}
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

<style>
main{
  max-width: 100%;
  flex-grow: 1;
}
section{
  padding:0 0em 3em;
}
.container {
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */
  text-align: center;
  max-width: 1360px;
  margin: 80px auto 0px;

}

.headers{
  margin:20px 0 50px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 1px;
}
.subtitle {
 display: inline-block;
  width:auto;
  font-weight: 100;
  font-size: 2.8rem;
  word-spacing: 5px;
  padding: 1em;
  color: var(--accent-color);
  /* border-top: 1px solid var(--light-grey) ; */
}


.links {
  padding-top: 15px;
}
</style>
