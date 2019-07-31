<!-- 个性化推荐 -->
<template>
  <div class="hot">
    <div class="top">
      <div class="radius"></div>
      <div class="flg">
        <a href="#">个性化推荐</a>
      </div>
    </div>
    <div class="cont">
      <ul>
        <li class="not-left" v-for="item in infoList" :key="item.id">
          <div class="u-cover">
            <a href="#">
              <img
                :src="item.picUrl"
              />
            </a>
          </div>
          <p class="dec"><a href="">{{item.name}}</a></p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      infoList: []
    };
  },

  components: {},

  created() {
    this.getInfo()
  },

  methods: {
    getInfo() {
      this.$axios
        .get("http://localhost:3000/personalized")
        .then(res => {
          this.infoList = res.data.result;
          this.infoList = this.infoList.splice(0,4);
        });
    }
  }
};
</script>
<style scoped>
.hot {
  width: 790px;
  margin: 0 auto;
  padding: 0 20px;
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