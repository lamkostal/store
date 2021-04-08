<template>
  <section class="homehero">
    <div>
      <svg class="herosvg" viewBox="0 0 150 120">
       

       <defs>
            <clipPath id="blue-clip">
              <rect x="90" y="5" width="50" height="50"  class="clip" />
            </clipPath>
            <clipPath id="green-clip">
              <rect x="15" y="5" width="35" height="35"  class="clip"/>
            </clipPath>
            <clipPath id="pink-clip">
              <rect x="10" y="45" width="50" height="50" class="clip" />
            </clipPath>
            <clipPath id="red-clip">
              <rect x="90" y="65" width="45" height="35" class="clip" />
            </clipPath>
            <clipPath id="yellow-clip">
              <rect x="55" y="20" width="40" height="40" class="clip" />
            </clipPath>
       </defs>

        <rect x="90" y="5" width="50" height="50" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="15" y="5" width="35" height="35" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="10" y="45" width="50" height="50" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="90" y="65" width="45" height="35" fill="var(--sec-accent-color)" class="color-rect"/>
               <rect x="55" y="20" width="40" height="40" fill="var(--sec-accent-color)" class="color-rect"/>

        <image
          clip-path="url(#blue-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="90"
          y="5"
          width="50"
          height="50"
          href="/heroimgs/bas.png"
        />
         
        <image
          clip-path="url(#green-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="15"
          y="5"
          width="35"
          height="35"
          href="/heroimgs/cup.png"
        />
        <image
          clip-path="url(#pink-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="10"
          y="45"
          width="50"
          height="50"
          href="/heroimgs/hoodie.jpg"
        />
        <image
          clip-path="url(#red-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="90"
          y="65"
          width="45"
          height="35"
          href="/heroimgs/mask.jpeg"
        />
        <image
          clip-path="url(#yellow-clip)"
          preserveAspectRatio="xMidYMid slice"
          x="55"
          y="20"
          width="40"
          height="40"
          href="/heroimgs/tee.jpg"
        />
        
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
               let tl = gsap.timeline({delay:0.5,})

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
            ease:'power3.out',
            stagger:0.1,
        },{scale:1.2,opacity:1},'<0.1')
        }
    }
};
</script>

<style>
.herosvg{
    opacity:0;
}
image{
    border: 1px solid #000;;
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