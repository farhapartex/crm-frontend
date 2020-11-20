<template>
  <div class="mx-auto auth-box" id="signup-box">
    <div class="form-header mb-3 pr-4 pl-4 pt-3">
      <h4 class="text-center" id="form-header-txt">Start your free trial</h4>
      <h6 class="text-center" id="form-sub-header">Create your free account</h6>
    </div>
    <div class="form-box mt-4 pr-3 pl-3 w-100">
      <form @submit.prevent="userLogin">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="formGroup">
                <label for=""> <span>First Name</span> <span>*</span> </label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="first_name"
                />
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="formGroup">
                <label for=""> <span>Last Name</span> <span>*</span> </label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="last_name"
                />
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="formGroup">
                <label for=""> <span>Mobile</span> <span>*</span> </label>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  id="mobile"
                />
              </div>
            </div>

            <div class="col-md-6 col-lg-6 col-sm-12">
              <div class="formGroup">
                <label for=""> <span>Country</span> <span>*</span> </label>
                <select class="custom-select custom-select-sm" id="user_role">
                  <option selected>Select Country</option>
                  <option value="1">Bangladesh</option>
                </select>
              </div>
            </div>

            <div class="col-md-12 col-lg-12 col-sm-12 mt-3">
              <div class="formGroup">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="deactive_user"
                  />
                  <label class="form-check-label" for="deactive_user">
                    I have read & agree to the
                    <a href="#">terms & conditions</a>
                  </label>
                </div>
              </div>
            </div>

            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="form-group mt-3 w-100 mx-auto">
                <button class="btn btn-sm crm-btn w-100 mx-auto">
                  Sign Up for free trial
                </button>
              </div>
            </div>

            <div class="col-md-12 col-lg-12 col-sm-12">
              <div class="form-group overflow-hidden">
                <p class="float-left">
                  Have account already? <a href="#">Sign In</a>
                </p>
              </div>
            </div>

            <div class="col-md-12 col-lg-12 col-sm-12">
              <div id="footer-text" class="w-100 mt-2 pb-4">
                <p class="text-center">
                  All rights reserved by CRM classic 2020.
                  <a href="#">Visit Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "SignUpForm",
  components: {},
})
export default class SignUpForm extends Vue {
  userLogin() {}
  mounted() {}
}
</script>

<style>
</style>
