<template>
  <b-row
    class="m-2"
    @click="selectHouse"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
    style="
      background-color: rgba(255, 255, 255, 0.5);
      filter: invert(100%);
      padding: 0px 0;
    "
  >
    <b-col cols="2" class="text-center align-self-center">
      <b-img
        fluid
        src="https://source.unsplash.com/MP0bgaS_d1c/600x600"
        alt="Image 1"
        style="filter: invert(100%)"
      ></b-img>
    </b-col>
    <b-col cols="10" class="align-self-center" style="">
      [{{ house.일련번호 }}] {{ house.아파트 }}
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseListRow",
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    house: Object,
  },
  methods: {
    ...mapActions(houseStore, ["detailHouse"]),
    selectHouse() {
      // console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      this.detailHouse(this.house);
    },
    colorChange(flag) {
      this.isColor = flag;
      // this.
    },
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
