<!-- 我的音乐 -->
<template>
  <div>
    <Header></Header>
    <div class="g_mymusic">
      <div class="mymusic">
        <div class="leftBox fl">
          <el-collapse>
            <el-collapse-item title="创建的歌单" name="1">
              <div
                class="list"
                v-for="item in playlist"
                :key="item.id"
                @click="show(item.id,item.name)"
              >
                <img class="fl" :src="item.coverImgUrl" alt />
                <div class="fl">
                  <p>{{item.name}}</p>
                  <p>{{item.trackCount}}首</p>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="rightBox fl">
          <div class="top">
            <img class="fl" :src="img" alt />
            <div class="cnt fl">
              <span>歌单</span>
              <h2>{{name}}</h2>
            </div>
          </div>
          <div class="bottom">
            <div class="tit">
              <h3 class="fl">歌曲列表</h3>
              <span>{{count}}首歌</span>
              <span class="fr">播放{{playCount}}次</span>
            </div>

            <div class="songList">
              <dl>
                <dt>歌曲标题</dt>
                <dt>歌手</dt>
                <dt>专辑</dt>
              </dl>
              <dl class="song">
                <dd v-for="item in playInfo" :key="item.id">
                  <p>{{item.name}}</p>
                  <p>{{item.ar[0].name}}</p>
                  <p>{{item.al.name}}</p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
export default {
  data() {
    return {
      idc: 0,
      img: "",
      name: "",
      count: 0,
      playCount: 0,
      playlist: [],
      playInfo: []
    };
  },

  components: {
    Header
  },
  mounted() {
    this.$store.state.userid = localStorage.getItem("userid");
    // console.log("我的音乐： ", this.$store.state.userid);
    var _this = this;
    this.init();
    setTimeout(function() {
      _this.show(_this.idc, _this.name);
    }, 500);
  },

  methods: {
    init() {
      var _this = this;
      this.$axios
        .get("http://localhost:3000/user/playlist", {
          params: {
            uid: this.$store.state.userid
          }
        })
        .then(function(res) {
          // console.log(res.data.playlist[0]);
          _this.playlist = res.data.playlist;
          _this.idc = res.data.playlist[0].id;
          _this.name = res.data.playlist[0].name;
          // console.log("id: ",_this.idc);
          // console.log(_this.name);
          //   _this.playInfo = res.data.playlist;
          //   console.log( _this.playInfo)
        })
        .catch(function(err) {
          // console.log("失败");
          console.log(err);
        });
    },

    show(id, name) {
      // console.log("id: ", id);
      var _this = this;
      this.$axios
        .get("http://localhost:3000/playlist/detail", {
          params: {
            id: id
          }
        })
        .then(function(res) {
          _this.img = res.data.playlist.coverImgUrl;
          _this.name = name;
          _this.count = res.data.playlist.trackCount;
          _this.playCount = res.data.playlist.playCount;
          _this.playInfo = res.data.playlist.tracks;
          // console.log(_this.playInfo);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.mymusic {
  width: 982px;
  height: 100px;
  margin: 0 auto;
}
.leftBox {
  width: 240px;
  height: 387px;
  /* padding: 20px 50px;
  box-sizing: border-box; */
  border: 1px solid #ccc;
  /* background-color: rgba(0, 0, 0, 0.05); */
}

.list {
  padding: 5px 10px;
  margin-bottom: 10px;
  overflow: hidden;
  background-color: rgb(235, 235, 235);
}
.list:hover {
  cursor: pointer;
}
.list > img {
  width: 45px;
  height: 45px;
  margin-right: 10px;
}

.rightBox {
  width: 740px;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
}
.rightBox img {
  width: 200px;
  height: 200px;
  margin-right: 20px;
}
.top {
  overflow: hidden;
}
.cnt > span:first-child {
  display: inline-block;
  width: 50px;
  height: 20px;
  background-color: red;
  color: #fff;
  text-align: center;
}
.cnt > span:nth-of-type(2) {
  font-size: 25px;
  line-height: 30px;
}

.tit {
  overflow: hidden;
}
.tit > h3 {
  margin-right: 15px;
}
.tit > span:nth-of-type(1) {
  position: absolute;
  margin-top: 7px;
  font-size: 13px;
}

.songList > dl:first-of-type {
  display: flex;
  margin: 15px 0;
  background-color: rgb(255, 225, 200);
}
.songList > dl dt {
  flex: 1;
  text-align: center;
  line-height: 50px;
}

.song > dd {
  display: flex;
  margin: 5px 0;
  line-height: 25px;
  background-color: rgb(243, 243, 243);
}
.song > dd > p {
  flex: 1;
  text-align: center;
}
</style>