<template>
  <div class="header">
    <div class="header_inner clearfix">
      <router-link :to="{name: 'root'}">
        <img src="../assets/images/cnodejs_light.svg" alt="">
      </router-link>
      <form>
        <input type="text" placeholder="请输入要搜索的内容" class="search">
      </form>
      <ul class="tab">
        <li>
          <router-link :to="{name: 'root'}">首页</router-link>
        </li>
        <li><a href="javascript:;">新手入门</a></li>
        <li><a href="javascript:;">API</a></li>
        <li><a href="javascript:;">关于</a></li>
        <li><a href="javascript:;">注册</a></li>
        <li><a href="javascript:;">登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header{
    height: 40px;
    background: #444;
    padding: 5px 0;
  }
  .header_inner{
    min-width: 900px;
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    padding: 0 20px;
  }
  img{
    width: 120px;
    padding-top: 7px;
    float: left;
    margin-right: 20px;
  }
  form{
    float: left;
    padding-top: 7px;
  }
  form>.search{
    height: 28px;
    color: #666;
    border-radius: 14px;
    outline: none;
    transition: all .5s;
    font-size: 13px;
    border: none;
    padding: 0 24px;
    background: url("../assets/images/search.png") 4px 3px no-repeat #999;
  }
  form>.search:focus,
  form>.search:hover{
    background: url("../assets/images/search.png") 4px 3px no-repeat #fff;
  }
  ul.tab{
    float: right;
    height: 40px;
    line-height: 40px;
    list-style: none;
  }
  ul.tab li{
    float: left;
    padding: 0 15px;
  }
  ul.tab li:nth-child(6){
    padding-right: 0;
  }
  ul.tab li a{
    font-size: 13px;
    color: #ccc;
    text-decoration: none;
  }
  ul.tab li a:hover{
    color: #fff;
  }
</style>
