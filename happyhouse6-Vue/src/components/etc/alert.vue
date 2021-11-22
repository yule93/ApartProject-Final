<template>
  <div>
    <b-alert
      dismissible
      variant="success"
      :show="isLogin && userInfo != null"
      class="content-cols-sm"
      style="width: 200px; float: right"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      id="successAlert"
      >로그인 성공</b-alert
    >

    <b-alert
      dismissible
      variant="danger"
      :show="isLogout && userInfo == null"
      class="content-cols-sm"
      style="width: 200px; float: right"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      id="successAlert"
      >로그아웃 성공</b-alert
    >

    <b-alert
      dismissible
      variant="success"
      :show="isRegister && userInfo == null"
      class="content-cols-sm"
      style="width: 200px; float: right"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      id="successAlert"
      >등록 성공</b-alert
    >

    <b-alert
      dismissible
      variant="secondary"
      :show="isDeleted && userInfo == null"
      class="content-cols-sm"
      style="width: 200px; float: right"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      id="successAlert"
      >삭제 성공</b-alert
    >
    <!-- <b-alert
      v-model="showDismissibleAlert"
      variant="danger"
      dismissible
      v-show="hidden"
    >
      Dismissible Alert!
    </b-alert> -->

    <!-- <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showview ? "visible" : "hidden" }})
    </b-button> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    };
  },
  computed: {
    ...mapState(memberStore, [
      "isLogin",
      "isLogout",
      "isRegister",
      "isDeleted",
      "userInfo",
    ]),
  },
  methods: {
    successCountDownChanged(successCountDown) {
      this.successCountDown = successCountDown;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style scoped></style>
