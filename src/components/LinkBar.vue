<template>
  <div class="linkBar">
    <div class="panel">
      <div class="panelHeader">个人信息</div>
      <div class="authersummay panel_inner">
        <div class="clearfix imgAndName">
          <router-link :to="{name: 'userinfo', params: {
            name: userInfo.loginname
          }}">
            <img :src="userInfo.avatar_url" alt="">
          </router-link>
          <span class="userInfo_name">
            <router-link :to="{name: 'userinfo', params: {
              name: userInfo.loginname
            }}">
              {{userInfo.loginname}}
            </router-link>
          </span>
        </div>
        <p class="score">积分: {{userInfo.score}}</p>
        <p class="signature">“ 这家伙很懒，什么都没有留下。”</p>
      </div>
    </div>
    <div class="panel">
      <div class="panelHeader">友情社区</div>
      <div class="link_logo">
        <a href="https://ruby-china.org/" target="_blank">
          <img src="../assets/images/ruby.png" alt="">
        </a>
        <a href="https://golangtc.com/" target="_blank">
          <img src="../assets/images/golangtc.png" alt="">
        </a>
        <a href="https://learnku.com/laravel" target="_blank">
          <img src="../assets/images/phphub.png" alt="">
        </a>
        <a href="https://testerhome.com/" target="_blank">
          <img src="../assets/images/TesterHome.png" alt="">
        </a>
      </div>
    </div>
    <div class="panel">
      <div class="panelHeader">客户端二维码</div>
      <div class="download">
        <img src="../assets/images/erweima.png" width="180" alt="">
        <p>
          <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LinkBar",
    data(){
      return {
        userInfo: {}
      }
    },
    methods: {
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then( (res) => {
            // console.log(res.data.data)
            this.userInfo = res.data.data
          })
          .catch( (err) => {
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.getData()
    }
  }
</script>

<style scoped>
  .linkBar{
    width: 285px;
    font-size: 13px;
    position: absolute;
    right: 20px;
    top: 0;
  }
  .linkBar .panel{
    background: #fff;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .linkBar .panelHeader{
    line-height: 16px;
    color: #444;
    padding: 12px;
    background: #f6f6f6;
    border-radius: 4px 4px 0 0;
  }
  .panel .panel_inner{
    padding: 12px;
  }
  .authersummay .imgAndName img{
    width: 48px;
    height: 48px;
    border-radius: 4px;
    float: left;
  }
  .authersummay .userInfo_name{
    font-size: 16px;
    color: #333;
    line-height: 24px;
    padding: 12px 0;
    margin-left: 10px;
    vertical-align: middle;
    float: left;
  }
  .authersummay .score{
    font-size: 14px;
    color: #666;
    line-height: 26px;
    margin: 10px 0;
  }
  .authersummay .signature{
    color: #666;
    font-size: 14px;
  }
  .link_logo>a>img{
    width: 150px;
    margin: 6px 10px;
  }
  .panel .download{
    text-align: center;
    padding: 15px 0;
    font-size: 13px;
    line-height: 16px;
    color: #666;
  }
</style>
