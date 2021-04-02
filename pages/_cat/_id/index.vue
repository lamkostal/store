<template>
  <main>
    <article class="product">
      <div class="images v-flex">
       <div class="main-img"> <img :src="mainSrc" :alt="singleProduct.imgs[0].alt" /></div>
        <!-- <div class="thumbs" v-if="singleProduct.imgs.length>1">
          <img v-for="(img, index) in singleProduct.imgs" :src="img.filename" :alt="img.alt" :key="index" />
        </div> -->
      </div>
      <div class="product-details">
        <div>
          <h1>{{ singleProduct.title }}</h1>
          <p>{{ singleProduct.desc }}</p>
          <div class="product-options">
            <div class="h-flex product-options__item" v-if="hasSize">
              <span >Available sizes:
                 </span
              ><div><span class="size-options">{{ hasSizeOptions }}</span></div>
            </div>
             <div class="v-flex product-options__item" v-if="hasColor">
              <span v-if="hasSize">Available colors: </span >
              <div>
                <div @click="chooseImage(index)" class="color-box" v-for="(item,index) in singleProduct.colors" :style="{background:item.chroma.color}" :key="index">
                  <span>{{item.chroma_name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span class="price" :class="{ strikeline: singleProduct.sales }"
            >€{{ singleProduct.price }}</span
          >
          <span class="price salesprice" v-if="singleProduct.sales"
            >€{{ finalPrice }}</span
          >
          <button
            class="btn buy-button snipcart-add-item"
            :data-item-id="singleProduct.title"
            :data-item-price="finalPrice"
            :data-item-url="singleProduct.url"
            :data-item-name="singleProduct.title"
            :data-item-image="mainSrc"
            :data-item-description="singleProduct.desc"
            :data-item-custom1-name="hasSize ? 'Size' : false"
            :data-item-custom1-options="hasSize ? hasSizeOptions : false"
           
            
          >
            <span>Add to cart</span>
            <svg
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
  </main>
</template>

<script>
export default {
  data(){
    return{
      src:''
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
              desc: pr.content.description,
              price: pr.content.price,
              imgs: pr.content.images,
              incat: pr.content.incategory,
              catlist: pr.tag_list,
              full_slug: pr.full_slug,
              slug: pr.slug,
              size: pr.content.size,
              sales: pr.content.sales,
              discount: pr.content.discount,
              colors: pr.content.colors,
              
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
      return this.src.length?this.src:this.singleProduct.imgs[0].filename
    }
  },
  methods:{
    chooseImage(index){
       this.src = this.singleProduct.imgs[index].filename
      console.log('fired'+index)
    }
  },
  mounted(){
    console.log(this.ColorOptions)
  }
};
</script>

<style>
.product {
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 4rem;
}
.product > * {
  margin: 1rem;
  flex: 1;
}
.product .images {
  /* border: 1px solid var(--sec-text-color); */
  
  padding: 1rem;
  border-radius: 10px;
  max-width: 300px;
}
.thumbs img{
  width:80px;
  display: inline-block;
  border: 1px solid #000;
  margin: 0.2em;
}
.product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-details h1{
  text-align: left;
}
.product-details p {
  margin: 2em 0;
  text-align: left;
}

.product .btn {
  width: 100%;
  border: none;
  padding: 1rem;
  background: var(--sec-accent-color);
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
  background: var(--main-accent-color);
  color: #fff;
}
.btn svg {
  margin: 0 1em;
}
.product .price {
  font-size: 2.5em;
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
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 5px;
}
.color-box{
  transition: all 0.2s;
  width:35px;
  height:35px;
  display: inline-block;
  margin: 1.2em 0.5em 0 0em ;
  border-radius: 5px;
  position: relative;
  box-shadow:  1px 2px 5px 0 rgb(172, 172, 172);
  cursor: pointer;
}
.color-box:hover{
  
  box-shadow:  0px 5px 7px 0 rgb(172, 172, 172);
  
}
.color-box span{
  position: absolute;
  top: -22px;
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
  justify-content: space-around;
}
</style>