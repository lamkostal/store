<template>
  <section class="homehero">
    <div>
      <svg class="herosvg" viewBox="0 0 160 110">
      <image class="deco-icon" x="5"  y="6"   width="4"  height="4"  href="/heroimgs/play.svg" />
      <image class="deco-icon" x="40"  y="100"   width="4"  height="4" href="/heroimgs/rect.svg" />
      <image class="deco-icon" x="60"  y="65"   width="4"  height="4"  href="/heroimgs/label.svg" />
      <image class="deco-icon" x="65"  y="5"   width="4"  height="4"  href="/heroimgs/human.svg" />
      <image class="deco-icon" x="75"  y="85"   width="4"  height="4"  href="/heroimgs/happy.svg" />
      <image class="deco-icon" x="90"  y="10"   width="4"  height="4"  href="/heroimgs/rect.svg" />
      <image class="deco-icon" x="100"  y="55"   width="4"  height="4"  href="/heroimgs/play.svg" />
      <image class="deco-icon" x="140"  y="80"   width="4"  height="4"  href="/heroimgs/circle.svg" />
      <image class="deco-icon" x="150"  y="60"   width="4"  height="4"  href="/heroimgs/dino.svg" />


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

               <rect x="105" y="5" width="50" height="50" fill="var(--accent-color)" class="color-rect"/>
               <rect x="15" y="5" width="35" height="35" fill="var(--accent-color)" class="color-rect"/>
               <rect x="5" y="45" width="50" height="50" fill="var(--accent-color)" class="color-rect"/>
               <rect x="90" y="65" width="45" height="35" fill="var(--accent-color)" class="color-rect"/>
               <rect x="60" y="20" width="40" height="40" fill="var(--accent-color)" class="color-rect"/>
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
          <text x='105' y='60' >Baseball-t's</text>

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
          <text x='3' y='14' >Cups</text>

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
          <text x='1' y='100' >Hoodies</text>

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
          <text x='125' y='95' >Masks</text>

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
          <text x='60' y='17'>T-shirts</text>

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
               let tl = gsap.timeline({delay:0,})

        tl
        .to('svg',{opacity:1,duration:0.1})
        .from('.clip' , {
            transformOrigin:'50% 50%',
            scale:0,
            duration:1,
            stagger:0.2,
            ease:'power3.out',
            x:10
        })
        .fromTo('.color-rect', {
            transformOrigin:'50% 50%',
            scale:0,
            duration:1,
            rotation:0,
            ease:'power3.out',
        },{
          scale:1,
          rotation:365,
          opacity:1,
            stagger:0.2,

          },'<0.1')
        .from('text',{
          scale:0,
          transformOrigin:'50% 50%',
          stagger:0.1,
          duration:1,
          ease:'power3.out',
          })
        .fromTo('.deco-icon',{
          scale:0,
          duration:0.3,
        },{
          scale:1,
          stagger:{each:0.1,from:'center'},
          ease:'power3.out',
          },'<0.2')
        .to('.deco-icon',{
          transformOrigin:'50% 50%',
          // x:1,
          y:2,
          rotation:590,
          duration:8.4,
          repeat:-1,
           yoyo:true,
            ease: "none",
          stagger:{
            each:0.2,
            from:'random',
            ease: "none",
            yoyo:true,
            repeat: -1
            }
           
            },'<0.5')
        }
        
    }
};
</script>

<style>
/* @font-face {
  font-family: 'KathyCox';
  src: url('/KathyCox.otf');
} */
@font-face {
  font-family: 'Bugaki';
  src: url('/Bugaki-Regular.otf');
}
.herosvg{
    opacity:0;
    margin: 1em 0;
    overflow: vidible;
}
text{
  fill:var(--accent-color);
  font-size:0.35em;
  font-family: 'KathyCox';
  font-family: 'Bugaki';


}
text:hover{
  fill:var(--main-color);
}

.homehero {
  max-width: 75%;
  margin: auto;
}
@media  (max-width:770px) {
  .homehero {
  max-width: 95%;
  margin: auto;
}
text{
  font-size:0.5em
}
}
.homehero div {
  /* background: coral; */
  display: flex;
  justify-content: center;
    overflow: vidible;

}
.clip{
    background: #000;
}
</style>