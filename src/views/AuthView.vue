<template>
  <div class="base h-100" id="login-backside">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-7 col-lg-7 h-100">
          <div class="w-100 h-100"></div>
        </div>
        <div class="col-md-5 col-lg-5 pr-3 pl-3">
          <SignInForm v-if="showLogin"></SignInForm>
          <SignUpForm v-else></SignUpForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import SignInForm from "./SignInForm.vue";
import SignUpForm from "./SignUpForm.vue";

@Component({
  name: "AuthView",
  components: { SignInForm, SignUpForm },
})
export default class AuthView extends Vue {
  showLogin: boolean = false;

  userLogin() {}
  mounted() {}
}
</script>

<style>
.form-group label,
.form-group a,
.form-group p,
.formGroup label {
  font-size: 14px;
}

.formGroup {
  margin-bottom: 5px;
}
#login-box {
  width: 75%;
}

#signup-box {
  width: 90%;
}

.auth-box {
  background: #e6e6e6;
  border-radius: 10px;
  margin-top: 5rem;
}

#form-header-txt {
  color: #27399b;
}

#login-backside {
  background: url("../assets/loginpage-back.jpg");
  background-position: center center !important;
  background-size: cover !important;
}

.singin-btn {
  background: #3f51b5;
  color: #fff;
}

.singin-btn:hover {
  background: #333333;
  color: #fff;
}

#form-sub-header {
  color: #8c8c8c;
  font-weight: normal;
  font-size: 14px;
  margin-top: 16px;
}

#footer-text {
  margin-top: 20px;
}

#footer-text p {
  font-size: 11px;
  color: #8c8c8c;
}

.crm-btn {
  background: #4a4d70 !important;
  color: #fff !important;
  border-color: #4a4d70 !important;
}
</style>
