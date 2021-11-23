<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>정보 수정</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-jumbotron>
          <template #header>My Page</template>

          <template #lead> 내 정보 확인페이지입니다. </template>

          <hr class="my-4" />

          <b-container class="mt-4">
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">아이디</b-col
              ><b-col cols="4" align-self="start">{{ userInfo.userid }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">이름</b-col
              ><b-col cols="4" align-self="start">{{
                userInfo.username
              }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-col cols="2" align-self="end">이메일</b-col
              ><b-col cols="4" align-self="start">{{ userInfo.email }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <b-row>
              <b-col cols="2"></b-col>
              <b-form-group label="비밀번호:" label-for="userpwd">
                <b-form-input
                  type="password"
                  id="userpwd"
                  v-model="user.userpwd"
                  required
                  placeholder="비밀번호 입력...."
                ></b-form-input>
              </b-form-group>
              <b-col cols="2"></b-col>
            </b-row>
          </b-container>
          <hr class="my-4" />

          <b-button variant="primary" href="#" class="mr-1">정보수정</b-button>
          <b-button variant="danger" href="#" class="m-1" @click="secession"
            >회원탈퇴</b-button
          >
        </b-jumbotron>
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
  name: "MemberEditPage",
  data() {
    return {
      user: {
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
    ...mapState(memberStore, ["isRegister", "userInfo", "isRegisterError"]),
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
      console.log(this.isRegister);
      if (this.isRegister) {
        this.$router.push({ name: "SignIn" });
      }
    },
    async checkDuplicate() {},
  },
};
</script>

<style lang="scss" scoped></style>
