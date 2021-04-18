<template>
  <main>
    <article class="product container">
      <transition name="fade"><div @click="isOpen=!isOpen" class="zoom-image" v-if="isOpen"><img :src="mainSrc" :alt="singleProduct.imgs[0].alt"  :title="singleProduct.title"></div></transition>
      <div class="images v-flex">
       <div class="main-img" @click="isOpen=!isOpen"> <img :src="repMainSrc" :alt="singleProduct.imgs[0].alt" :title="singleProduct.title"/></div>
        <!-- <div class="thumbs" v-if="singleProduct.imgs.length>1">
          <img v-for="(img, index) in singleProduct.imgs" :src="img.filename" :alt="img.alt" :key="index" />
        </div> -->
      </div>
      <div class="product-details">
        <div>
           <h2>{{ singleProduct.title }} {{chromaName}}</h2>
          <span class="info-span">SKU: {{singleProduct.sku}}</span>
          
          <p>{{ singleProduct.desc }}</p>
          <p v-if="!singleProduct.noStock" class="info">in stock</p>
          <p v-else class="danger">out of stock</p>

          <div class="product-options">
            <div class="h-flex product-options__item" v-if="hasSize">
              <span >Available sizes:
                 </span
              ><div><span class="size-options">{{ hasSizeOptions }}</span></div>
            </div>
             <div class="v-flex product-options__item" v-if="hasColor">
              <span v-if="hasSize">choose from available colors: </span >
              <div>
                <button @click="chooseImage(index)" role="button"  class="color-box" v-for="(item,index) in singleProduct.colors" :style="{background:item.chroma.color}" :key="index">
                  <span class="info-span">{{item.chroma_name}}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span class="price" :class="{ strikeline: singleProduct.sales }"
            >€{{ singleProduct.price }}</span
          ><br>
          <span class="price salesprice" v-if="singleProduct.sales"
            >€{{ finalPrice }}</span
          >
          <button :disabled='singleProduct.noStock'
            type="button"
            class="btn buy-button snipcart-add-item"
            :data-item-id="singleProduct.title"
            :data-item-price="finalPrice"
            :data-item-url="url"
            :data-item-name="singleProduct.title +' '+ chromaName"
            :data-item-image="mainSrc"
            :data-item-description="singleProduct.desc"
            :data-item-custom1-name="hasSize ? 'Size' : false"
            :data-item-custom1-options="hasSize ? hasSizeOptions : false"
            data-item-has-taxes-included=true
          >
            <span v-if="!singleProduct.noStock">Add to cart</span>
            <span v-else  @click.stop="">currently out of stock</span>

            <svg
              v-if="!singleProduct.noStock"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="25"
            >
              <path
                d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
    <Carousel :priceIn='singleProduct.price' :categIn='singleProduct.incat' :mytitle='singleProduct.title' />
    <Iconsection />

  </main>
</template>

<script>
import Iconsection from '../../../components/Iconsection.vue'
import Carousel from '../../../components/Carousel.vue'
export default {
  transition: 'fade',

  components:{
    Carousel,
    Iconsection
    },
  data(){
    return{
      url: "https://lamstore.netlify.app" + this.$route.path,
      inStock:true,
      src:'',
      isOpen:false,
      nameofChroma:''
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: `products/${context.params.cat}`,
      })
      .then((res) => {
        console.log(res);
        return {
          products: res.data.stories.map((pr) => {
            return {
              title: pr.content.name,
              sku:pr.content.sku,
              desc: pr.content.description,
              price: pr.content.price,
              imgs: pr.content.images,
              incat: pr.content.incategory,
              full_slug: pr.full_slug,
              slug: pr.slug,
              size: pr.content.size,
              sales: pr.content.sales,
              discount: pr.content.discount,
              colors: pr.content.colors,
              noStock:pr.content.nostock
              
            };
          }),
        };
      })
      .catch((e) => console.log(e));
  },
  computed: {
    singleProduct() {
      return this.products.find((e) => e.slug === this.$route.params.id);
    },
    hasColor(){
      return this.singleProduct.colors.length
    },
    hasSize() {
      return this.singleProduct.size.length;
    },
    hasSizeOptions() {
      var size = this.singleProduct.size;
      var loop = "";
      for (var i = 0; i < size.length; i++) {
        loop += size[i] + "|";
      }
      var result = loop.substring(0, loop.length - 1);
      return result;
    },
    ColorOptions() {
     var colors = this.singleProduct.colors;
      var loop = "";
      for (var i = 0; i < colors.length; i++) {
        loop += colors[i].chroma_name + "|";
      }
      var result = loop.substring(0, loop.length - 1);
      return result;
    },
    salesPrice() {
      return (
        this.singleProduct.price *
        (1 - this.singleProduct.discount / 100).toFixed(2)
      );
    },
    finalPrice() {
      return this.singleProduct.sales
        ? (
            this.singleProduct.price *
            (1 - this.singleProduct.discount / 100)
          ).toFixed(2)
        : this.singleProduct.price;
    },
    mainSrc(){
       return (this.src.length?this.src:this.singleProduct.imgs[0].filename)
    },
    repMainSrc(){
      //replace string to call smaller size img
      return this.mainSrc.replace( "https://a.storyblok.com","https://img2.storyblok.com/400x0")
    },
    chromaName(){
      if (this.singleProduct.colors.length){
        let str=' '+'-'+' '
      return str.concat(this.nameofChroma.length?this.nameofChroma:this.singleProduct.colors[0].chroma_name)
      }else return ""
    }

  },
  methods:{
    chooseImage(index){
       this.src = this.singleProduct.imgs[index].filename
       this.nameofChroma = this.singleProduct.colors[index].chroma_name
      console.log('fired'+index)
    }
  },
  mounted(){
    console.log("nostock:"+this.singleProduct.noStock)
  }
};
</script>

<style>
.product {
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding:0 5rem 5rem;
}
@media (max-width:700px){
  .product{
    padding:1em
  }
}
.product > * {
  margin: 0.5rem;
}
.info{
  text-transform: uppercase;
  color: var(--info-color);
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.2px;
}
.danger{
  text-transform: uppercase;
  color: var(--danger-color);
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.2px;
}
.zoom-image{
  width: 100%;
  position: fixed;
  top:0;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.658);
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: unset;
  cursor: zoom-out;
  margin: 0;
  overflow-y: hidden;
}
.zoom-image img{
  border-radius: 5%;
  max-height: 85vh;
}
.product .images {
  cursor: zoom-in;
  /* flex-basis: 38%; */
}
.thumbs img{
  width:80px;
  display: inline-block;
  border: 1px solid #000;
  margin: 0.2em;
}
.product-details {
  
  display: flex;
  flex:1;
  flex-direction: column;
  justify-content: space-between;
 
  padding: 0 1em ;
}

.product-details p {
  margin: 2em 0;
  text-align: left;
}
.info-span{
  color: var(--sec-text-color) ;
  font-size: 0.85rem;
}

.product .btn {
  
  width: 100%;
  border: none;
  padding: 1rem;
  background: var(--sec-color);
  margin: 2em 0 0 0;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: ease-out 0.2s all;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  background: var(--main-color);
  color: #fff;
}
.btn svg {
  margin: 0 1em;
}
.product .price {
  font-size: 2rem;
}
.salesprice {
  color: var(--danger-color);
  font-weight: bold;
}

.product-options__item>span{
  border-bottom: 1px solid rgb(119, 119, 119);
  padding: 0.2em 0;
  margin:00 0 0.5em ;

}
.product-options__item{
  margin: 1em 0; 
  
}
.size-options {
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 5px;
}
.color-box{
  transition: all 0.1s;
  width:45px;
  height:45px;
  display: inline-block;
  margin: 1.4em 0.7em 0 0em ;
  border: none;
  border-radius: 5px;
  position: relative;
  box-shadow:  1px 2px 5px 0 rgb(172, 172, 172);
  cursor: pointer;
}
.color-box:hover{
  box-shadow:  0px 5px 7px 0 rgb(172, 172, 172);
  
}
.color-box:focus{
  outline:1px solid var(--accent-color)
}
.color-box span{
  position: absolute;
  top: -19px;
  left:0;
}
.h-flex{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.v-flex{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>