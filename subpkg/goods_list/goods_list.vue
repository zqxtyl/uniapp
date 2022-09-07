<template>
  <view>
    <van-card :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`" v-for="item in goods"
      :key="item.goods_id" :price="item.goods_price|filters" :title="item.goods_name"
      :thumb='item.goods_small_logo||defaultPic'>
    </van-card>
  </view>
</template>

<script>
  import {
    getSearchGoods
  } from '@/api/goods.js'
  import toast from '@/utils/toast.js'
  export default {
    data() {
      return {
        // 请求参数对象
        queryObj: {
          // 查询关键词
          query: '',
          // 商品分类Id
          cid: '',
          // 页码值
          pagenum: 1,
          // 每页显示多少条数据
          pagesize: 10
        },
        goods: [],
        total: 0,
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        isLoading: false
      }
    },
    methods: {
      async getGoodsList(stop) {
        this.isLoading = true
        const {
          goods,
          total
        } = await getSearchGoods(this.queryObj)
        // console.log(res)
        this.isLoading = false
        this.goods = [...this.goods, ...goods]
        this.total = total
        stop && stop()
      }
    },
    onLoad({
      query
    }) {
      // console.log(query)
      this.queryObj.query = query
      this.getGoodsList()
    },
    onPullDownRefresh() {
      this.queryObj = {
        // 查询关键词
        query: this.queryObj.query = query,
        // 商品分类Id
        cid: '',
        // 页码值
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 10
      }
      this.goods = []
      this.total = 0
      this.getGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      if (this.isLoading) return
      if (this.queryObj.pagenum * this.queryObj.pagesize > this.total) return toast('没有更多数据了')
      this.queryObj.pagenum++
      this.getGoodsList()
    }
  }
</script>

<style lang="scss">

</style>
