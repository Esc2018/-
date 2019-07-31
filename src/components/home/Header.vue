<template>
  <div class="header">
    <div class="box">
      <h1 class="logo">
        <img src="../../assets/logo.png" alt />
        <a href="#">网易云音乐</a>
      </h1>

      <ul class="nav">
        <li>
          <a href>发现音乐</a>
        </li>
        <li>
          <a href>我的音乐</a>
        </li>
        <li>
          <a href>朋友</a>
        </li>
        <li>
          <a href>商城</a>
        </li>
        <li>
          <a href>音乐人</a>
        </li>
        <li>
          <a href>下载客户端</a>
        </li>
      </ul>

      <!-- 搜索框 -->
      <el-form ref="form" size="mini">
        <el-form-item>
          <el-input
            size="small"
            placeholder="音乐/视频/电台/用户"
            prefix-icon="el-icon-search"
            v-model="ipt"
            @keyup.enter.native="submit"
          ></el-input>
        </el-form-item>
      </el-form>

      <div class="login" ref="login">
        <el-dropdown size="small" split-button type="info">
          登录
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>手机号登录</el-dropdown-item>
            <el-dropdown-item>微信登录</el-dropdown-item>
            <el-dropdown-item>QQ登录</el-dropdown-item>
            <el-dropdown-item>新浪微博登录</el-dropdown-item>
            <el-dropdown-item @click.native="login">网易邮箱登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <!-- 登录后显示头像 -->
      <div class="demo-type avator" ref="avator">
        <el-dropdown>
          <div>
            <el-avatar :src="userImg"></el-avatar>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="loginBox" ref="back">
      <div class="showBox">
        <div class="top">
          <h5>邮箱注册</h5>
          <span href @click="bacgHome">X</span>
        </div>
        <div class="bottom">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重新输入</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("账号不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      }
    };
    return {
      ipt: "",
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: checkUserName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      userInfo: [],
      userImg:
        "http://p4.music.126.net/MHqYUiaS1xJ0DzY6u3P6zQ==/109951163850262587.jpg"
    };
  },

  components: {},

  methods: {
    submit() {
      axios
        .get("http://localhost:3000/search", {
          params: {
            keywords: this.ipt
          }
        })
        .then(function(res) {
          console.log(res);
        });
      console.log("提交！");
    },

    login() {
      this.$refs.back.style.display = "block";
    },

    submitForm(formName) {
      let _this = this;
      let username = this.ruleForm.username;
      let password = this.ruleForm.password;
      this.$axios
        .post("api/login", {
          email: username,
          password: password
        })
        .then(function(response) {
          console.log(response);
          _this.userInfo.userImg = response.data.profile.avatarUrl;
          // console.log(_this.$refs.login);
          _this.$refs.login.style.display = "none";
          _this.$refs.back.style.display = "none";
          _this.$refs.avator.style.display = "block";
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 点击X返回首页
    bacgHome() {
      this.$refs.back.style.display = "none";
    }
  }
};
</script>
<style scoped>
.header {
  /* width: 100%; */
  height: 70px;
  background-color: #242424;
}
.box {
  overflow: hidden;
  width: 1100px;
  height: 70px;
  margin: 0 auto;
}
.logo {
  float: left;
  margin: 0;
  padding: 15px 0;
}
.logo > img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
}
.logo > a {
  font-size: 20px;
  vertical-align: middle;
  color: rgb(235, 235, 235);
  text-decoration: none;
}

.nav {
  float: left;
  width: 600px;
  margin: 0 20px;
  overflow: hidden;
}
.nav > li {
  float: left;
  width: 80px;
  height: 70px;
  padding: 27px 5px;
  text-align: center;
}
.nav > li:first-of-type {
  background-color: #000;
}
.nav > li:hover {
  background-color: #000;
}
.nav > li a {
  color: rgb(207, 207, 207);
}

.el-form {
  float: left;
  width: 170px;
  height: 50px;
  margin-top: 20px;
}

.login {
  float: right;
  margin-top: 20px;
}

.avator {
  display: none;
  width: 40px;
  float: right;
  margin-top: 15px;
  margin-right: 30px;
}
.avator:hover {
  cursor: pointer;
}

.el-button-group .el-button--primary {
  background-color: #000 !important;
}

.loginBox {
  display: none;
  position: fixed;
  top: 0px;
  z-index: 999;
  width: 100%;
  height: 700px;
  background-color: rgb(0, 0, 0, 0.4);
}
.showBox {
  position: absolute;
  top: 200px;
  left: 500px;
  width: 500px;
  height: 300px;
  background-color: #fff;
  box-shadow: 3px 3px 5px rgb(100, 100, 100);
}
.showBox > .top {
  padding: 8px 10px;
  line-height: 20px;
  background-color: rgb(56, 56, 56);
  overflow: hidden;
  color: #fff;
}
.showBox > .top h5 {
  width: 100px;
  float: left;
}
.showBox > .top > span {
  float: right;
}
.showBox > .top > span:hover {
  cursor: pointer;
}

.bottom {
  width: 100%;
  height: 250px;
  padding: 30px 150px;
  box-sizing: border-box;
}
.demo-ruleForm {
  width: 200px;
}
</style>
