<!--  -->
<template>
  <div class="footer">
    <div class="box">
      <div class="wrap">
        <div class="copy">
          <p>服务条款 | 隐私政策 | 版权投诉指引 | 意见反馈 |</p>
          <p>网易公司版权所有©1997-2019杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
          <p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
        </div>
        <ul class="enter">
          <li class="unit">
            <a href>
              <i class="iconfont icon-yonghurenzheng"></i>
              <p>用户认证</p>
            </a>
          </li>
          <li class="unit">
            <a href>
              <i class="iconfont icon-daren"></i>
              <p>达人</p>
            </a>
          </li>
          <li class="unit">
            <a href>
              <i class="iconfont icon-jiangli"></i>
              <p>赞赏</p>
            </a>
          </li>
          <li class="unit">
            <a href>
              <i class="iconfont icon-wei-"></i>
              <p>视频</p>
            </a>
          </li>
        </ul>
      </div>
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
@import "../../public/iconfont/iconfont.css";

.footer {
  margin-top: 15px;
  padding-top: 20px;
  background-color: rgb(235, 235, 235);
}
.box {
  width: 790px;
  height: 90px;
  margin: 0 auto;
  font-size: 12px;
}
.copy {
  width: 500px;
  float: left;
}
.copy > p {
  margin-bottom: 10px;
}

.enter {
  margin-top: 10px;
  float: right;
}
.unit i {
  font-size: 25px;
}
.unit {
  float: left;
  text-align: center;
  margin-left: 25px;
}
.unit a {
  color: rgb(68, 68, 68);
}
</style>