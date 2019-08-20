import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList.vue'
import Article from '../components/Article.vue'
import UserInfo from '../components/UserInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id',
      components: {
        main: Article
      }
    },
    {
      name: 'userinfo',
      path: '/user/:name',
      components: {
        main: UserInfo
      }
    }
  ]
})
