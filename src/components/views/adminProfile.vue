<template>
  <div class="adminProfile w-100">
    <div class="container-fluid">
      <div class="row">
        {{ logged_in_user_data }}
        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control form-control-sm" disabled />
          </div>
        </div>

        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control form-control-sm" disabled />
          </div>
        </div>

        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-group">
            <label for="">Username</label>
            <input type="text" class="form-control form-control-sm" disabled />
          </div>
        </div>

        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control form-control-sm" disabled />
          </div>
        </div>

        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-group">
            <label for="">Mobile</label>
            <input type="text" class="form-control form-control-sm" disabled />
          </div>
        </div>

        <div class="col-md-3 col-lg-3 col-sm-12">
          <div class="form-group">
            <label for="">Role</label>
            <input type="text" class="form-control form-control-sm" disabled />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { RETRIEVE_LOGGED_IN_USER_DATA } from "@/store/actions.names";
import { LOGGED_IN_USER_DATA } from "@/store/getters.names";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "AdminProfileView",
  components: {},
})
export default class AdminProfileView extends Vue {
  @Action(RETRIEVE_LOGGED_IN_USER_DATA) retrieve_user_data: any;
  @Getter(LOGGED_IN_USER_DATA) logged_in_user_data: any;

  get_user_data() {
    this.retrieve_user_data()
      .then((result: any) => {
        //this.$router.push("/auth/sign-in");
      })
      .catch((e: any) => {
        console.log("Error");
      });
  }

  mounted() {
    this.get_user_data();
    console.log(window.localStorage.getItem("user"));
  }
}
</script>

<style>
</style>
