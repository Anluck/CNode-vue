<template>
  <div class="article">
    <!--数据未返回时的loading-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/images/loading.gif" width="40">
    </div>
    <div v-else class="article_inner">
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul class="clearfix information">
          <li>• 发布于：{{post.create_at | formatDate}}</li>
          <li>• 作者：
            <router-link :to="{name: 'userinfo', params: {
              name: post.author.loginname
            }}">
              {{post.author.loginname}}
            </router-link>
          </li>
          <li>• {{post.visit_count}} 次浏览</li>
          <li>• 来自：{{post | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" class="topic_content markdown-body"></div>
      </div>
      <div class="replyContent">
        <div class="topbar">
          {{post.reply_count}} 回复
        </div>
        <div class="replySec" v-for="(reply, index) in post.replies">
          <div class="replyUp clearfix">
            <router-link :to="{name: 'userinfo', params: {
              name: reply.author.loginname
            }}">
              <img :src="reply.author.avatar_url">
            </router-link>
            <div class="user_info">
              <span class="reply_loginname">
                <router-link :to="{name: 'userinfo', params: {
                  name: reply.author.loginname
                }}">
                  {{reply.author.loginname}}
                </router-link>
              </span>
              <span>
                <span class="indexAndtime">{{index+1}}楼 • {{reply.create_at | formatDate}}</span>
              </span>
            </div>
            <span class="user_action" v-if="reply.ups.length>0">
              <i>❀</i> {{reply.ups.length}}
            </span>
          </div>
          <p v-html="reply.content" class="markdown-body replyMsg"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data(){
      return {
        isLoading: false,
        post: {}
      }
    },
    methods: {
      getArticleData(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then( (res) => {
            this.isLoading = false
            this.post = res.data.data
            // console.log(res.data.data)
          })
          .catch( (err) => {
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getArticleData()
    },
    watch: {
      '$route'(to, from){
        this.getArticleData()
      }
    }
  }
</script>

<style>
  @import url('../assets/css/markdown-github.css');
  .article{
    position: relative;
  }
  .loading {
    position: absolute;
    top: 300px;
    left: 50%;
  }
  .article_inner{
    margin-right: 300px;
  }
  .topic_header{
    padding: 10px;
    background: #fff;
    border-radius: 4px;
  }
  .topic_header .topic_title{
    font-size: 22px;
    font-weight: 700;
    color: #333;
    line-height: 28px;
    margin: 8px 0;
  }
  .topic_header .information{
    list-style: none;
  }
  .topic_header .information li{
    float: left;
    font-size: 12px;
    color: #999;
    line-height: 14px;
    margin: 3px 10px 13px 0;
  }
  .topic_content{
    border-top: 1px solid #e5e5e5;
    padding: 10px;
  }
  .topic_content p,
  .markdown-text p{
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    color: #333;
  }
  .markdown-text img{
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .markdown-text a{
    color: #08c;
  }
  .markdown-text li{
    font-size: 14px;
    line-height: 2em;
  }
  .replyContent{
    background: #fff;
    border-radius: 4px;
    margin-top: 15px;
  }
  .replyContent .topbar{
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 14px;
    color: #444;
    line-height: 20px;
    border-radius: 4px;
  }
  .replyContent .replySec{
    padding: 10px;
    border-top: 1px solid #f0f0f0;
  }
  .replyContent .replyUp img{
    width: 30px;
    height: 30px;
    border-radius: 2px;
    float: left;
  }
  .replyContent .replySec span{
    font-size: 12px;
  }
  .replyContent .replySec .user_info{
    float: left;
    margin-left: 10px;
    color: #999;
  }
  .replyContent .replySec .user_action{
    float: right;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    color: #999;
  }
  .user_action>i{
    font-size: 16px;
  }
  .replyContent .replySec .reply_loginname{
    color: #666;
    font-weight: 700;
  }
  .replyUp .user_info .indexAndtime{
    color: #08c;
  }
  .replyContent .replySec .replyMsg{
    margin-left: 40px;
  }
</style>
