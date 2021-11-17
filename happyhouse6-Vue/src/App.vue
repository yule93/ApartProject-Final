<template>
  <div id="app">
    <navi-bar />
    <router-view />
    <alert-window />
  </div>
</template>

<script>
import NaviBar from "./components/layout/NaviBar.vue";
import AlertWindow from "@/components/etc/alert.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NaviBar,
    AlertWindow,
  },
  computed: {
    ...mapState(["showSuccess"]),
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
