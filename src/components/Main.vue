<template>
    <div>
        <el-container>
            <el-header>爬虫系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        class="el-menu-vertical-demo"
                     
                        router :default-active="$route.path">
                        <el-menu-item index="/Create">
                            <i class="el-icon-menu"></i>
                            <span slot="title">创建任务</span>
                        </el-menu-item>
                        <el-menu-item index="/List">
                            <i class="el-icon-document"></i>
                            <span slot="title">任务列表</span>
                        </el-menu-item>
                        <el-menu-item index="/Search">
                            <i class="el-icon-setting"></i>
                            <span slot="title">结果查询</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main height="500px">
                        <router-view></router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  .el-header {
      height: 10%;
  }
  
  .el-aside {
    background-color:#FFFFFF;
    color: #333;
    height: 92vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0px;
  }
</style>
