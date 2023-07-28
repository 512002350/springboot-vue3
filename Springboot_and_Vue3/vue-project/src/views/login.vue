<template>
  <div class="content">
      <el-form class="content_div">
        <el-text class="mx-1 title">登录</el-text>
        <el-form-item label="账号" class="item"  >
          <el-input v-model="userName" class="ipt"/>
        </el-form-item>
        <el-form-item label="密码"  class="item">
          <el-input v-model="passWord" class="ipt" />
        </el-form-item> 
        <div class="btn">
          <el-button type="primary" round @click="enroll_btn">注册</el-button>
          <el-button type="primary" round @click="login_btn">登录</el-button>
        </div>
      </el-form>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      userName: "",
      passWord: "",
      input1: "",
      a: 0,
    };
  }, 
  setup() {
    const router = useRouter();
    const goto = () => {
      router.push("/home");
      // 跳转页面
    };
    return {
      goto,
    };
  },
  methods: {
    login_btn() {
      axios({
        method: "post",
        url: "/api/user/login",
        params: {
          username: this.userName,
          password: this.passWord,
        },
      }).then((res) => {
        if (res.data.message != "SUCCESS") {
          return alert("用户不存在");
        }
        localStorage.setItem("token", res.data.data);
        window.sessionStorage.setItem('token',res.data.data)
        console.log(res);
        return this.goto();
      });
    },
    enroll_btn() {
      axios({
        method: "post",
        url: "/api/user/add",
        data: {
          username: this.userName,
          password: this.passWord,
          authority: 1,
        },
      });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.content{
  height: 100vh;
  background-color: #f2f2f2;
  position: relative;
}
.content_div {
  width: 50%;
  max-width: 800px;
  height: 40%;
  max-height: 400px;
  background-color: rgb(169, 231, 255);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  border-top: 1px solid #ffffff;
  box-shadow: darkgrey 10px 10px 30px 5px  ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item:nth-child(1){
  margin-bottom: 10px;
}
.ipt{
margin-bottom: 15px;
width: 225px;
}
.title{
  font-size: xx-large;
  margin-bottom: 30px;
}
.btn{
  margin-top: 20px;
}

</style>
