<template>
  <section class="homehero">
    <div>
      <svg class="herosvg" viewBox="0 0 160 110">
       

       <defs>
            <clipPath id="blue-clip">
              <rect x="105" y="5" width="50" height="50"  class="clip" />
            </clipPath>
            <clipPath id="green-clip">
              <rect x="15" y="5" width="35" height="35"  class="clip"/>
            </clipPath>
            <clipPath id="pink-clip">
              <rect x="5" y="45" width="50" height="50" class="clip" />
            </clipPath>
            <clipPath id="red-clip">
              <rect x="90" y="65" width="45" height="35" class="clip" />
            </clipPath>
            <clipPath id="yellow-clip">
              <rect x="60" y="20" width="40" height="40" class="clip" />
            </clipPath>
       </defs>

               <rect x="105" y="5" width="50" height="50" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="15" y="5" width="35" height="35" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="5" y="45" width="50" height="50" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="90" y="65" width="45" height="35" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="60" y="20" width="40" height="40" fill="var(--sec-accent-color)" class="color-rect"/>
 <nuxt-link to="/baseball"> 
 <image
          clip-path="url(#blue-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="105"
          y="5"
          width="50"
          height="50"
          href="/heroimgs/bas.png"
       />
          <text x='120' y='45' font-size="0.5em">Baseball-t's</text>

 </nuxt-link>
       
  <nuxt-link to="/cups">        
        <image
          clip-path="url(#green-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="15"
          y="5"
          width="35"
          height="35"
          href="/heroimgs/cup.png"
        />
          <text x='8' y='14' font-size="0.5em">Cups</text>

        </nuxt-link>

        <nuxt-link to="hoodies">
          <image
            clip-path="url(#pink-clip)"
            preserveAspectRatio="xMidYMid slice"
            x="5"
            y="45"
            width="50"
            height="50"
            href="/heroimgs/hoodie.jpg"
          />
          <text x='1' y='100' font-size="0.5em">Hoodies</text>

        </nuxt-link>
       <nuxt-link to="/masks">
          <image
            clip-path="url(#red-clip)"
            preserveAspectRatio="xMidYMid slice"
            x="90"
            y="65"
            width="45"
            height="35"
            href="/heroimgs/mask.jpeg"
          />
          <text x='125' y='95' font-size="0.5em">Masks</text>

       </nuxt-link>
       <nuxt-link to="/tshirts">
          <image
            clip-path="url(#yellow-clip)"
            preserveAspectRatio="xMidYMid slice"
            x="60"
            y="20"
            width="40"
            height="40"
            href="/heroimgs/tee.jpg"
          />
          <text x='60' y='17' font-size="0.5em">T-shirts</text>

       </nuxt-link>
        
      </svg>
    </div>
  </section>
</template>

<script>
export default {
    mounted(){
      this.loadGsap()
    },
    methods:{
        loadGsap(){
               let gsap = this.$gsap
               let tl = gsap.timeline({delay:0.2,})

        tl
        .to('svg',{opacity:1,duration:0.1})
        .from('.clip' , {
            transformOrigin:'50% 50%',
            scale:0,
            duration:1,
            stagger:0.1,
            ease:'power3.out',
            x:10
        })
        .fromTo('.color-rect', {
            transformOrigin:'50% 50%',
            scale:0,
            duration:1,
            rotation:10,
            ease:'power3.out',
            stagger:0.1,
        },{scale:1,opacity:1},'<0.1')
        .from('text',{
          scale:0,
          transformOrigin:'50% 50%',
          stagger:0.2

          })
        }
    }
};
</script>

<style>
.herosvg{
    opacity:0;
    margin: 1em 0;
}
text{
  fill:var(--sec-text-color);
}
text:hover{
  fill:var(--main-text-color);
}

.homehero {
  max-width: 60%;
  margin: auto;
}
.homehero div {
  /* background: coral; */
  display: flex;
  justify-content: center;
}
.clip{
    background: #000;
}
</style>