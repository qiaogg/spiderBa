<template>
  <div id="Main">
    <div class="title">爬虫~大数据</div>
    <el-input v-model="search" class="search"></el-input>
       <el-button @click="toContent">开始采集</el-button>
    <div class="top">热门采集网站</div>
    <div class="top-content">
      <div v-for="item in topList"
        :key="item.content">
        <el-image
          style="width: 100px; height: 100px"
          :src="item.url"
          fit="contain"></el-image>
          <div class="text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      topList: [
        {url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F512_512%2Fa161898e7a3d341f92b7cde0f7202d82.png&refer=http%3A%2F%2Fgdown.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622285754&t=87ea380cd9fe48aed2423789176a16b4', text: '百度'},
        {url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F512_512%2Fa161898e7a3d341f92b7cde0f7202d82.png&refer=http%3A%2F%2Fgdown.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622285754&t=87ea380cd9fe48aed2423789176a16b4', text: '淘宝'},
        {url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F512_512%2Fa161898e7a3d341f92b7cde0f7202d82.png&refer=http%3A%2F%2Fgdown.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622285754&t=87ea380cd9fe48aed2423789176a16b4', text: '京东'},
        {url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F512_512%2Fa161898e7a3d341f92b7cde0f7202d82.png&refer=http%3A%2F%2Fgdown.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622285754&t=87ea380cd9fe48aed2423789176a16b4', text: '华为'}
      ]
    }
  },
  methods: {
    toContent() {
      this.$router.push({name:'Content', params: { search: this.search }})
    }
  }
}
</script>
<style lang="less" scoped>
#Main {
  .title {
    text-align: center;
    height: 80px;
    line-height: 80px;
  }
  .search {
    width: 500px;
    margin-left: 25%;
  }
  .top {
    margin: 20px;
    padding: 5px;
    border-left: 5px solid blue;
  }
  .top-content {
    height: 40vh;
    display: flex;
    margin: 50px;
    justify-content: space-between;
    .text {
      text-align: center;
      color: #909399;
    }
  }
}
</style>