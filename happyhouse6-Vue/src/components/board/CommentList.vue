<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1"> </b-row>
    <b-row style="background-color: white; margin-top: 10px">
      <b-col>
        <b-table :items="comments" :fields="fields"> </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getMemo } from "@/api/board";

export default {
  name: "Happyhouse6Commentlistrow",
  data() {
    return {
      comments: [],
      fields: [
        { key: "userid", label: "작성자", tdClass: "tdUser" },
        { key: "comment", label: "내용", tdClass: "tdContent" },
        { key: "memotime", label: "작성일", tdClass: "tdTime" },
      ],
    };
  },
  props: {
    articleno: Number,
  },
  mounted() {
    getMemo(
      this.$props.articleno,
      (response) => {
        //console.log(this.$props.articleno);
        this.comments = response.data;
        //console.log(this.comments);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    deleteComment() {},
    modifyComment() {},
  },
};
</script>

<style scoped>
.tdUser {
  width: 30px;
  text-align: center;
}
.tdContent {
  width: 1000px;
}
</style>
