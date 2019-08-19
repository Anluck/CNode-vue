<template>
  <div class="postList">
    <!--数据未返回时的loading-->
    <div class="loading" v-if="isLoading">
      <img src="../assets/images/loading.gif" width="40">
    </div>
    <div v-else>
      <ul class="postList_header clearfix">
        <li class="active"><a href="javascript:;">全部</a></li>
        <li><a href="javascript:;">精华</a></li>
        <li><a href="javascript:;">分享</a></li>
        <li><a href="javascript:;">问答</a></li>
        <li><a href="javascript:;">招聘</a></li>
        <li><a href="javascript:;">客户端测试</a></li>
      </ul>
      <ul class="listMsg">
        <li v-for="list in lists" class="clearfix">
          <a href="javascript:;" class="author_img">
            <img :src="list.author.avatar_url" alt="">
          </a>
          <span class="reading">
            <span class="reply_count">{{list.reply_count}}</span>
            <span class="count_seperator">/</span>
            <span class="visit_count">{{list.visit_count}}</span>
          </span>
          <span :class="[{good: list.good === true}, {top: list.top === true},
            {topiclist_tab: list.good !== true && list.top !== true}]">
            {{list | tabFormatter}}
          </span>
          <span class="list_title">
            <router-link :to="{name: 'post_content', params: {
              id: list.id
            }}">
              {{list.title}}
            </router-link>
          </span>
          <span class="last_reply">{{list.last_reply_at | formatDate}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostList",
    data(){
      return {
        isLoading: false,
        lists: []
      }
    },
    methods: {
      getData(){
        this.$http.get('https://cnodejs.org/api/v1/topics', {
          params: {
            page: 1,
            limit: 30
          }
        }).then( (res) => {
          this.isLoading = false
          this.lists = res.data.data
        }).catch( (err) => {
          console.log(err)
        })
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getData()
    }
  }
</script>

<style>
  .loading {
    position: absolute;
    top: 300px;
    left: 50%;
  }
  .postList{
    position: relative;
    border-radius: 4px;
  }
  .postList_header{
    list-style: none;
    line-height: 24px;
    padding: 8px 10px 8px 0;
    background: #f6f6f6;
    vertical-align: top;
    border-radius: 4px 4px 0 0;
  }
  .postList_header li{
    float: left;
    margin: 0 10px;
  }
  .postList_header li>a{
    color: #80bd01;
    font-size: 14px;
    vertical-align: top;
  }
  .postList_header li>a:hover{
    color: #005580;
  }
  .postList_header li.active{
    background: #80bd01;
    padding: 0 8px;
    border-radius: 2px;
  }
  .postList_header li.active>a{
    color: #fff;
  }
  ul.listMsg{
    background: #fff;
    list-style: none;
  }
  ul.listMsg li{
    height: 30px;
    line-height: 30px;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
  }
  ul.listMsg li:hover{
    background: #f6f6f6;
  }
  /*ul.listMsg li:last-child{*/
    /*border: none;*/
  /*}*/
  .author_img{
    display: inline-block;
  }
  .author_img img{
    width: 30px;
    height: 30px;
    border-radius: 2px;
    vertical-align: top;
  }
  .reading{
    display: inline-block;
    width: 86px;
    margin-left: 8px;
  }
  .reading .visit_count{
    color: #999;
  }
  .reading .reply_count{
    color: #9e78c0;
  }
  .reading .count_seperator{
    color: #999;
    margin: 0 -2px;
  }
  .good,
  .top,
  .topiclist_tab{
    padding: 2px 4px;
    font-size: 12px;
    color: #fff;
    background: #80bd01;
    border-radius: 2px;
    margin-right: 10px;
  }
  .topiclist_tab{
    background: #e5e5e5;
    color: #999;
  }
  .list_title{
    color: #333;
  }
  .last_reply{
    float: right;
    text-align: right;
    color: #999;
    font-size: 12px;
  }
</style>
