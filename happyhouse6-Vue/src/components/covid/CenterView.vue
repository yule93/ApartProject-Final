<template>
  <div class="centerview">
    <h2>코로나19 예방접종센터 상세 페이지</h2>
    <table>
      <colgroup>
        <col width="150px" />
        <col width="500px" />
      </colgroup>
      <tr>
        <td class="theader">센터명</td>
        <td>{{ center.centerName }}</td>
      </tr>
      <tr>
        <td class="theader">센터유형</td>
        <td>{{ center.centerType }}</td>
      </tr>
      <tr>
        <td class="theader">주소</td>
        <td>{{ center.address }}</td>
      </tr>
      <tr>
        <td class="theader">센터시설명</td>
        <td>{{ center.facilityName }}</td>
      </tr>
      <tr>
        <td class="theader">전화번호</td>
        <td>{{ center.phoneNumber }}</td>
      </tr>
      <tr>
        <td class="theader">생성일</td>
        <td>{{ center.createdAt }}</td>
      </tr>
      <tr>
        <td class="theader">수정일</td>
        <td>{{ center.updatedAt }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { fixCenterList } from "../assets/centerList.js";

export default {
  name: "Centerview",

  data() {
    return {
      center: {},
    };
  },
  created() {
    const zipCode = this.$route.params.zipCode;
    var centers = fixCenterList.data;

    for (const center of centers) {
      if (center.zipCode == zipCode) {
        this.center = center;
        break;
      }
    }
  },
};
</script>

<style scoped>
table {
  background-color: black;
  color: white;
}
td {
  padding-left: 10px;
}
td.theader {
  text-align: center;
  font-weight: bold;
}
</style>
