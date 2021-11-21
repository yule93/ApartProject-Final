<template>
  <div id="app">
    <navi-bar />
    <alert-view />
    <router-view />
    <div style="height: 100px; width: 100%"></div>
    <div style="height: 100px; width: 100%"></div>
    <footer-bar />
  </div>
</template>

<script>
import NaviBar from "./components/layout/NaviBar.vue";
import AlertView from "./components/etc/alert.vue";
import FooterBar from "./components/layout/FooterBar.vue";

export default {
  name: "App",
  components: {
    NaviBar,
    AlertView,
    FooterBar,
  },
};
</script>

<style>
a:hover {
  text-decoration: none;
  font-weight: bold;
}

a.router-link-exact-active {
  color: #42b983;
}

alert-view {
  float: left;
  position: fixed;
}

div#app {
  background-image: url(https://source.unsplash.com/BVoTTLwXvMQ/);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  max-width: 100%;
  max-height: 100%;
}
</style>
