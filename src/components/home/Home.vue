<template>
  <div>
    <Header></Header>
    <Recomd></Recomd>
    <Banner></Banner>
    <Hot></Hot>
    <perRce></perRce>
    <newDisc></newDisc>
    <List></List>
    <Footer></Footer>
    <router-view />
  </div>
</template>

<script>
import Header from "../Header";
import Recomd from "./recommend";
import Banner from "./banner";
import Hot from "./hotRec";
import perRce from "./perRecom";
import newDisc from "./newdisc";
import List from "./list";
import Footer from "../Footer";
export default {
  data() {
    return {};
  },

  components: {
    Header,
    Recomd,
    Banner,
    Hot,
    perRce,
    newDisc,
    List,
    Footer
  },

  methods: {}
};
</script>
<style scoped>
body {
  position: relative;
  width: 100%;
}
</style>