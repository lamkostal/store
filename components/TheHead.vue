<template>
  <div class="head-container">
    <div class="top-bar">
      <div class="social-links">
        <a href="#">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
              /></svg></span
          >
        </a>
       <a href="#">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
              /></svg></span
          >
       </a>
       <a href="#">
         <span><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg
          ></span>
       </a>
      </div>
    </div>

    <div class="bottom-bar">
      <div></div>
      <div class="logo">
        <!-- <h1>Lamstore</h1> -->
        <img src="../static/store_logo.svg" alt="lamstrore logotype" />
      </div>
      <div class="search">
        <button >
          <svg
            fill="none"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 2h8v2H6V2zM4 6V4h2v2H4zm0 8H2V6h2v8zm2 2H4v-2h2v2zm8 0v2H6v-2h8zm2-2h-2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm0-8h2v8h-2V6zm0 0V4h-2v2h2z"
              fill="currentColor"
            />
          </svg>
        </button>
        <input type="text" placeholder="search" />
      </div>
    </div>
   
  </div>
</template>

<script>
export default {

};
</script>

<style>
.head-container {
  position: relative;
  text-align: center;
  padding: 10px 20px;
}
.top-bar {
  height: 20px;
  /* border:1px solid grey; */
  display: flex;
  justify-content: flex-end;
}
.top-bar * {
  margin: 0 0px 0 5px;
}
.top-bar svg {
  stroke: var(--main-text-color);
  height: 20px;
}
.logo * {
  max-width: 200px;
}
.bottom-bar {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.bottom-bar > * {
  display: flex;
  flex: 1;
  justify-content: center;
}
.search {
  display: flex;
  justify-content: flex-end;
}
.search button{
  border: none;
  height: 24px;
  margin: 0 4px 0 0;
  padding: 0;
}
.search button:hover{
  color:var(--main-accent-color);
  cursor: pointer;
}
.search input{
  border: none;
  
}
.search svg {
  margin: 0 10px;
  
}
.low-bar {
  margin: 20px 0;
}


</style>