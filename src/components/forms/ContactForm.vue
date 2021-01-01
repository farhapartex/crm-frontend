<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3">
          <b>Contact Information</b>
        </p>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="first_name"
                >First Name <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="first_name"
                placeholder="First Name"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="last_name"
                >Last Name <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="mobile"
                >Primary Mobile <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="mobile"
                placeholder="mobile No"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="email">Email </label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Gender <span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Transgender</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="organisation_name">Organisation Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="organisation_name"
                placeholder="Name"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Present Address<span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Address"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Permanent Address <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Address"
              />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Save</button>
              <button class="btn btn-sm btn-warning ml-3">Reset</button>
              <router-link
                :to="{ name: 'contactList' }"
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
  name: "ContactForm",
  components: {},
})
export default class ContactForm extends Vue {
  mounted() {}
}
</script>

<style>
</style>
