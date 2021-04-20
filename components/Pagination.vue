<template>
  <div class="pagination container">
      <nuxt-link to="/" v-if="pagLinks[0]">Home</nuxt-link> 
      <nuxt-link :to="'/'+pagLinks[0]" v-if='pagLinks[0]'>/ {{pagLinks[0]}}</nuxt-link>
      <nuxt-link :to="this.$route.path" v-if='pagLinks[1]'>/ {{pagLinks[1]}}</nuxt-link>
  </div>
</template>

<script>
export default {
computed:{
    pagLinks(){
        let links= this.$route.path.split('/')
        links.shift()
        return links
    }
}
}
</script>

<style>
    .pagination{
        height: 20px;
        padding: 020px 5em;
      text-align: left;
        
    }
    .pagination a{
        color: var(--light-grey)
    }
</style>