<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img
            src="@/assets/ssafy_logo.png"
            class="d-inline-block align-middle"
            width="90px"
            alt="Kitten"
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link :to="{ name: 'Home' }" class="link"
              ><b-icon icon="house" font-scale="1"></b-icon> HOME</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'Board' }" class="link"
              ><b-icon icon="journal" font-scale="1"></b-icon>
              게시판</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'House' }" class="link"
              ><b-icon icon="house-fill" font-scale="1"></b-icon>
              아파트정보</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <b-navbar type="dark" variant="dark" class="ml-auto">
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              placeholder="Search"
              @click="showSuccessAlert"
            ></b-form-input>
            <b-button
              variant="outline-success"
              class="my-2 my-sm-0"
              @click="showSuccessAlert"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="people" font-scale="2"></b-icon>
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'SignUp' }" class="link"
                ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'SignIn' }" class="link"
                ><b-icon icon="key"></b-icon> 로그인</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NaviBar",
  methods: {
    ...mapActions(["showSuccessAlert"]),
  },
};
</script>

<style></style>
