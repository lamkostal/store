<template>
  <main>
    <article class="product">
      <div class="images">
      <img :src="singleProduct.imgsrc" :alt="singleProduct.desc">
      </div>
      <div class="product-details">
        <div>
          <h1>{{singleProduct.title}}</h1>
          <p>{{singleProduct.desc}}</p>
          <div class="product-options"><span v-if="hasSize">Available sizes: </span><span class="size-options">{{hasSizeOptions}}</span></div>
        </div>
        <div>
          <span class="price" :class="{strikeline : singleProduct.sales}">€{{singleProduct.price}}</span>
          <span class="price salesprice" v-if="singleProduct.sales">€{{finalPrice}}</span>
          <button 
          class="btn buy-button snipcart-add-item"
          :data-item-id="singleProduct.title"
                    :data-item-price="finalPrice"
                    :data-item-url="singleProduct.url"
                    :data-item-name="singleProduct.title"
                    :data-item-image="singleProduct.imgsrc"
                    :data-item-description="singleProduct.desc"
                    :data-item-custom1-name="hasSize?'Size':false"
                    :data-item-custom1-options="hasSize?hasSizeOptions:false">
          <span>Add to cart</span>
           <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="25"> <path d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z" fill="black"/> </svg>
          </button>
        </div>
      </div>
    </article>
      
  </main>
</template>

<script>
export default {
   asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `products/${context.params.cat}`
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
              full_slug:pr.full_slug,
              slug:pr.slug,
              size:pr.content.size,
              sales:pr.content.sales,
              discount:pr.content.discount,
            };
          }),
        };
      })
      .catch((e) => console.log(e));
  },
  computed:{
    singleProduct(){
      return this.products.find((e)=>e.slug===this.$route.params.id)
    },
    hasSize(){
        return this.singleProduct.size.length
    },
    hasSizeOptions(){
       var size = this.singleProduct.size
       var loop = ''
       for (var i=0; i<size.length; i++){
            loop+= size[i]+"|"}
          var  result=loop.substring(0, loop.length - 1)
       return result
        },
     salesPrice(){
            return  this.singleProduct.price*(1-this.singleProduct.discount/100).toFixed(2)
        },
    finalPrice(){
            return  this.singleProduct.sales? (this.singleProduct.price*(1-this.singleProduct.discount/100)).toFixed(2) : this.singleProduct.price
  }
}}
</script>

<style>
.product{
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 4rem;
}
.product>*{
  margin: 1rem;
  flex:1
}
.product .images{
  border:1px solid var(--sec-text-color);
  padding: 1rem;
  border-radius: 10px;
  max-width: 313px;
}
.product-details{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-details p{
  margin: 2em;
}
.product .btn{
  width: 100%;
  border: none;
  padding: 1rem;
  background: var(--sec-accent-color);
  margin: 2em 0 0 0;
  cursor: pointer;
  font-weight: bold;
  text-transform:uppercase;
  transition: ease-out 0.2s all;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover{
  background: var(--main-accent-color);
  color: #fff;
  fill:blanchedalmond
}
.btn svg{
  margin:0 1em;
  
  }
.product .price{
  font-size: 2.5em;
}
.salesprice{
  color: var(--danger-color);
  font-weight: bold;
}
.product-options{
  margin: 1em;
}
.size-options{
  font-size: 1.1em;
  font-weight: bold;
}



</style>