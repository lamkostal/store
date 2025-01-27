<template>
  <section class="footer">
    <footer>
      <div class="footer_col">
        <h4>Company</h4>
        <ul>
          <li>Adress</li>
          <li>Telephone</li>
          <li>email</li>
        </ul>
      </div>
      <div class="footer_col">
        <h4>Products</h4>
        <ul>
          <li>T-shirts</li>
          <li>Cups</li>
          <li>Baseball t's</li>
          <li>Hoodies</li>
          <li>Masks</li>
        </ul>
      </div>
      <div class="footer_col">
        <h4>Payments</h4>
        <ul>
          <li>visa</li>
          <li>paypal</li>
          <li>stripe</li>
          
        </ul>
      </div>
      <div class="footer_col">
        <h4>Social</h4>
        <ul class="socials_list">
          <li>facebook</li>
          <li>insta</li>
        </ul>
      </div>
    </footer>
    <div class="footer_foot">
    <span>  copyright © all rights reserved {{ new Date(new Date()).getFullYear() }}</span>
    <span class="lam">created by <a href="https://kleo-dimi.gr/">KD</a></span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.footer_foot {
  width: 100%;
  text-align: center;
  color: var(--sec-text-color);
  font-size: 0.75rem;
  padding: 4em 0 1em;
}
.lam{
  float: right;
  padding-right: 0em;
}
.footer {
  padding: 3em 2em 0;

  background: linear-gradient(
    45deg,
    var(--accent-color) 10%,
    var(--main-color) 100%
  );
}
footer {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}
.footer_col {
  flex-basis: 150px;
  margin: 1em 2em;
  /* flex:1 */
}
.footer_col h4 {
  color: var(--inv-text-color);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
}

.footer_col ul {
  padding: 0;
  margin: 0.7em 0;
  color: var(--light-grey);
}
.footer_col li {
  margin: 0.2em;
}
</style>

