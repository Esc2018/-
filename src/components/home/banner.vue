<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: "1", imgUrl: require("../../assets/banner/1.jpg") },
        { id: "2", imgUrl: require("../../assets/banner/2.jpg") },
        { id: "3", imgUrl: require("../../assets/banner/3.jpg") }
      ]
    };
  },

  components: {},

  methods: {}
};
</script>
<style scoped>
.banner {
  padding: 10px 0 0 0;
  background-color: #242424;
}

.el-carousel__item h3 {
  color: #ff0000;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel--horizontal{
  overflow: hidden;
}

img {
  width: 100%;
}
</style>