<template>
  <div>
    <transition name='fade'>
      <div class="demo-banner" v-if="!isClosed">
        <span>This is a demo e-commerce website made with jamstack </span>
        <div class="close" @click="close">
          <svg fill="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor"/> </svg>
      </div>
      </div>
    </transition>
    <Head />
    <Nav /> 
    <Hero />
   <div class="container">
      <nuxt/></div>
<div id="snipcart"  data-currency="eur" data-config-modal-style="side" data-api-key="NmZmYmY2NDgtMGFmOC00NmYwLWE2YzQtZGNiYTY0NjRlYTUxNjM3NDE4MTkyODk2MzAyOTA4" hidden></div>
     <Footer />

  </div>
</template>
<script>
import Head from '../components/TheHead.vue'
import Hero from '../components/TheHero.vue'
import Nav from '../components/TheNav.vue'
import Footer from '../components/TheFooter.vue'
export default {


  components:{
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
  --danger-color:rgb(243, 82, 8);
  --main-accent-color:rgb(17, 155, 109);
  --sec-accent-color: rgb(144, 231, 144);
  --main-bgcolor:#f2f2f2;
  --main-text-color:rgb(44, 44, 44);
  --sec-text-color:rgb(100, 99, 99);
  background: var(--main-bgcolor);
  color:var(--main-text-color);
  overflow: visible;
  
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  max-width: 1360px;
  margin: 20px auto;

}
button{
    background: transparent;
}
button:visited{
 outline-color:var(--main-accent-color) ;
}
:focus{outline-color:var(--main-accent-color) ;}
button:focus{
  outline-color:var(--main-accent-color) ;
  outline-offset: 2px;
  outline-style: dashed;  
  outline-width: 2px;
}
a{
  color:var(--main-accent-color);
  text-decoration: none;
}
img{
  max-width: 100%;
}
.demo-banner{
  height:70px;
  background: var(--main-accent-color);
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
  color: var(--main-accent-color);
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
  background: var(--sec-accent-color);
  border-radius: 20px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--main-accent-color);
}

/* //transitions// */
 .fade-enter-active, .fade-leave-active { transition: all .2s; }
  .fade-enter, .fade-leave-active { opacity: 0; }
.snipcart-cart-button{
  background:linear-gradient(10deg,var(--main-accent-color),var(--sec-accent-color));
   
  }
/* overide snipcart styles */

  .snipcart-cart-button:hover{
  background:linear-gradient(10deg,var(--sec-accent-color),var(--main-accent-color));
  }
  .snipcart-cart-button--secondary {
    color: var(--main-bgcolor);
   
}
  .snipcart-cart-header path{
    fill:var(--main-accent-color)
  }
  .snipcart__box--badge-highlight{
    background: linear-gradient(
90deg,var(--sec-accent-color),var(--main-accent-color));
  }
  .snipcart__actions--link{
    color: var(--main-accent-color);
  }
  .snipcart-cart-header,.snipcart-cart__secondary-header,.snipcart-modal{
    background: var(--main-bgcolor);
    
  }

</style>
