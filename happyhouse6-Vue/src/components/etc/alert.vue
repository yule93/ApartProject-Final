<template>
  <div>
    <b-alert
      dismissible
      variant="success"
      :show="showSuccess"
      class="content-cols-sm"
      style="width: 200px; float: right"
      id="successAlert"
      >로그인 성공</b-alert
    >
    <b-alert
      v-model="showDismissibleAlert"
      variant="danger"
      dismissible
      v-show="hidden"
    >
      Dismissible Alert!
    </b-alert>

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

export default {
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
      successCountDown: 3,
      showDismissibleAlert: false,
    };
  },
  computed: {
    ...mapState(["showSuccess"]),
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

<style scoped>
b-alert {
  animation-duration: 3s;
  animation-name: slidein;
}
</style>
