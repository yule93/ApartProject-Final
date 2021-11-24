<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>정보 수정</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <img
          src="https://source.unsplash.com/900x1600/?nature,water"
          alt="뭐시기"
          style="height: 100%; width: 100%"
        />
      </b-col>
      <b-col cols="8">
        <b-jumbotron>
          <template #header>My Page</template>
          <template #lead> 내 정보 수정 페이지입니다. </template>
          <hr class="my-4" />
          <b-container class="mt-4">
            <b-row>
              <b-col cols="2" align-self="start" style="text-align: left"
                >아이디: </b-col
              ><b-col
                cols="10"
                align-self="start"
                style="text-align: right; margin-bottom: 20px"
                >{{ userInfo.userid }}</b-col
              >
            </b-row>
            <b-row>
              <b-col>
                <b-form class="text-left">
                  <b-alert show variant="danger" v-if="isRegisterError"
                    >비어 있는 값이 있는지 확인하세요.</b-alert
                  >
                  <b-form-group
                    label="이름:"
                    label-for="username"
                    label-cols="4"
                    label-cols-lg="4"
                    label-size="md"
                    label-align-sm
                  >
                    <b-form-input
                      id="username"
                      v-model="user.username"
                      required
                      placeholder="이름 입력...."
                      description="이름을 입력하세요."
                      size="sm"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="4"
                    label-size="md"
                    label="비밀번호:"
                    label-for="userpwd"
                  >
                    <b-form-input
                      size="sm"
                      type="password"
                      id="userpwd"
                      v-model="user.userpwd"
                      required
                      placeholder="비밀번호 입력"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label-cols="4"
                    label-cols-lg="4"
                    label-size="md"
                    label="이메일:"
                    label-for="emailid"
                    label-align-lg="left"
                  >
                    <b-form-input
                      size="sm"
                      v-model="emailInfo.emailId"
                      id="emailId"
                      required
                      placeholder="이메일 입력"
                    ></b-form-input>
                    @
                    <b-form-input
                      v-show="writeDomainFlag"
                      v-model="writeDomain"
                      required
                      size="sm"
                      id="directlyDomain"
                      name="directlyDomain"
                    ></b-form-input>
                    <b-form-select
                      size="sm"
                      class="form-control"
                      id="emaildomain"
                      name="emaildomain"
                      v-model="emailInfo.emailDomain"
                      :options="emailDomains"
                    >
                    </b-form-select>
                    <input type="hidden" v-model="user.email" />
                  </b-form-group>
                  <b-form-group> </b-form-group>
                </b-form>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3"></b-col>
            </b-row>
          </b-container>
          <hr class="my-4" />

          <b-button variant="primary" class="mr-1" @click="update"
            >정보수정</b-button
          >
          <b-button variant="danger" href="#" class="m-1" @click="secession"
            >회원탈퇴</b-button
          >
        </b-jumbotron>
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
        userid: null,
        username: null,
        userpwd: null,
        email: null,
      },
      emailInfo: {
        emailId: null,
        emailDomain: null,
      },
      emailDomains: [
        { value: null, text: "선택하세요." },
        { value: "self", text: "직접 입력하기" },
        { value: "ssafy.com", text: "싸피" },
        { value: "naver.com", text: "네이버" },
        { value: "google.com", text: "구글" },
        { value: "kakao.com", text: "카카오" },
      ],
      writeDomainFlag: false,
      writeDomain: null,
    };
  },
  computed: {
    ...mapState(memberStore, [
      "isRegister",
      "userInfo",
      "isRegisterError",
      "isModified",
      "isDeleted",
    ]),
  },
  watch: {
    "emailInfo.emailDomain": function () {
      if (this.emailInfo.emailDomain == "self") {
        this.writeDomainFlag = true;
      } else {
        this.writeDomainFlag = false;
      }
    },
  },
  methods: {
    ...mapActions(memberStore, ["getUserInfo", "userModify", "userDelete"]),
    movePage() {
      this.$router.push({ name: "Home" });
    },
    moveToLogin() {
      this.$router.push({ name: "SignIn" });
    },
    async update() {
      if (
        this.emailInfo.emailId != null &&
        this.emailInfo.emailDomain != null
      ) {
        this.user.email = "".concat(
          this.emailInfo.emailId,
          "@",
          this.emailInfo.emailDomain == "self"
            ? this.writeDomain
            : this.emailInfo.emailDomain
        );
      }
      this.user.userid = this.userInfo.userid;
      await this.userModify(this.user);

      if (this.isModified) {
        if (this.user.username != null)
          this.userInfo.username = this.user.username;
        if (this.user.email != null) this.userInfo.email = this.user.email;
        this.$router.push({ name: "MyPage" });
      }
    },
    async secession() {
      // console.log(this.userInfo.userid);
      await this.userDelete(this.userInfo.userid);
      if (this.isDeleted) {
        this.SET_IS_LOGIN(false);
        this.SET_LOGOUT(true);
        this.SET_USER_INFO(null);
        sessionStorage.removeItem("access-token");
        if (this.$route.path != "/") this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
