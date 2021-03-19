<template>
  <article>
      <div class="card-container">
          <div class="card__image">
              <a href="#"><img :src="imgsrc" :alt="imgalt"></a>
          </div>
          <div class="card__title"><h3>{{title}}</h3></div>
          <div class="card__details">
              <p class="prod-descr">{{desc}}</p>
              <span class="prod-price">{{addcurrency}}</span>
              <button class="icon cart-icon buy-button snipcart-add-item" title="add to cart"
                :data-item-id="title"
                :data-item-price="price"
                data-item-url="http://localhost:3000/"
                :data-item-name="title"
                :data-item-image="imgsrc"
                :data-item-description="desc"
              >
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20"> <path d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z" fill="black"/> </svg>
              </button>
              </div>
      </div>
  </article>
</template>

<script>

export default {
    props:['title','desc','price','imgsrc','imgalt'],
    computed:{
      addcurrency(){
        return  this.price +" $"
        }
    }
}
</script>

<style>
.card-container{
    /* padding: 05px  ; */
    width:270px;
    border: none;
    border-radius: 5px;
    box-shadow: 02px 02px 15px 0px rgba(153, 153, 153,0.7);
    margin: auto;
    overflow: hidden;
    background: rgb(255, 255, 255);
}
.card__title{
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
}
.cart-icon{
    display: inline-block;
    margin:0px 0  0 150px;
    border: none;
    padding: 5px 10px;
}
.cart-icon:hover{
    background: rgb(144, 231, 144);
}

</style>