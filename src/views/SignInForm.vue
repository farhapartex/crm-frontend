<template>
  <div class="p-4 pr-4 mx-auto auth-box" id="login-box">
    <div class="form-header mb-3">
      <h3 class="text-center" id="form-header-txt">
        <b>Sign in</b>
      </h3>
      <h6 class="text-center" id="form-sub-header">Welcome to CRM Classic</h6>
    </div>
    <div class="form-box mt-4 w-100">
      <form @submit.prevent="userLogin">
        <div class="form-group">
          <label for="email">
            <span class="mr-2">
              <i class="far fa-envelope"></i>
            </span>
            <span>Email</span>
          </label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="email"
            v-model="credentials.username"
          />
        </div>
        <div class="form-group">
          <label for="password">
            <span class="mr-2">
              <i class="fas fa-key"></i>
            </span>
            <span>Password</span>
          </label>
          <input
            type="password"
            class="form-control form-control-sm"
            id="password"
            v-model="credentials.password"
          />
        </div>
        <div class="form-group mb-5">
          <p class="float-left">
            <router-link :to="{ name: 'emailVerifyPasswordReset' }"
              >Forgot password?</router-link
            >
          </p>
        </div>
        <div class="form-group mt-5">
          <button class="btn btn-sm w-100 singin-btn">Sign In</button>
        </div>

        <div class="form-group overflow-hidden">
          <p class="float-left">
            New user?
            <router-link :to="{ name: 'signup' }"
              >Create Free Account</router-link
            >
          </p>
        </div>
      </form>
    </div>

    <div id="footer-text" class="w-100 mt-4">
      <p class="text-center">
        All rights reserved by CRM classic 2020.
        <a href="#">Visit Us</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { LOGIN } from "../store/actions.names";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/auth";

@Component({
  name: "SignInForm",
  components: {},
})
export default class SignInForm extends Vue {
  @Action(LOGIN) login: any;

  credentials: any = {
    username: "",
    password: "",
    grant_type: "password",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };

  userLogin() {
    console.log(this.credentials);
    this.login(this.credentials)
      .then((result: any) => {
        //this.$router.replace({ name: "dashboard" });
        //location.reload();
        this.$router.push({ name: "dashboard" });
      })
      .catch((e: any) => {
        console.log("Error");
      });
  }
  mounted() {}
}
</script>

<style>
</style>
