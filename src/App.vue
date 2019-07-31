<template>
  <div id="app">
    <Home></Home>
    <router-view />
  </div>
</template>

<script>
import Home from "./components/home/Home"
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
  @import './public/css/normalize.css';
  body{
    height: 1500px;
  }
</style>
