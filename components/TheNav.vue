<template>
   <div class="navbar">
       <div class="nav-con">
            <div class="home">
            <nuxt-link to="/"
              ><svg
                fill="none"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"
                  fill="currentColor"
                /></svg
            ></nuxt-link>
          </div>
          <nav>
            <ul class="cat-list">
              <li v-for="cat in categories" :key="cat.name">
                <nuxt-link :to="cat.link" exact>{{ cat.name }}</nuxt-link>
              </li>
            </ul>
          </nav>
         
          <div class="cart">
            <button class="snipcart-checkout">
              <svg
                fill="none"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <span class="snipcart-total-price">$0.00</span>
            (<span class="snipcart-items-count">0</span>)
          </div>
       </div>
    </div>
</template>

<script>
export default {
      data() {
    return {
      categories: [
        { link: "tshirts", name: "TEES" },
        { link: "cups", name: "MUGS" },
        { link: "baseball", name: "BASEBALL-TEES" },
      ],
    };
  },

}
</script>

<style>
.nav-con{
    max-width: 800px;
    margin:auto;
     display: flex;
     align-items: center;
     justify-content: space-around;
}
.nav-con>*{
    flex:1
}
.home{
    position: relative;
    
}
 .navbar{
     position:sticky;
     top:0;
     background:var(--main-bgcolor);
     z-index: 15;
    border-bottom: 1px solid darkgray;
     padding: 10px 20px;
    
 }
 nav{
    position: inherit;
 }
 .cat-list {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.cat-list li {
  margin: 10px;
  padding: 0;
}
.cat-list a {
  color: var(--main-text-color);
  text-decoration: none;
  font-size: 1.1em;
}
.cat-list a:hover,
.cat-list a:focus {
  color: var(--main-accent-color);
}
.cart {
  
    display: flex;
    align-items: center;
    border: none;
    position: relative;
    z-index: 10;
    justify-content: flex-end;

}
.cart button {
  border: none;
  padding: 5px;
  margin: 0 0px 0 5px;
}
.cart button:hover {
  border: none;
  /* background: forestgreen; */
  cursor: pointer;
}
.cart path {
  fill: var(--main-accent-color);
}
.cart span{
  margin: 0 5px;
}
</style>