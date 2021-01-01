<template>
  <div class="settingsBase w-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div class="card">
            <div class="card-header">Where You're Logged In</div>
            <div class="card-body">
              <ul>
                <li>
                  <p>
                    <span><i class="fas fa-desktop"></i></span>
                    <span class="ml-3">Linux - Dhaka Bangladesh</span>
                  </p>
                  <p>
                    Chrome -
                    <span class="text-success"><b>Active Now</b></span>
                  </p>
                </li>
                <li>
                  <p>
                    <span><i class="fas fa-mobile-alt"></i></span>
                    <span class="ml-3"
                      >Samsung Galaxy On7 Prime (2018) · Dhaka, Bangladesh</span
                    >
                  </p>
                  <p>
                    <span class="text-secondary">CRM App · 25 minutes ago</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span><i class="fas fa-mobile-alt"></i></span>
                    <span class="ml-3"
                      >Samsung Galaxy On7 Prime (2018) · Dhaka, Bangladesh</span
                    >
                  </p>
                  <p>
                    <span class="text-secondary">CRM App · 3 hours ago</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="card mt-5">
            <div class="card-header">Security</div>
            <div class="card-body">
              <ul>
                <li>
                  <router-link :to="{ name: 'staffUserPasswordReset' }">
                    <p>
                      <span><i class="fas fa-key"></i></span>
                      <span class="ml-2">Change Password</span>
                    </p>
                    <p class="text-secondary">
                      It's a good idea to use a strong password that you're not
                      using elsewhere
                    </p>
                  </router-link>
                </li>
              </ul>
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
  name: "SecurityView",
  components: {},
})
export default class SecurityView extends Vue {
  mounted() {}
}
</script>

<style>
.card-body ul {
  list-style: none;
  padding: 0px !important;
}

.card-body ul li {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 7px;
  padding-top: 7px;
}

.card-body ul li a {
  text-decoration: none;
}
</style>
