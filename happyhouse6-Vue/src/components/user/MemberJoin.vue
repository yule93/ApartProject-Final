<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card class="text-center mt-3" style="" align="left">
          <b-form class="text-left" @submit.stop.prevent="register">
            <b-alert show variant="danger" v-if="isRegisterError"
              >비어 있는 값이 있는지 확인하세요.</b-alert
            >
            <b-form-group label="이름:" label-for="username">
              <b-form-input
                id="username"
                v-model="user.username"
                required
                placeholder="이름 입력...."
                description="이름을 입력하세요."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="아이디:" label-for="userid">
              <b-form-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
                @keyup="checkDuplicateId"
              ></b-form-input>
              <div :class="idCheckMsgColor">{{ idCheckMsg }}</div>
            </b-form-group>
            <b-form-group label="비밀번호:" label-for="userpwd">
              <b-form-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                placeholder="비밀번호 입력...."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호 확인:" label-for="pwdcheck">
              <b-form-input
                type="password"
                id="pwdcheck"
                required
                placeholder="비밀번호 재입력"
                v-model="confirmpassword"
                @blur="checkPassword"
              ></b-form-input>
              <div>{{ passwordCheckFlag }}</div>
            </b-form-group>
            <b-form-group
              label="이메일:"
              label-for="emailid"
              label-align-lg="left"
            >
              <b-form-input
                v-model="emailInfo.emailId"
                id="emailId"
                required
                placeholder="이메일 입력..."
              ></b-form-input>
              @
              <b-form-select
                class="form-control"
                id="emaildomain"
                name="emaildomain"
                v-model="emailInfo.emailDomain"
                :options="emailDomains"
              >
              </b-form-select>
              <input type="hidden" v-model="user.email" />
            </b-form-group>
            <b-form-group>
              <b-button
                type="button"
                variant="primary"
                class="m-1"
                @click="register"
                >회원가입</b-button
              >
              <b-button
                type="button"
                variant="success"
                class="m-1"
                @click="moveToLogin"
                >로그인</b-button
              >
              <b-button
                type="button"
                variant="warning"
                class="m-1"
                @click="movePage"
                >홈으로 가기</b-button
              >
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "MemberJoin",
  data() {
    return {
      user: {
        username: null,
        userid: null,
        userpwd: null,
        email: null,
      },
      emailInfo: {
        emailId: null,
        emailDomain: null,
      },
      emailDomains: [
        { value: null, text: "선택하세요." },
        { value: "ssafy.com", text: "싸피" },
        { value: "naver.com", text: "네이버" },
        { value: "google.com", text: "구글" },
        { value: "kakao.com", text: "카카오" },
      ],
      idCheckMsg: null,
      idCheckFlag: false,
      passwordCheckFlag: "비밀번호 확인이 비밀번호와 맞지 않습니다.",
      confirmpassword: null,
    };
  },
  computed: {
    ...mapState(memberStore, ["isRegister", "isRegisterError", "isDuplicated"]),
    idCheckMsgColor: function () {
      return {
        "red-text": !this.idCheckFlag,
        "blue-text": this.idCheckFlag,
      };
    },
  },
  methods: {
    ...mapActions(memberStore, ["getUserInfo", "userRegister", "idCheck"]),
    movePage() {
      this.$router.push({ name: "Home" });
    },
    moveToLogin() {
      this.$router.push({ name: "SignIn" });
    },
    checkPassword() {
      if (this.confirmpassword == this.user.userpwd) {
        this.passwordCheckFlag = "비밀번호 확인이 맞습니다.";
      }
    },
    async register() {
      var ckid = this.user.userid;
      if (ckid.length < 6 || ckid.length > 16) {
        this.idCheckMsg = "아이디는 6글자 이상, 16자 이하여야 합니다.";
      } else if (
        this.idCheckFlag &&
        !this.isDuplicated &&
        this.passwordCheckFlag == "비밀번호 확인이 맞습니다."
      ) {
        if (confirm("해당 정보로 등록하시겠습니까?")) {
          this.user.email = "".concat(
            this.emailInfo.emailId,
            "@",
            this.emailInfo.emailDomain
          );
          await this.userRegister(this.user);
          //console.log(this.isRegister);
          if (this.isRegister) {
            this.$router.push({ name: "SignIn" });
          }
        }
      }
    },
    async checkDuplicateId() {
      await this.idCheck(this.user.userid);
      var ckid = this.user.userid;
      if (ckid.length < 6 || ckid.length > 16) {
        this.idCheckFlag = false;
        this.idCheckMsg = "아이디는 6글자 이상, 16자 이하여야 합니다.";
      } else if (this.isDuplicated) {
        this.idCheckFlag = false;
        this.idCheckMsg = "중복되는 아이디입니다.";
      } else {
        this.idCheckFlag = true;
        this.idCheckMsg = "사용할 수 있는 아이디입니다.";
      }
    },
  },
};
</script>

<style>
.red-text {
  color: red;
}

.blue-text {
  color: blue;
}
</style>
