<!-- 热门推荐 -->
<template>
  <div class="hot">
    <div class="top">
      <div class="radius"></div>
      <div class="flg">
        <a href="#">热门推荐</a>
      </div>
      <ul class="list">
        <li v-for="item in classList" :key="item.name">
          <a href>{{item.name}}</a>
          <div></div>
        </li>
      </ul>
      <div class="more">
        <a href="#">更多 ></a>
      </div>
    </div>
    <div class="cont">
      <ul>
        <li class v-for="item in hotArr" :key="item.id">
          <div class="u-cover">
            <a href="#">
              <img :src="item.coverImgUrl" />
            </a>
          </div>
          <p class="dec">
            <a href>{{item.name}}</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// const axios = require("axios");
export default {
  data() {
    return {
      hotArr: [],
      classList: []
    };
  },
  mounted() {
    this.getInfo();
    this.getList();
  },
  components: {},

  methods: {
    getInfo() {
      this.$axios
        .get("http://localhost:3000/top/playlist?limit=8&order=hot")
        .then(res => {
          this.hotArr = res.data.playlists;
          // console.log(res.data.playlists);
        });
    },
    // 获取分类歌单
    getList() {
      this.$axios
        .get("http://localhost:3000/playlist/catlist")
        .then(res => {
          // console.log(res);
          this.classList = res.data.sub;
          this.classList = this.classList.splice(0,6);
        });
    }
  }
};
</script>
<style scoped>
.hot {
  width: 790px;
  margin: 0 auto;
  padding: 20px 20px;
  box-sizing: border-box;
  border-left: 1px solid rgb(182, 182, 182);
  border-right: 1px solid rgb(182, 182, 182);
}
.top {
  line-height: 20px;
  padding-bottom: 7px;
  overflow: hidden;
  border-bottom: 2px solid #c10d0c;
}
a {
  color: #000;
}
.radius {
  width: 15px;
  height: 15px;
  float: left;
  margin: 3px 5px;
  background-color: red;
  border-radius: 50%;
}
.top > .flg {
  float: left;
  font-size: 20px;
}
.list {
  padding: 1px 10px;
  float: left;
}
.list > li {
  position: relative;
  float: left;
  padding: 0 8px;
  font-size: 13px;
}
.list > li div {
  display: inline-block;
  width: 1px;
  height: 10px;
  margin: 0 0 0 8px;
  background-color: rgb(134, 134, 134);
}
.list > li:hover > a {
  text-decoration: underline;
}
.more {
  float: right;
  font-size: 13px;
}
.cont > ul {
  margin-top: 10px;
  overflow: hidden;
}
.cont li {
  float: left;
  width: 140px;
  height: 140px;
  margin-left: 62px;
  margin-bottom: 50px;
}
.cont li:nth-child(1) {
  margin-left: 0;
}
.cont li:nth-child(5) {
  margin-left: 0;
}
.cont li img {
  width: 100%;
  height: 100%;
}
.dec {
  font-size: 14px;
}
</style>