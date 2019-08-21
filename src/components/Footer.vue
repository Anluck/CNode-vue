<template>
  <div class="footer">
    <div class="footer_inner">
      <p>
        <a href="https://cnodejs.org/rss" target="_blank">RSS</a>
        |
        <a href="https://github.com/cnodejs/nodeclub/" target="_blank">源码地址</a>
      </p>
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p>
        服务器赞助商为 <img src="../assets/images/1.png" height="30" alt="">，
        存储赞助商为 <img src="../assets/images/2.png" height="30" alt="">，
        由 <img src="../assets/images/3.png" height="30" alt=""> 提供应用性能服务。
      </p>
      <p>
        新手搭建 Node.js 服务器，推荐使用无需备案的
        <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">
          DigitalOcean(https://www.digitalocean.com/)
        </a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer{
    background: #fff;
    padding: 5px 0;
  }
  .footer_inner{
    background: #fff;
    padding: 15px 30px;
    min-width: 900px;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
  }
  .footer_inner>p{
    font-size: 14px;
    color: #ababab;
    line-height: 40px;
  }
  .footer_inner a:hover{
    color: #08c;
  }
</style>
