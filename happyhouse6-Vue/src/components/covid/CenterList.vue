<template>
  <div class="centerlist">
    <h2>코로나19 예방접종센터 목록</h2>
    <div>
      <span>지역</span>
      <select v-model="select">
        <option value="">전체</option>
        <option value="서울특별시">서울특별시</option>
        <option value="인천광역시">인천광역시</option>
        <option value="경기도">경기도</option>
        <option value="강원도">강원도</option>
        <option value="충청남도">충청남도</option>
        <option value="충청북도">충청북도</option>
        <option value="광주광역시">광주광역시</option>
        <option value="경상남도">경상남도</option>
        <option value="경상북도">경상북도</option>
        <option value="대구광역시">대구광역시</option>
        <option value="부산광역시">부산광역시</option>
        <option value="제주광역시">제주광역시</option>
      </select>
    </div>
    <table>
      <colgroup>
        <col width="50px" />
        <col width="350px" />
        <col width="200px" />
        <col width="200px" />
      </colgroup>
      <tr>
        <th>번호</th>
        <th>센터명</th>
        <th>생성일</th>
        <th>수정일</th>
      </tr>
      <center-list-item
        v-for="(center, index) in filterCenterList(centerList, select)"
        :key="index"
        v-bind="centerList"
      ></center-list-item>
    </table>
  </div>
</template>

<script>
import { fixCenterList } from "../assets/centerList.js";
import CenterListItem from "../components/CenterListItem.vue";

export default {
  name: "Centerlist",
  components: {
    CenterListItem,
  },
  data() {
    return {
      centerList: [],
      select: "",
    };
  },
  created() {
    this.centerList = fixCenterList.data;
  },
  methods: {
    filterCenterList: function (centerList, select) {
      return centerList.filter(function (value) {
        if (select == "") return value.sido == value.sido;
        return value.sido == select;
      });
    },
  },
};
</script>

<style scoped>
table {
  background-color: black;
  color: white;
  text-align: center;
}
td {
  padding-left: 10px;
}
</style>
