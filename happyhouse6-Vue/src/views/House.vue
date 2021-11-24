<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3><b-icon icon="house-fill"></b-icon> House Service</h3>
    <b-row>
      <b-col>
        <house-search-bar></house-search-bar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
        <house-detail />
      </b-col>
      <b-col cols="6" align="left">
        <house-list />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import HouseSearchBar from "@/components/house/HouseSearchBar.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseDetail from "@/components/house/HouseDetail.vue";
import { init } from "@/api/localGeo.js";

export default {
  name: "House",
  components: {
    HouseSearchBar,
    HouseList,
    HouseDetail,
  },
  created() {
    if (
      localStorage.getItem("coords") == null ||
      localStorage.getItem("coords") == "undefined"
    ) {
      this.init();
    }
  },
};
</script>
<style scoped>
.underline-orange {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(231, 149, 27, 0.3) 30%
  );
}
</style>
