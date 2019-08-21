<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
      <router-view name="linkbar"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  body{
    background: #e1e1e1;
  }
  .main{
    min-width: 900px;
    max-width: 1400px;
    margin: 15px auto;
    position: relative;
    padding: 0 20px;
    min-height: 750px;
  }
</style>
