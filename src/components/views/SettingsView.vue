<template>
  <div class="settingsBase w-100">
    <div class="row grid mt-3 mb-2 pl-4 pr-3">
      <div class="col-4 settings-block">
        <div class="single-setting">
          <a href="#" class="d-block">
            <div class="setting-icon float-left">
              <span>
                <i class="fas fa-id-card-alt"></i>
              </span>
            </div>
            <div class="setting-content float-right">
              <h6>
                <b>System Profile</b>
              </h6>
              <p>Add system information</p>
            </div>
          </a>
        </div>
      </div>

      <div class="col-4 settings-block">
        <div class="single-setting">
          <router-link :to="{ name: 'staffUserList' }" class="d-block">
            <div class="setting-icon float-left">
              <span>
                <i class="fas fa-users-cog"></i>
              </span>
            </div>
            <div class="setting-content float-right">
              <h6>
                <b>Staff Users</b>
              </h6>
              <p>Add/Update system user</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="col-4 settings-block">
        <div class="single-setting">
          <a href="#" class="d-block">
            <div class="setting-icon float-left">
              <span>
                <i class="fas fa-key"></i>
              </span>
            </div>
            <div class="setting-content float-right">
              <h6>
                <b>Password Reset</b>
              </h6>
              <p>Reset your account password</p>
            </div>
          </a>
        </div>
      </div>
      <div class="col-4 settings-block">
        <div class="single-setting">
          <a href="#" class="d-block">
            <div class="setting-icon float-left">
              <span>
                <i class="fas fa-asterisk"></i>
              </span>
            </div>
            <div class="setting-content float-right">
              <h6>
                <b>Terms & Condition</b>
              </h6>
              <p>System terms & condition</p>
            </div>
          </a>
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
  name: "SettingBase",
  components: {},
})
export default class SettingBase extends Vue {
  mounted() {}
}
</script>

<style>
.single-setting {
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 1.7rem;
  padding-bottom: 1.7rem;
  overflow: hidden;
}
.settings-block a {
  text-decoration: none;
  color: #595959;
}

.settings-block a h6 {
  color: #3f51b5;
}

.setting-icon {
  width: 20%;
  display: block;
  font-size: 25px;
}

.setting-content {
  width: 80%;
  display: block;
}
</style>
