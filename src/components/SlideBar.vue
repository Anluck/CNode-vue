<template>
  <div class="slideBar">
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
      <div class="panelHeader">作者最近主题</div>
      <div class="panel_inner">
        <ul class="recentTopics recentAll">
          <li v-for="list in recentTopics">
            <router-link :to="{name: 'post_content', params: {
              id: list.id,
              name: list.author.loginname
            }}">
              {{list.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="panel">
      <div class="panelHeader">作者最近回复</div>
      <div class="panel_inner">
        <ul class="recentReplies recentAll">
          <li v-for="list in recentReplies">
            <router-link :to="{name: 'post_content', params: {
              id: list.id,
              name: list.author.loginname
            }}">
              {{list.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SlideBar",
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
    },
    computed: {
      recentTopics(){
        if(this.userInfo.recent_topics){
          return this.userInfo.recent_topics.slice(0, 5)
        }
      },
      recentReplies(){
        if(this.userInfo.recent_replies){
          return this.userInfo.recent_replies.slice(0, 5)
        }
      }
    },
    watch: {
      '$route'(to, from){
        this.getData()
      }
    }
  }
</script>

<style scoped>
  .slideBar{
    width: 285px;
    font-size: 13px;
    position: absolute;
    right: 20px;
    top: 0;
  }
  .slideBar .panel{
    background: #fff;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .slideBar .panelHeader{
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
  .panel_inner .recentAll{
    list-style: none;
    margin: -5px 0;
  }
  .panel_inner .recentAll>li{
    line-height: 30px;
    font-size: 14px;
    color: #778087;
    overflow: hidden; /*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    white-space: nowrap;/*强制不换行*/
  }
</style>
