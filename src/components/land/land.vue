<template>
  <div id="Main">
      <el-button @click="test">提交</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    test() {
      const Params = {
        name: '23232323',
        passage: 'hedsewew'
      }
      this.$ajax({
                url: 'http://localhost:3001/api/user',
                method: 'get',
                contentType: "application/json; charset=utf-8",
                params: Params
            }).then( res => {
              console.log(444)
              console.log(res.data)
            }).catch(error=>{})
      // console.log(3)
            
    }
  }
}
</script>
<style lang="less" scoped>
#Main {
  .name {
    width: 100px;
    height: 100px;
    color: red;
    background-color: blue;
  }
}
</style>