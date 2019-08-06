<!-- 搜索页 -->
<template>
  <div id="search">
    <Header></Header>
    <div class="bd">
      <div class="g-wrap">
        <!-- 搜索框 -->
        <el-form
          :inline="true"
          :model="songValidateForm"
          ref="songValidateForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="song">
            <el-input
              type="song"
              v-model="songValidateForm.song"
              autocomplete="off"
              placeholder="请输入歌曲名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('songValidateForm')">查询</el-button>
          </el-form-item>
        </el-form>

        <div id="m-search">
          <div class="snote">
            搜索“{{keywords}}”，找到
            <em>{{songLength}}</em>
            首单曲
          </div>

          <ul class="songList">
            <li>
              <a href="#">单曲</a>
            </li>
            <li>
              <a href="#">歌手</a>
            </li>
            <li>
              <a href="#">专辑</a>
            </li>
            <li class="timeLength">
              <a href="#">时长</a>
            </li>
          </ul>

          <ul class="info">
            <li v-for="item in songList" :key="item.id">
              <div class="ico fl flex1">
                <i class="iconfont icon-bofang fl"></i>
                <p class="fl name">{{item.name}}</p>
                <div class="fr icoList">
                  <i class="iconfont icon-icon-test"></i>
                  <i class="iconfont icon-shoucang"></i>
                  <i class="iconfont icon-zhuanfa"></i>
                  <i class="iconfont icon-download-1-copy"></i>
                </div>
              </div>
              <div class="singer fl flex1">
                <p>{{item.artists[0].name}}</p>
              </div>
              <div class="album fl flex1">
                <p>《{{item.album.name}}》</p>
              </div>
              <div class="time fl flex1">{{time(item.duration)}}</div>
            </li>
          </ul>

          <el-pagination
            background
            :total="songLength"
            :page-size="30"
            layout="prev, pager, next"
            :current-page.sync="currentPage"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
export default {
  data() {
    return {
      keywords: "",
      currentPage: 0,
      songValidateForm: {
        song: ""
      },
      songLength: 0,
      songList: []
    };
  },
  created() {
    this.keywords = this.$route.params.keywords;
    this.init(this.currentPage);
  },
  components: {
    Header,
    Footer
  },

  methods: {
    submitForm(formName) {
      this.currentPage = 0;
      this.songLength = 0;
      this.keywords = this.songValidateForm.song;
      console.log(this.keywords);
      this.init(this.currentPage);
    },
    init(offset) {
      let _this = this;
      //   _this.songList = [];
      //   _this.songLength = 0;
      // console.log(this.$route.params);
      this.$axios
        .get("http://localhost:3000/search", {
          params: {
            keywords: _this.keywords,
            offset: offset
          }
        })
        .then(function(res) {
          console.log(res);
          _this.songList = res.data.result.songs;
          _this.songLength = res.data.result.songCount;
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.init(this.currentPage - 1);
    },
    time: function(millSeconds) {
      let seconds = millSeconds / 1000;
      let minitus = Math.round(Math.floor(seconds / 60));
      let second = Math.round(seconds - 60 * minitus) + "";
      second = second.padStart(2, "0");
      return minitus + ":" + second;
    }
  }
};
</script>
<style scoped>
@import "../../public/iconfont/iconfont.css";
.fl {
  float: left;
}
.fr {
  float: right;
}
i.iconfont {
  font-size: 13px;
}
i:hover {
  cursor: pointer;
}
.bd {
  width: 1000px;
  min-height: 500px;
  margin: 0 auto;
  padding: 40px;
  background-color: rgb(255, 255, 255);
}
.g-wrap {
  text-align: center;
}
.el-input {
  width: 300px;
}

.snote {
  text-align: left;
  font-size: 12px;
  margin-bottom: 20px;
}
.snote > em {
  color: red;
}
.songList {
  display: flex;
  overflow: hidden;
  padding: 10px 0;
  border: 1px solid #ccc;
}
.songList > li {
  flex: 1;
  float: left;
}
.songList > li:not(.timeLength) {
  border-right: 1px solid #ccc;
}
.songList > li a {
  color: #000;
}

.info > li {
  display: flex;
  overflow: hidden;
  padding: 5px 3px;
  line-height: 20px;
  margin-bottom: 5px;
  box-sizing: border-box;
  background-color: rgb(255, 234, 217);
  font-size: 14px;
}
.info > li:hover .icoList {
  display: block;
}
.flex1 {
  flex: 1;
}
.ico {
  overflow: hidden;
  font-size: 13px;
}
.icon-bofang {
  margin-right: 5px;
}
.icoList {
  display: none;
}
.name {
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
.name:hover {
  cursor: pointer;
  text-decoration: underline;
}
.album > p {
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>