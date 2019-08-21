<template>
  <div class="pagination">
    <ul class="pagination_box clearfix">
      <li @click='changeBtn'>首页</li>
      <li @click='changeBtn'>«</li>
      <li v-if="judge">...</li>
      <li :class="{currentPage: btn===currentPage}" v-for="btn in pageBtns"
        @click="changeBtn(btn)"
      >
        {{btn}}
      </li>
      <li @click='changeBtn'>»</li>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "Pagination",
    data(){
      return {
        pageBtns: [1, 2, 3, 4, 5, '...'],
        currentPage: 1,
        judge: false
      }
    },
    methods: {
      changeBtn(page){
        // 点击上一页、下一页和首页
        if(page === '...') return
        if(typeof page !== 'number'){
          switch (page.target.innerText) {
            case '»':
              $('li.currentPage').next().click()
              break;
            case '«':
              $('li.currentPage').prev().click()
              break;
            case '首页':
              this.pageBtns = [1, 2, 3, 4, 5, '...']
              this.changeBtn(1)
              break;
            default:
              break;
          }
          return
        }
        // 当前的页码等于传入的页码
        this.currentPage = page
        page > 4 ? this.judge = true : this.judge = false
        if(page === this.pageBtns[4]){
          // 移除第一个
          this.pageBtns.shift()
          // 在最后面添加一个
          this.pageBtns.splice(4, 0, this.pageBtns[3]+1)
        }else if(page === this.pageBtns[0] && page !== 1){
          // 在最前面添加一个
          this.pageBtns.unshift(this.pageBtns[0]-1)
          // 移除最后一个
          this.pageBtns.splice(5, 1)
        }
        this.$emit('handleList', this.currentPage)
      }
    }
  }
</script>

<style scoped>
  .pagination_box{
    list-style: none;
    padding: 12px 0 12px 10px;
    background: #fff;
  }
  .pagination_box li{
    height: 30px;
    width: 36px;
    text-align: center;
    float: left;
    font-size: 13px;
    line-height: 30px;
    color: #778087;
    border: 1px solid #ddd;
    padding: 0;
    margin-left: -1px;
    user-select:none;
    cursor: pointer;
  }
  .pagination_box li:first-child{
    border-radius: 3px 0 0 3px;
  }
  .pagination_box li:last-child{
    border-radius: 0 3px 3px 0;
  }
  .pagination_box li.currentPage {
    background-color: #f5f5f5;
    color: #80bd01;
  }
  .pagination_box li:hover{
    background-color: #f5f5f5;
  }
</style>
