<template>
  <div class="p-4 pr-4 mx-auto auth-box" id="login-box">
    <div class="form-header mb-3">
      <h3 class="text-center" id="form-header-txt">
        <b>Password Reset Link</b>
      </h3>
      <h6 class="text-center" id="form-sub-header">
        Provide your email to get reset link
      </h6>
    </div>
    <div class="form-box mt-4 w-100">
      <form @submit.prevent="userLogin">
        <div class="form-group">
          <label for="email">
            <span>Email</span>
          </label>
          <input type="text" class="form-control form-control-sm" id="email" />
        </div>
        <div class="form-group mt-4">
          <button class="btn btn-sm w-100 singin-btn">
            Get Password Reset Link
          </button>
        </div>

        <div class="form-group overflow-hidden">
          <p class="float-left">
            Already have an account?
            <router-link :to="{ name: 'signin' }">Login</router-link>
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

@Component({
  name: "EmailVerifyPasswordResetForm",
  components: {},
})
export default class EmailVerifyPasswordResetForm extends Vue {
  userLogin() {}
  mounted() {}
}
</script>

<style>
</style>
