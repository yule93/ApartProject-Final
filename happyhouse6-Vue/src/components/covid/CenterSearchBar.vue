<template>
  <div class="search-bar">
    <div class="col-lg-6">
      <div class="input-group">
        <div class="input-group-btn">
          <button
            type="button"
            class="btn dropdown-button dropdown-toggle mr-2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Action
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="코로나 선별 진료소 검색"
        />
        <span class="input-group-btn">
          <button class="btn search-button" type="button">검색</button>
        </span>
        <b-button
          class="btn btn-outline-primary ml-1"
          type="button"
          @click="SET_NOW_POS_MAP"
          >현재 위치</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

const covidStore = "covidStore";

export default {
  name: "Centersearchbar",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapMutations(covidStore, ["SET_NOW_POS_MAP"]),
  },
};
</script>

<style scoped>
.search-bar {
  align-content: center;
  text-align: center;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[type="text"],
select.form-control {
  background: transparent;
  border: none;
  border-bottom: 1px solid #777777;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
  filter: invert(100%);
  color: black;
}

input[type="text"]:focus,
select.form-control:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.search-button:hover {
  background-color: #777777;
  color: white;
}
.search-button {
  color: white;
}

.dropdown-button {
  background-color: #5c5794;
  color: #ffffff;
}
</style>
