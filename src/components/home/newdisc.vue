<!-- 新碟上架  -->
<template>
  <div class="hot">
    <div class="top">
      <div class="radius"></div>
      <div class="flg">
        <a href="#">新碟上架</a>
      </div>
      <div class="more">
        <a href="#">更多 ></a>
      </div>
    </div>
    <div class="cont">
      <el-carousel height="185px" :autoplay="false" arrow="always">
        <el-carousel-item v-for="item in length" :key="item">
          <div class="list">
            <ul>
              <li v-for="list in infoList[item]" :key="list.name">
                <div class="imgbox">
                  <a href>
                    <img
                      class="j-img"
                      :src="list.picUrl"
                    />
                  </a>
                  <i class="iconfont icon-bofang"></i>
                </div>
                <p>
                  <a href="#">{{list.name}}</a>
                </p>
                <p>
                  <a href="#">{{list.subType}}</a>
                </p>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoList: [],
      length: 0
    };
  },

  components: {},
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$axios.get("http://localhost:3000/top/album?limit=30").then(res => {
        let length = res.data.albums.length;
        let arr = [];
        for (let i = 0; i < length; i++) {
          if ((i + 1) % 6 != 0) {
            arr.push(res.data.albums[i]);
          } else {
            this.infoList.push(arr);
            arr = [];
          }
        }
        this.length = this.infoList.length-1;
      });
    }
  }
};
</script>
<style scoped>
@import "../../public/iconfont/iconfont.css";
/* elementui */

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
.list li {
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

.cont {
  height: 185px;
  margin: 15px 0;
  background-color: rgb(243, 243, 243);
}
.list {
  width: 100%;
  padding: 25px 60px;
  box-sizing: border-box;
}
.list ul {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.list li {
  float: left;
  flex: 1;
  text-align: center;
}
.list li > p {
  width: 100px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
.list li p a {
  font-size: 10px;
  color: rgb(136, 136, 136);
}
.imgbox {
  margin-bottom: 5px;
  position: relative;
}
.imgbox img {
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 3px #adadad;
}
.imgbox i {
  display: none;
  position: absolute;
  bottom: 5px;
  right: 15px;
  color: #fff;
  font-size: 20px;
}
.imgbox:hover > i {
  display: block;
}
</style>