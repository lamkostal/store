<template>
       <nav class="mobile-nav"  @click="$emit('close')">
           <div class="close">
                <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
              fill="currentColor"
            />
          </svg>
           </div>
            <ul class="cat-list v-flex">
              <li v-for="cat in categories" :key="cat.title">
                <nuxt-link :to="'/'+cat.title" >{{ cat.title }}</nuxt-link>
              </li>
              <li class="sales_link" v-gsap.to="{opacity:1,delay:0.8}"> <nuxt-link to="/sales" >sales</nuxt-link></li>
            </ul>
        </nav>
</template>

<script>
export default {
    props:['categories'],
    methods:{
       
    }
}
</script>

<style >

.mobile-nav{
    z-index: 11;
    position: fixed;
    top:0;
    right:0;
    padding: 4em;
    width:100%;
    min-height: 100vh;
    background: #000;
    color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   

}
.mob-cat-list{
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
</style>