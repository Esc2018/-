<!--  -->
<template>
  <div class="nav">
      <div class="wrap">
          <ul>
              <li><a href="">推荐</a></li>
              <li><a href="">排行榜</a></li>
              <li><a href="">歌单</a></li>
              <li><a href="">主播电台</a></li>
              <li><a href="">歌手</a></li>
              <li><a href="">新碟上架</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>
<style scoped>
.nav {
    background-color: #C20C0C;
}
.wrap{
    width: 1134px;
    height: 34px;
    margin: 0 auto;
    padding: 0 180px;
    box-sizing: border-box;
}
.wrap ul li{
    width: 84px;
    height: 34px;
    line-height: 34px;
    float: left;
    text-align: center;
    font-size: 13px;
}
.wrap ul li:first-of-type{
    background-color: #9B0909;
}
.wrap ul li:hover{
    background-color: #9B0909;
}
.wrap ul li a{
    display: block;
}
</style>