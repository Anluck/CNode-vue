<template>
  <div class="userInfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/images/loading.gif" width="40px" alt="">
    </div>
    <div class="userInfo_inner" v-else>
      <div class="homepage">
        <div class="homeHeader">主页</div>
        <section class="essential">
          <div class="clearfix">
            <img :src="userInfo.avatar_url" alt="">
            <span class="userName">{{userInfo.loginname}}</span>
          </div>
          <p class="userScore">{{userInfo.score}} 积分</p>
          <p>注册时间{{userInfo.create_at | formatDate}}</p>
        </section>
      </div>
      <div class="recently_created">
        <div class="homeHeader">最近创建的话题</div>
        <ul class="recentTopics recentAll">
          <li v-for="list in recentTopics">
            <router-link :to="{name: 'userinfo', params: {
              name: list.author.loginname
            }}">
              <img :src="list.author.avatar_url" alt="">
            </router-link>
            <span>
              <router-link :to="{name: 'post_content', params: {
                id: list.id
              }}">
                {{list.title}}
              </router-link>
            </span>
            <span class="list_time">{{list.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
      <div class="recently_in">
        <div class="homeHeader">最近参与的话题</div>
        <ul class="recentReplies recentAll">
          <li v-for="list in recentReplies">
            <router-link :to="{name: 'userinfo', params: {
              name: list.author.loginname
            }}">
              <img :src="list.author.avatar_url" alt="">
            </router-link>
            <span>
              <router-link :to="{name: 'post_content', params: {
                id: list.id,
                name: list.author.loginname
              }}">
                {{list.title}}
              </router-link>
            </span>
            <span class="list_time">{{list.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data(){
      return {
        isLoading: false,
        userInfo: {}
      }
    },
    methods: {
      getUserInfoData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then((res) => {
            this.isLoading = false
            this.userInfo = res.data.data
            // console.log(res.data.data)
          }).catch((err) => {
            console.log(err)
          });
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getUserInfoData()
    },
    computed: {
      recentTopics(){
        if(this.userInfo.recent_topics){
          return this.userInfo.recent_topics.splice(0, 5)
        }
      },
      recentReplies(){
        if(this.userInfo.recent_replies){
          return this.userInfo.recent_replies.splice(0, 5)
        }
      }
    },
    watch: {
      '$route'(to, from){
        this.isLoading = true
        this.getUserInfoData()
      }
    }
  }
</script>

<style>
  .userInfo{
    position: relative;
  }
  .loading {
    position: absolute;
    top: 300px;
    left: 50%;
  }
  .userInfo_inner{
    margin-right: 300px;
  }
  .userInfo_inner .homepage,
  .userInfo_inner .recently_created,
  .userInfo_inner .recently_in{
    background: #fff;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .userInfo_inner .homeHeader{
    line-height: 16px;
    color: #444;
    padding: 12px;
    background: #f6f6f6;
    border-radius: 4px 4px 0 0;
    font-size: 13px;
  }
  .essential{
    padding: 12px;
    color: #666;
    font-size: 14px;
  }
  .essential img{
    width: 40px;
    height: 40px;
    border-radius: 2px;
    float: left;
  }
  .essential .userName{
    font-size: 16px;
    color: #333;
    line-height: 20px;
    padding: 10px 0;
    margin-left: 10px;
    vertical-align: middle;
    float: left;
  }
  .essential .userScore{
    font-size: 14px;
    color: #666;
    line-height: 26px;
    margin: 10px 0;
  }
  .userInfo_inner .recentAll{
    list-style: none;
    padding: 0 12px;
  }
  .userInfo_inner .recentAll>li{
    line-height: 30px;
    padding: 10px 0;
    font-size: 14px;
    color: #778087;
    border-bottom: 1px solid #f0f0f0;;
    overflow: hidden; /*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    white-space: nowrap;/*强制不换行*/
  }
  .userInfo_inner .recentAll>li:last-child{
    border-bottom: none;
  }
  .recentAll>li img{
    width: 30px;
    height: 30px;
    border-radius: 2px;
    vertical-align: middle;
  }
  .recentAll>li span{
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    margin-left: 10px;
    color: #08c;
  }
  .recentAll>li .list_time{
    color: #999;
    font-size: 12px;
    float: right;
  }
</style>
