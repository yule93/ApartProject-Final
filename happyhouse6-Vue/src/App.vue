<template>
  <div id="app">
    <navi-bar />
    <router-view />
    <alert-view />
  </div>
</template>

<script>
import NaviBar from "./components/layout/NaviBar.vue";
import AlertView from "./components/etc/alert.vue";

export default {
  name: "App",
  components: {
    NaviBar,
    AlertView,
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
</style>
