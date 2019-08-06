<template>
  <div class="header">
    <div class="box">
      <router-link to="/">
        <h1 class="logo">
          <img src="../assets/logo.png" alt />
          <a href="#">网易云音乐</a>
        </h1>
      </router-link>

      <ul class="nav">
        <li>
          <router-link to="/">
            <a href>发现音乐</a>
          </router-link>
        </li>
        <li>
          <router-link to="music">
            <a href>我的音乐</a>
          </router-link>
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
      <el-form ref="form" size="mini" @submit.native.prevent>
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
            <el-avatar :src="userInfo.userImg"></el-avatar>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的主页</el-dropdown-item>
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>我的等级</el-dropdown-item>
            <el-dropdown-item>VIP会员</el-dropdown-item>
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>实名认证</el-dropdown-item>
            <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
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
      userInfo: {
        userImg: ""
      }
    };
  },

  components: {},

  created() {
    if (localStorage.getItem("userName") != null) {
      this.ruleForm.username = localStorage.getItem("userName");
      this.ruleForm.password = localStorage.getItem("password");
      this.submitForm(this.ruleForm);
    }
    // console.log("state:", this.$store.state);
  },

  methods: {
    submit() {
      this.$router.push({ name: "search", params: { keywords: this.ipt } });
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
          // console.log(response);
          localStorage.setItem("userName", username);
          localStorage.setItem("password", password);
          localStorage.setItem("userid", response.data.profile.userId);
          _this.userInfo.userImg = response.data.profile.avatarUrl;
          _this.$store.dispatch("getParamSync", response.data.profile.userId);
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

    // 退出登录
    exit() {
      let _this = this;
      this.$axios
        .post("api/logout")
        .then(function(response) {
          localStorage.clear();
          _this.$store.dispatch("getParamSync", 0);
          _this.ruleForm.username = "";
          _this.ruleForm.password = "";
          _this.userInfo.userImg = "";
          _this.$refs.login.style.display = "block";
          _this.$refs.avator.style.display = "none";
          _this.$router.push({ path: "/" });
        })
        .catch(function(error) {
          console.log(error);
        });
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
  border-bottom: 4px solid #c20c0c;
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
  width: 85px;
  height: 70px;
  padding: 0 5px;
  text-align: center;
}
.nav > li a.router-link-exact-active {
  background-color: #000;
}
.nav > li:hover {
  background-color: #000;
}
.nav > li a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 70px;
  color: rgb(255, 255, 255);
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
.el-dropdown-menu {
  width: 120px;
  text-align: center;
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
