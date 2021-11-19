<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-alert show variant="danger" v-if="isRegisterError"
              >비어 있는 값이 있는지 확인하세요.</b-alert
            >
            <b-form-group label="이름:" label-for="username">
              <b-form-input
                id="username"
                v-model="user.username"
                required
                placeholder="이름 입력...."
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="아이디:"
              label-for="userid"
              @blur="checkDuplicate"
            >
              <b-form-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
              ></b-form-input>
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
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="이메일:"
              label-for="emailid"
              label-align-lg="left"
            >
              <b-form-input
                v-model="emailInfo.emailId"
                id="email"
                required
                placeholder="이메일 입력..."
              ></b-form-input>
              @
              <select
                class="form-control"
                id="emaildomain"
                name="emaildomain"
                v-model="emailInfo.emailDomain"
              >
                <option value="ssafy.com">싸피</option>
                <option value="naver.com">네이버</option>
                <option value="kakao.com">카카오</option>
                <option value="google.com">구글</option>
              </select>
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
      <b-col>
        <img src="@/assets/happyhouse.png" alt="뭐시기" style="width: 100%" />
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
    };
  },
  computed: {
    ...mapState(memberStore, ["isRegister", "isRegisterError"]),
  },
  methods: {
    ...mapActions(memberStore, ["getUserInfo", "userRegister"]),
    movePage() {
      this.$router.push({ name: "Home" });
    },
    moveToLogin() {
      this.$router.push({ name: "SignIn" });
    },
    async register() {
      this.user.email = "".concat(
        this.emailInfo.emailId,
        "@",
        this.emailInfo.emailDomain
      );
      await this.userRegister(this.user);
      console.log(this.isRegisterError);
      if (this.isRegister) {
        this.$router.push({ name: "SignIn" });
      }
    },
    async checkDuplicate() {},
  },
};
</script>

<style></style>
