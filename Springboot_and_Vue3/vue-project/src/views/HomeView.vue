<template>
  <div class="content">
    <div class="nav">
      <!--导航栏-->
      <div class="LOGO">龙源风电</div>
      <div>
        <div class="centerNav">中间导航栏</div>
        <div class="User">用户</div>
        <button @click="logout" class="out">退出</button>
      </div>
    </div>
    <div class="content_div">
      <div class="left_nav">
        <!--侧边导航栏-->
        <el-menu router  default-active="2" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>一级菜单</span>
            </template>
            <el-menu-item index="/data" >二级菜单</el-menu-item>
            <el-menu-item index="/ceshi">测试</el-menu-item>
          </el-sub-menu>
          <!-- 二级菜单 -->
          <el-menu-item index="2">
            <el-icon><Menu /></el-icon>
            <span>Navigator Two</span>
        </el-menu-item>
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="Body_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import axios from "axios";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
  name: "app",
  data() {
    return {};
  },
  components:{

  },
  methods:{
    logout() {
      //1.删除session中的数据
      window.sessionStorage.clear()
      //2.用户访问登录页面
      this.$router.push('/login')
    },
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

.nav {
  width: 100%;
  background-color: rgb(226, 244, 252);
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgb(122, 122, 122);
  display: flex;
}
.nav :nth-child(1) {
  width: 200px;
}
.nav > div:nth-child(2) {
  display: flex;
  flex: 1;
}
.LOGO {
  font-weight: bold;
  color: rgb(24, 165, 221);
  font-size: larger;
  padding-left: 40px;
}
.centerNav {
  flex: 1;
}
.User {
  width: 200px;
}
.content_div {
  display: flex;
}
.left_nav {
  width: 200px;
  min-height: calc(100vh - 60px);
  border-right: 1px solid rgb(122, 122, 122);
}
.Body_content {
  flex: 1;
  padding: 10px;
}
.out{
  width: 100px;
}
</style>
