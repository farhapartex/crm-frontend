<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3 text-label">
          <span><i class="fas fa-key"></i></span>
          <span class="ml-2"
            >It's a good idea to use a strong password that you're not using
            elsewhere</span
          >
        </p>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="current_password"
                >Current <span class="text-secondary">*</span></label
              >
              <input
                type="password"
                class="form-control form-control-sm"
                id="current_password"
                placeholder="Type your current password"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="new_password"
                >New <span class="text-secondary">*</span></label
              >
              <input
                type="password"
                class="form-control form-control-sm"
                id="new_password"
                placeholder="Type your new password"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="confirmNewPassword"
                >Confirm New <span class="text-secondary">*</span></label
              >
              <input
                type="password"
                class="form-control form-control-sm"
                id="confirmNewPassword"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <p class="mt-3 text-label">
          <a href="#">Forgot password?</a>
        </p>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Save</button>
              <button class="btn btn-sm btn-warning ml-3">Reset</button>
              <router-link
                :to="{ name: 'staffUserList' }"
                class="btn btn-sm btn-secondary ml-3"
                >Back</router-link
              >
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
  name: "UserPasswordResetForm",
  components: {},
})
export default class UserPasswordResetForm extends Vue {
  mounted() {}
}
</script>

<style>
.text-label {
  font-size: 15px;
}
</style>
