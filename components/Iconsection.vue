<template>
 
  <section class="iconsection" >
      <div class="iconsection_item">
          <span>Free Shipping</span>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M2 4h14v4h4v2h-4v6h6v-4h2v6h-4v2h-4v-2H8v2H4v-2H0V4h2zm20 8h-2v-2h2v2zm-8-2V6H2v10h12v-6z" fill=""/> </svg>
      </div>
      <div class="iconsection_item">
          <span>30-day refunds</span>

          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z" fill="currentColor"/> </svg>
      </div>
      <div class="iconsection_item">
          <span>24/7 support</span>

          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M19 2H5v2H3v14h7v-8H5V4h14v6h-5v8h3v2h-6v2h8v-4h2V4h-2V2zm-3 10h3v4h-3v-4zm-8 0v4H5v-4h3z" fill="currentColor"/> </svg>
      </div>
  </section>
  
</template>

<script>
export default {
    mounted() {
    
    this.animateOnScroll()
  },
  
  methods:{
      animateOnScroll(){
        let gsap=this.$gsap
        let tl = gsap.timeline({
              scrollTrigger:{
                  trigger: '.iconsection',
                  toggleActions:'restart none none'
                //  pin: true,
                //  scrub: true,
                //  markers: true
              }
        })

          tl.from('.iconsection_item',{
              duration:1,
              scale:0,
              stagger:0.2,
          })
         .to('.iconsection_item span',{
                  rotation:3,
                  yoyo:true,
                  delay:0.1,
                  duration:0.1,
                  ease:'Power3.out',
                  stagger:{
                      each:0.5,
                       repeat:4,
                  }
          })
          .to('.iconsection_item span',{ rotation:0,duration:0.1})
          .to('.iconsection_item path',{
                 fill:'var(--sec-color)',
                 duration:1.5,
                 
          })
             
      }
  }

}
</script>

<style>
.iconsection{
    background: var(--accent-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding:4em 2em;
    margin-top: 2em;
}
.iconsection_item{
    color:var(--sec-text-color);
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Kathycox';
  font-family: 'Bugaki';

    margin: 1em;

    
}
.iconsection_item span{
    letter-spacing: 2px;
    color:var(--main-color);
    margin: 0 0 1em;

}
.iconsection_item svg{
    flex-basis: 50px;
    
}
.iconsection_item path{
    fill:var(--main-color)
     
}

</style>