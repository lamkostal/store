<template>
  <div class="nav-container">
      <div class="top-bar">
          <div class="social-links">
              <span>1</span><span>2</span><span>3</span>
          </div>
      </div>
     
        <div class="mid-bar">
            <div></div>
              <div class="logo">
                  <h1>Lamstore</h1>
              </div>
              <div class="search">
                   <input type="search">
              </div>
        </div>
     <div class="low-bar">
         <nav>
              <ul class="cat-list">
                  <li v-for="cat in categories" :key="cat.name">
                     <nuxt-link :to="cat.link" exact>{{cat.name}}</nuxt-link>
                      </li>   
              </ul>
          </nav>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            categories:[
                {link:"/",name:"Home"},
            {link:"tshirts",name:"tees"},
            {link:"cups",name:"cups"},
            {link:"baseball",name:"baseball tees"},

            ]
        }
    }

}
</script>

<style>
.nav-container{
    text-align: center;
    padding:10px;
}
.top-bar{
    height: 40px;
    border:1px solid grey;
    display: flex;
    justify-content: flex-end;
}
.top-bar *{
    margin: 10px;
}
.mid-bar{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.mid-bar>*{
    display: flex;
    flex:1;
    justify-content: center;
}
.search{
    display: flex;
    justify-content: flex-end;
}
nav{
    display: flex;
    flex-direction: column;
}
.cat-list{
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 0;

}
.cat-list li{
    margin: 10px;
    padding: 0;
}
</style>