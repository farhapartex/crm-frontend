<template>
  <div class="base h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-8 h-100" id="login-backside">
          <div class="w-100 h-100"></div>
        </div>
        <div class="col-4 pr-5 pl-5">
          <div class="p-4 pr-4 w-100" id="login-box">
            <div class="form-header mb-3">
              <h3 class="text-center" id="form-header-txt">
                <b>Sign in</b>
              </h3>
              <h6 class="text-center" id="form-sub-header">
                Welcome to CRM Classic
              </h6>
            </div>
            <div class="form-box mt-4">
              <form @submit.prevent="userLogin">
                <div class="form-group">
                  <label for="email">
                    <span class="mr-2">
                      <i class="far fa-envelope"></i>
                    </span>
                    <span>Email</span>
                  </label>
                  <input type="text" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="password">
                    <span class="mr-2">
                      <i class="fas fa-key"></i>
                    </span>
                    <span>Password</span>
                  </label>
                  <input type="password" class="form-control" id="password" />
                </div>
                <div class="form-group mb-5">
                  <p class="float-left">
                    <a href="#">Forgot password?</a>
                  </p>
                </div>
                <div class="form-group mt-5">
                  <button class="btn w-100 singin-btn">Sign In</button>
                </div>
              </form>
            </div>

            <div id="footer-text">
              <p class="text-center">
                All rights reserved by CRM classic 2020.
                <a href="#">Visit Us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "SignInBase",
  components: {},
})
export default class SignInBase extends Vue {
  userLogin() {}
  mounted() {}
}
</script>

<style>
#login-box {
  background: #e6e6e6;
  width: 92%;
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
</style>
