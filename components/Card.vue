<template>
  <article>
    <div class="card-container">
      <div class="card__image">
           <div v-if="isFeatured" class="ribon featured">featured</div>
           <!-- <div v-if="sales" class="ribon sales">sales</div> -->

        <nuxt-link :to="routeLink"
          ><img :src="cardThumb" :alt="imgalt"
        /></nuxt-link>
        <div class="discount-sticker" v-if="sales">-{{ discount }}%</div>
      </div>
      <nuxt-link :to="routeLink">
        <div class="card__title">
          <h3>{{ title }}<span>{{defaultColor}}</span></h3>
        </div>
      </nuxt-link>
      <div class="card__details">
        <p class="prod-descr">{{ desc }}</p>
        <nuxt-link :to="routeLink"><div class="viewmore">view more</div></nuxt-link>
        <div>
          <span class="prod-price" :class="{ strikeline: sales }">{{
            addcurrency
          }}</span>
          <span class="prod-disprice" v-if="sales">{{ salesPrice }}</span>

          <button
            class="icon cart-icon buy-button snipcart-add-item"
            title="add to cart"
            :data-item-id="title + defaultColor"
            :data-item-price="finalPrice"
            :data-item-url="url"
            :data-item-name="title+ defaultColor"
            :data-item-image="imgsrc"
            :data-item-description="desc"
            :data-item-custom1-name="hasSize ? 'Size' : false"
            :data-item-custom1-options="hasSize ? hasSizeOptions : false"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="20"
            >
              <path
                d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z"
                fill="black"
              />
            </svg>
          </button>
          <div class="button-pop">quick add</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    "title",
    "desc",
    "price",
    "imgsrc",
    "imgalt",
    "catlist",
    "index",
    "full_slug",
    "size",
    "index",
    "sales",
    "discount",
    "featured",
    'colors'
  ],
  data() {
    return {
      // slug:this.$route.name,
      url: "http://localhost:3000" + this.$route.path,
    };
  },
  computed: {
    defaultColor(){
      return this.colors.length?  '  '+'(' +this.colors[0].chroma_name +')' :''
      },
    cardThumb() {
      return this.imgsrc.replace(
        "https://a.storyblok.com",
        "https://img2.storyblok.com/270x0"
      );
    },
    slug() {
      return this.$route.path;
    },
    addcurrency() {
      return "€ " + this.price;
    },
    salesPrice() {
      return "€ " + (this.price * (1 - this.discount / 100)).toFixed(2);
    },
    finalPrice() {
      return this.sales
        ? (this.price * (1 - this.discount / 100)).toFixed(2)
        : this.price;
    },
    isFeatured() {
      return this.featured;
    },
    routeLink() {
      return this.full_slug.substring(9);
    },
    hasSize() {
      return this.size.length;
    },
    hasSizeOptions() {
      var size = this.size;
      var loop = "";
      for (var i = 0; i < size.length; i++) {
        loop += size[i] + "|";
      }
      var result = loop.substring(0, loop.length - 1);
      return result;
    },
  },
  mounted() {
    // console.log("slug:" + this.slug);
    // console.log("size:" + this.size);
    // console.log("name:" + this.title + " sizeoptions:" + this.hasSizeOptions);
  },
};
</script>

<style>
.card-container {
  /* padding: 05px  ; */
  width: 270px;
  border: none;
  border-radius: 5px;
  box-shadow: 07px 04px 15px 0px rgba(189, 189, 189, 0.7);
  margin: auto;
  overflow: hidden;
  background: rgb(255, 255, 255);
  position: relative;
}
.card__title {
  margin: 10px 0 0 0;
  font-size: 1.1em;
  color: var(--main-text-color);
}
.card__title span{
  color:var(--sec-text-color);
  font-size: 0.7em;
}
.card__title:hover {
  margin: 10px 0 0 0;
  font-size: 1.1em;
  color: var(--main-accent-color);
}
.discount-sticker {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  padding: 18px 10px;
  background: var(--danger-color);
  color: #fff;
  font-weight: bold;
}
.card__image {
  z-index: 0;
  position: relative;
  height: 250px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  
}
.card__image a {
  width: 100%;
  height: 100%;
  display: block;
}
.card__image img {
  max-width: 100%;
}
.card__details {
  margin: 5px 0;
  padding: 0 0 10px;
}
.card__details > div {
  position: relative;
}
.cart-icon {
  display: inline-block;
  margin: 10px 0 0 150px;
  border: none;
  padding: 7px 10px;
  transition: all 0.2s ease-out;
  transition-delay: 0.1s;
  border-radius: 0px 0 5px 0;
  z-index: 0;
}
.button-pop {
  position: absolute;
  top: 10px;
  right: 65px;
  background: var(--sec-accent-color);
  height: 37px;
  padding: 06.5px 0 0 0px;
  color: var(--main-text-color);
  width: 0;
  transition: all 0.2s;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 5px 0 0 0;
  font-size: 1em;
  font-weight: bold;
}

.cart-icon:hover {
  background: var(--sec-accent-color);
  cursor: pointer;
}
.cart-icon:focus,
.cart-icon:visited {
  background: var(--main-accent-color);
  border: none;
  outline: none;
  transition: all 0.1s;
}
.cart-icon:hover + .button-pop {
  transition: all 0.2s ease-out;
  transition-delay: 0.2s;
  width: 100px;
  padding: 06.5px 0px 0 3px;
}
.featured {
  position: absolute;
  top: 0px;
  height: auto;
  padding: 4px 7px;
  color: var(--main-accent-color);
  text-transform: uppercase;
  z-index: 0;
  font-size: 0.7em;
  font-weight: bold;
  border-radius: 5px 0 5px 0;
  border: 1px solid var(--main-accent-color);
}
.sales {
  position: absolute;
  top: 0px;
  right: 0;
  height: auto;
  padding: 4px 7px;
  background: var(--danger-color);
  color: #fff;
  z-index: 0;
  font-size: 0.8em;
  font-weight: 300;
  border-radius: 0px 0px 0px 5px;
  z-index: 0;
}
.prod-descr {
  min-height: 80px;
  /* margin: 0em 0 1em; */
  padding: 0 0.5em 1em;
}
.viewmore{
  width: 40%;
  padding: 0.6em 0.4em;
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 1px;
  border: 1px solid var(--main-accent-color);
  margin: auto;
  margin-bottom: 1em;
  transition: all 0.2s ease;
}
.viewmore:hover{
  background: var(--main-accent-color);
  color:#fff;
}
.prod-disprice {
  position: absolute;
  top: -5px;
  left: 17px;
  width: 70px;
  font-weight: bold;
  font-size: 1.1em;
  transform: rotate(15deg);
  background-color: var(--danger-color);
  padding: 2px;
  border-radius: 5px;
  color: #fff;
}
.prod-disprice::after {
  content: "";
  padding: 0.1em;
  width: 15px;
  height: 17px;
  transform: rotate(45deg);
  position: absolute;
  top: 6px;
  left: 58px;
  background: var(--danger-color);
  z-index: -1;
  border-radius: 2px;
}
.strikeline {
  text-decoration: line-through;
  /* color: var(--main-accent-color); */
  text-decoration-color: var(--danger-color);
}
</style>