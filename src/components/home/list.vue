<!--  -->
<template>
  <div class="listBox">
    <div class="top">
      <div class="radius"></div>
      <div class="flg">
        <a href="#">榜单</a>
      </div>
      <div class="more">
        <a href="#">更多 ></a>
      </div>
    </div>
    <div class="cont">
      <dl>
        <dt>
          <div class="img">
            <a href="#">
              <img class="j-img" :src="list1.imgUrl" />
            </a>
          </div>
          <div class="tit">
            <a href>
              <h3>{{list1.name}}</h3>
            </a>
            <div class="btn">
              <a href>
                <i class="iconfont icon-bofang"></i>
              </a>
              <a href>
                <i class="iconfont icon-shoucang"></i>
              </a>
            </div>
          </div>
        </dt>
        <dd>
          <ol class="list1">
            <li v-for="(item, index) in list1[0]" :key="item.id">
              <span>{{index+1}}</span>
              <a href="#">{{item.name}}</a>
              <div class="box">
                <a href>
                  <i class="iconfont icon-bofang"></i>
                </a>
                <a href>
                  <i class="iconfont icon-icon-test"></i>
                </a>
                <a href>
                  <i class="iconfont icon-shoucang"></i>
                </a>
              </div>
            </li>
          </ol>
          <div class="smore">
            <a href>查看全部 ></a>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <div class="img">
            <a href>
              <img class="j-img" :src="list2.imgUrl" />
            </a>
          </div>
          <div class="tit">
            <a href>
              <h3>{{list2.name}}</h3>
            </a>
            <div class="btn">
              <a href>
                <i class="iconfont icon-bofang"></i>
              </a>
              <a href>
                <i class="iconfont icon-shoucang"></i>
              </a>
            </div>
          </div>
        </dt>
        <dd>
          <ol class="list1">
            <li v-for="(item, index) in list2[0]" :key="item.id">
              <span>{{index+1}}</span>
              <a href>{{item.name}}</a>
              <div class="box">
                <a href>
                  <i class="iconfont icon-bofang"></i>
                </a>
                <a href>
                  <i class="iconfont icon-icon-test"></i>
                </a>
                <a href>
                  <i class="iconfont icon-shoucang"></i>
                </a>
              </div>
            </li>
          </ol>
          <div class="smore">
            <a href>查看全部 ></a>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <div class="img">
            <a href>
              <img class="j-img" :src="list3.imgUrl" />
            </a>
          </div>
          <div class="tit">
            <a href>
              <h3>{{list3.name}}</h3>
            </a>
            <div class="btn">
              <a href>
                <i class="iconfont icon-bofang"></i>
              </a>
              <a href>
                <i class="iconfont icon-shoucang"></i>
              </a>
            </div>
          </div>
        </dt>
        <dd>
          <ol class="list1">
            <li v-for="(item, index) in list3[0]" :key="item.id">
              <span>{{index+1}}</span>
              <a href>{{item.name}}</a>
              <div class="box">
                <a href>
                  <i class="iconfont icon-bofang"></i>
                </a>
                <a href>
                  <i class="iconfont icon-icon-test"></i>
                </a>
                <a href>
                  <i class="iconfont icon-shoucang"></i>
                </a>
              </div>
            </li>
          </ol>
          <div class="smore">
            <a href>查看全部 ></a>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: []
    };
  },

  components: {},
  created() {
    this.getInfo1();
    this.getInfo2();
    this.getInfo3();
  },
  methods: {
    getInfo1() {
      this.$axios
        .get("http://localhost:3000/top/list", {
          params: {
            idx: 3
          }
        })
        .then(res => {
          let arr = [];
          this.list1.name = res.data.playlist.name;
          this.list1.imgUrl = res.data.playlist.coverImgUrl;
          arr = res.data.playlist.tracks;
          arr = arr.splice(0, 10);
          this.list1.push(arr);
        });
    },
    
    getInfo2() {
      this.$axios
        .get("http://localhost:3000/top/list", {
          params: {
            idx: 0
          }
        })
        .then(res => {
          let arr = [];
          this.list2.name = res.data.playlist.name;
          this.list2.imgUrl = res.data.playlist.coverImgUrl;
          arr = res.data.playlist.tracks;
          arr = arr.splice(0, 10);
          this.list2.push(arr);
        });
    },

    getInfo3() {
      this.$axios
        .get("http://localhost:3000/top/list", {
          params: {
            idx: 2
          }
        })
        .then(res => {
          let arr = [];
          this.list3.name = res.data.playlist.name;
          this.list3.imgUrl = res.data.playlist.coverImgUrl;
          arr = res.data.playlist.tracks;
          arr = arr.splice(0, 10);
          this.list3.push(arr);
        });
    }
  }
};
</script>
<style scoped>
@import "../../public/iconfont/iconfont.css";

li {
  list-style: none;
}

.listBox {
  width: 790px;
  margin: 0 auto;
  padding: 20px 20px;
  box-sizing: border-box;
  border-left: 1px solid rgb(182, 182, 182);
  border-right: 1px solid rgb(182, 182, 182);
  border-bottom: 1px solid rgb(182, 182, 182);
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
.more {
  float: right;
  font-size: 13px;
}

.cont {
  display: flex;
  margin-top: 20px;
  border: 1px solid rgb(175, 175, 175);
  overflow: hidden;
}
dl {
  flex: 1;
  float: left;
  width: 230px;
  border-right: 1px solid rgb(175, 175, 175);
}
dl:nth-of-type(3) {
  border: 0;
}
dt {
  height: 100px;
  padding: 20px 0 0 20px;
  overflow: hidden;
  background-color: rgb(228, 228, 228);
}
dd {
  background-color: rgb(201, 201, 201);
}
dt .img {
  width: 80px;
  height: 80px;
  float: left;
  margin-right: 10px;
  box-shadow: 0 4px 2px rgb(107, 107, 107);
}
dt .img img {
  width: 100%;
  height: 100%;
}
h3 {
  font-size: 14px;
  padding-top: 10px;
  color: rgb(66, 66, 66);
  text-shadow: 1px 1px 1px rgb(184, 115, 115);
}
i {
  font-size: 12px;
  color: rgb(68, 68, 68);
}
.btn {
  margin-top: 7px;
}
.btn i {
  font-size: 20px;
}

ol {
  padding-left: 20px;
}
ol > li {
  position: relative;
  width: 185px;
  border-bottom: 1px solid rgb(145, 145, 145);
  padding: 5px 0;
  font-size: 13px;
}
ol > li:hover > a {
  text-decoration: underline;
}
ol > li:hover .box {
  display: block;
}
ol > li > span {
  display: inline-block;
  width: 16px;
  height: 16px;
  text-align: left;
  line-height: 16px;
  margin-right: 5px;
}
ol > li .box {
  display: none;
  position: absolute;
  top: 3px;
  right: 0;
}
ol > li i {
  float: right;
  margin-right: 5px;
}
.smore {
  height: 32px;
  line-height: 32px;
  background-color: rgb(224, 224, 224);
}
.smore > a {
  margin-right: 10px;
  font-size: 12px;
  float: right;
}
</style>