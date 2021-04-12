<template>
  <div>
    <transition name='fade'>
      <div class="demo-banner" v-if="!isClosed">
        <span>This is a headless e-commerce website demo using vue.js & snipcart </span>
        <div class="close" @click="close">
          <svg fill="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor"/> </svg>
      </div>
      </div>
    </transition>
    <Head />
    <Nav /> 
    <Hero >{{pageName}}</Hero>
   <div class="container">
      <nuxt/></div>
    <div id="snipcart"  data-currency="eur" data-config-modal-style="side"    data-api-key="NmZmYmY2NDgtMGFmOC00NmYwLWE2YzQtZGNiYTY0NjRlYTUxNjM3NDE4MTkyODk2MzAyOTA4" hidden>
           
    </div>
    <Iconsection />
     <Footer />

  </div>
</template>
<script>
import Head from '../components/TheHead.vue'
import Hero from '../components/TheHero.vue'
import Nav from '../components/TheNav.vue'
import Iconsection from '../components/Iconsection'

import Footer from '../components/TheFooter.vue'
export default {


  components:{
    Iconsection,
    Head,
    Nav,
    Hero,
    Footer
  },
  data(){
    return{
      isClosed:false
    }
  },
  methods:{
    close(){
      this.isClosed=true
    }
  },
  computed:{
    pageName(){
      return this.$route.path==='/'?'Lamstore - shop t-shirts and other apparel':this.$route.params.id?this.$route.params.id:this.$route.params.cat
    }
  }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  /* overflow-y:visible;  */
  /* position: relative; */
}
body{
  
  --light-grey:rgb(196, 196, 196);
  --danger-color:rgb(243, 55, 8);
  --main-color:rgb(17, 155, 109);
  --sec-color: rgb(144, 231, 144);
  --accent-color:rgb(55, 43, 85);
  --main-bgcolor:#f2f2f2;
  --main-text-color:rgb(44, 44, 44);
  --inv-text-color:rgb(211, 211, 211);
  --sec-text-color:rgb(146, 146, 146);
  background: var(--main-bgcolor);
  color:var(--main-text-color);
  overflow: visible;
  
}

button{
    background: transparent;
}
button:visited{
 outline-color:var(--main-color) ;
}
:focus{outline-color:var(--main-color) ;}
button:focus{
  
  outline-offset: 3px;

  outline-width: 1px;
}
a{
  color:var(--main-color);
  text-decoration: none;
}

img{
  max-width: 100%;
}
.demo-banner{
  height:70px;
  background: var(--danger-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  opacity: 1;
  
}
.close{
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:20px;
  right: 25px;
  border-radius:50% ;
  background: rgba(253, 245, 230, 0.575);
  color: var(--main-color);
}
.close:hover{
  cursor: pointer;
  color:var(--danger-color)
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: var(--sec-color);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--main-color);
}

/* //transitions// */
 .fade-enter-active, .fade-leave-active { transition: all .2s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
.snipcart-cart-button{
    transition: all .4s;

  background:linear-gradient(0deg,var(--main-color),var(--sec-color));
  background-size:100px 80px;  
  /* background-size: cover; */
 
  /* background-repeat: no-repeat; */
   
  }
/* overide snipcart styles */

  .snipcart-cart-button:hover{
  /* background:linear-gradient(10deg,var(--sec-color),var(--main-color)); */
  background-position:100px;
  }
  .snipcart-cart-button--secondary {
    color: var(--main-bgcolor);
   
}
.snipcart-cart-button--secondary .snipcart__icon path{
    fill:var(--main-color) !important
  }
  .snipcart__box--badge-highlight{
    background: linear-gradient(
90deg,var(--sec-color),var(--main-color));
  }
  .snipcart__actions--link{
    color: var(--main-color);
  }
  .snipcart-cart-header,.snipcart-cart__secondary-header,.snipcart-modal{
    background: var(--main-bgcolor);
    
  }.snipcart__icon--blue-light path,.snipcart__icon--blue-dark path{
    fill: var(--main-color);
  }
  .snipcart-form__select:focus-within {
    outline: none;
    border: 1px solid var(--sec-color) !important;
    box-shadow: 0 8px 14px 0 #dee0e0;
}
.snipcart-input:focus-within{
    outline: none;
    border: 1px solid var(--sec-color) !important;
    box-shadow: 0 8px 14px 0 #dee0e0;
}
.snipcart-checkbox:focus+label:before, .snipcart-checkbox:hover+label:before {
    border: 1px solid var(--sec-color);
}

.snipcart__button--icon:active, .snipcart__button--icon:focus {
    outline: none;
    border: 1px solid var(--sec-color);
}
.snipcart-cart__content {
    margin: 0 auto;
    background-color: transparent;
}
   


</style>
