<template>
  <div role="button" class="toggle" @click="toggle">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M13 5h2v14h-2V5zm-2 4H9v10h2V9zm-4 4H5v6h2v-6zm12 0h-2v6h2v-6z" fill="var(--main-color)"/> </svg>
  </div>
</template>

<script>
export default {
    methods:{
        toggle(){
        this.$emit('toggle')
        let gsap=this.$gsap
        let tl=gsap.timeline()
        tl.to('.toggle',{rotation:0,opacity:0}).to('.toggle',{delay:1,rotation:-90,opacity:1})
        }
    }

}
</script>
    
<style>
.toggle{
    cursor: pointer;
    transform-origin: center;
    transform: rotate(-90deg);
    max-width: 40px;
}
@media (min-width:700px){
 .toggle{
   display: none;
 }
}

</style>