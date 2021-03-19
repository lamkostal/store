<template>
  <div>
    <Navbar /> 
    <Hero />
   <div class="container">
      <nuxt/></div>
<div id="snipcart" data-config-modal-style="side" data-api-key="NmZmYmY2NDgtMGFmOC00NmYwLWE2YzQtZGNiYTY0NjRlYTUxNjM3NDE4MTkyODk2MzAyOTA4" hidden></div>
     <Footer />

  </div>
</template>
<script>
import Hero from '../components/TheHero.vue'
import Navbar from '../components/TheNavbar.vue'
import Footer from '../components/TheFooter.vue'
export default {
  components:{
    Navbar,
    Hero,
    Footer
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
  position: relative;
}
body{
  --main-color:red;
  --sec-color:black;
  --main-accent-color:rgb(0, 85, 74);
  --main-bgcolor:#f2f2f2;
  --main-text-color:rgb(44, 44, 44);
  --sec-text-color:rgb(100, 99, 99);
  background: var(--main-bgcolor);
  color:var(--main-text-color);
  overflow: visible;
  
}
button{
  
    background: transparent;

}
button:focus,button:visited{
 outline-color:var(--main-accent-color) ;
}



</style>
