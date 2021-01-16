<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3"><b>Basic Information</b></p>
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
                v-model="staffUserModel.first_name"
                v-bind:class="{
                  'is-invalid': staffUserValidationObj.first_name,
                }"
              />
              <div class="invalid-feedback">Please enter first name.</div>
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
                v-model="staffUserModel.last_name"
                v-bind:class="{
                  'is-invalid': staffUserValidationObj.last_name,
                }"
              />
              <div class="invalid-feedback">Please enter last name.</div>
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
                placeholder="Mobile No"
                v-model="staffUserModel.mobile"
                v-bind:class="{ 'is-invalid': staffUserValidationObj.mobile }"
              />
              <div class="invalid-feedback">Please enter mobile number.</div>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >User Role <span class="text-secondary">*</span></label
              >
              <select
                class="custom-select custom-select-sm"
                id="user_role"
                v-model="staffUserModel.role"
                v-bind:class="{ 'is-invalid': staffUserValidationObj.role }"
              >
                <option selected>-- Select User Role --</option>
                <option
                  :value="role.id"
                  v-for="(role, index) in roleList"
                  :key="index"
                >
                  {{ role.name }}
                </option>
              </select>
              <div class="invalid-feedback">Please select user role.</div>
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
                v-model="staffUserModel.email"
                v-bind:class="{ 'is-invalid': staffUserValidationObj.email }"
              />
              <div class="invalid-feedback">Please enter valid email.</div>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for=""
                >Position <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="position"
                placeholder="Position"
                v-model="staffUserModel.position"
                v-bind:class="{ 'is-invalid': staffUserValidationObj.position }"
              />
              <div class="invalid-feedback">Please enter user position.</div>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Gender <span class="text-secondary">*</span></label
              >
              <select
                class="custom-select custom-select-sm"
                id="user_role"
                v-model="staffUserModel.gender"
                v-bind:class="{ 'is-invalid': staffUserValidationObj.gender }"
              >
                <option selected>-- Select Gender --</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
              <div class="invalid-feedback">Please select user gender.</div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn" @click="createStaffUser">
                Save
              </button>
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
import { FETCH_ROLE } from "@/store/actions.names";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "StaffUserForm",
  components: {},
})
export default class StaffUserForm extends Vue {
  @Action(FETCH_ROLE) fetchRole: any;

  roleList: any = [];

  staffUserModel: any = {
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    position: null,
    gender: null,
    role: null,
  };

  staffUserValidationObj: any = {
    first_name: false,
    last_name: false,
    email: false,
    mobile: false,
    position: false,
    gender: false,
    role: false,
  };

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  formValidation(obj: any) {
    let formValid = true;
    Object.keys(obj).forEach((element: any) => {
      if (element == "is_private") {
        this.staffUserValidationObj[element] = false;
      } else if (
        obj[element] == null ||
        obj[element] == "" ||
        obj[element] === []
      ) {
        this.staffUserValidationObj[element] = true;
        formValid = false;
      } else {
        if (element == "email") {
          if (this.validateEmail(obj[element]) == true) {
            this.staffUserValidationObj[element] = false;
          } else {
            this.staffUserValidationObj[element] = true;
            formValid = false;
          }
        } else {
          this.staffUserValidationObj[element] = false;
        }
      }
    });

    return formValid;
  }

  getRoleList() {
    this.fetchRole()
      .then((response: any) => {
        this.roleList = response.data;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  createStaffUser() {
    if (this.formValidation(this.staffUserModel)) {
      console.log("Form valid");
    } else {
      console.log("Form invalid");
    }
  }
  mounted() {
    this.getRoleList();
  }
}
</script>

<style>
</style>
