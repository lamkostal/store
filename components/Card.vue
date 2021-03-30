<template>
  <article >
      
          <div class="card-container" >
             <div v-if="isFeatured" class="ribon featured">featured</div>
              <div class="card__image">
                  <nuxt-link :to="routeLink"><img :src="imgsrc" :alt="imgalt"></nuxt-link>
              </div>
                  <nuxt-link :to="routeLink"> 
                      <div class="card__title"><h3>{{title}}</h3></div>
                </nuxt-link>
              <div class="card__details">
                  <p class="prod-descr">{{desc}}</p>
                  <div>
                      <span class="prod-price">{{addcurrency}}</span>
                      <button class="icon cart-icon buy-button snipcart-add-item" title="add to cart"
                        :data-item-id="title"
                        :data-item-price="price"
                        :data-item-url="url"
                        :data-item-name="title"
                        :data-item-image="imgsrc"
                        :data-item-description="desc"
                        :data-item-custom1-name="hasSize?'Size':false"
                        :data-item-custom1-options="hasSize?hasSizeOptions:false">
                    
                          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20"> <path d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z" fill="black"/> </svg>
                      
                      </button>
                      <div class="button-pop">add to cart</div>
                  </div>
                  
                  </div>
          </div>
      
  </article>
</template>

<script>

export default {
    props:['title','desc','price','imgsrc','imgalt','catlist','index','full_slug','size','index'],
    data(){
        return{
            // slug:this.$route.name,
            url:"http://localhost:3000"+this.$route.path, 
        }
    },
    computed:{
         slug(){return this.$route.path},
      addcurrency(){
        return  "$ "+ this.price
        },
     
     isFeatured(){
        return this.index
     },
      routeLink(){
        return this.full_slug.substring(9)
    },
    hasSize(){
        return this.size.length
    },
    hasSizeOptions(){
       var size = this.size
       var loop = ''
       for (var i=0; i<size.length; i++){
            loop+= size[i]+"|"}
          var  result=loop.substring(0, loop.length - 1)
       return result
        }
       
       
    
     
     },
      mounted(){
        console.log("slug:"+this.slug)
       
        console.log("size:"+this.size)
        console.log("name:"+this.title+' sizeoptions:'+this.hasSizeOptions)




    }
}
</script>

<style>
.card-container{
    /* padding: 05px  ; */
    width:270px;
    border: none;
    border-radius: 5px;
    box-shadow: 07px 04px 15px 0px rgba(189, 189, 189, 0.7);
    margin: auto;
    overflow: hidden;
    background: rgb(255, 255, 255);
    position: relative;
}
.card__title{
    margin:10px 0 0 0;
    font-size: 1.1em;
    color:var(--main-text-color);

}
.card__title:hover{
    margin:10px 0 0 0;
    font-size: 1.1em;
    color:var(--main-accent-color);

}

.card__image{
    height: 250px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    /* padding: 5PX; */
    
}
.card__image a{
    width: 100%;
    height: 100%;
    display: block;
}
.card__image img{
    max-width: 100%;
}
.card__details{
    margin: 5px 0;
    padding: 0 0 10px;
}
.card__details>div{
    position: relative;

}
.cart-icon{
    display: inline-block;
    margin:10px 0  0 150px;
    border: none;
    padding: 7px 10px;
    transition: all 0.2s ease-out;
    transition-delay: 0.1s;
    border-radius:0px 0 5px 0;
    z-index: 0;
    
}
.button-pop{
    position: absolute;
    top:10px;
    right:65px;
    background: var(--sec-accent-color);
    height: 37px;
    padding: 06.5px 0 0 0px ;
    color: var(--main-text-color);
    width:0;
    transition: all 0.2s;
    overflow: hidden;
    white-space: nowrap;
    border-radius:5px 0 0 0 ;
    font-size: 1em;
    font-weight: bold;

}

.cart-icon:hover{
    background:var(--sec-accent-color);
    cursor: pointer;
    }
.cart-icon:hover + .button-pop{
    transition: all 0.2s ease-out;
    transition-delay: 0.2s;

    width:100px;
    padding: 06.5px 0px 0 3px ;
  
    

    } 
.featured{
    position:absolute;
    top:0px;
    height: auto;
    padding:4px 7px;
    background:var(--main-accent-color);
    color:#fff;
    z-index: 0;
    font-size: 0.8em;
    font-weight: 300;
    border-radius: 0 0  5px;
} 

</style>