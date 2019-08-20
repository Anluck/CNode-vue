<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
    name: 'App',
    components: {
      Header
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
