<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="alert alert-primary" role="alert" v-if="showSuccessMessage">
        {{ successMessage }}
      </div>
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
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role">User Status</label>
              <select
                class="custom-select custom-select-sm"
                id="user_role"
                v-model="staffUserModel.is_active"
              >
                <option selected>-- Select Status --</option>
                <option value="true">Active</option>
                <option value="false">Deactive</option>
              </select>
              <div class="invalid-feedback">Please select user gender.</div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button
                class="btn btn-sm crm-btn"
                @click="createNewStaffUser"
                v-if="pageType == 'new'"
              >
                Save
              </button>
              <button
                class="btn btn-sm crm-btn"
                @click="updateStaffUser"
                v-else-if="pageType === 'update'"
              >
                Update
              </button>
              <button
                class="btn btn-sm btn-warning ml-3"
                @click="clearForm"
                v-if="pageType == 'new'"
              >
                Reset
              </button>
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
import {
  CREATE_STAFF_USER,
  FETCH_ROLE,
  FETCH_STAFF_USER_DETAIL,
  UPDATE_STAFF_USER_DETAIL,
} from "@/store/actions.names";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "StaffUserForm",
  components: {},
})
export default class StaffUserForm extends Vue {
  @Prop({ type: String }) pageType!: string;
  @Action(FETCH_ROLE) fetchRole: any;
  @Action(CREATE_STAFF_USER) createStaffUser: any;
  @Action(FETCH_STAFF_USER_DETAIL) fetchStaffUserDetail: any;
  @Action(UPDATE_STAFF_USER_DETAIL) updateStaffUserDetail: any;

  roleList: any = [];
  successMessage: string = "";
  showSuccessMessage: boolean = false;

  staffUserModel: any = {
    uid: null,
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    position: null,
    gender: null,
    role: null,
    is_active: null,
  };

  staffUserValidationObj: any = {
    first_name: false,
    last_name: false,
    email: false,
    mobile: false,
    position: false,
    gender: false,
    role: false,
    uid: false,
    is_active: false,
  };

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  formValidation(obj: any) {
    let formValid = true;
    //delete obj["uid"];
    //delete obj["is_active"];
    Object.keys(obj).forEach((element: any) => {
      if (element == "uid" || element == "is_active") {
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

  clearForm() {
    this.staffUserModel = {
      first_name: null,
      last_name: null,
      email: null,
      mobile: null,
      position: null,
      gender: null,
      role: null,
    };
  }

  createNewStaffUser() {
    if (this.formValidation(this.staffUserModel)) {
      //console.log("Form valid");
      let staffUser = {
        user: {
          first_name: this.staffUserModel.first_name,
          last_name: this.staffUserModel.last_name,
          email: this.staffUserModel.email,
          mobile: this.staffUserModel.mobile,
          is_staff: true,
          role: this.staffUserModel.role,
          gender: this.staffUserModel.gender,
        },
        position: this.staffUserModel.position,
      };

      this.createStaffUser(staffUser)
        .then((response: any) => {
          this.showSuccessMessage = true;
          this.successMessage = staffUser.user.email + " created successfully";
          this.clearForm();
        })
        .catch((e: any) => {
          console.log(e);
        });

      //console.log(staffUser);
    } else {
      console.log("Form invalid");
    }
  }

  updateStaffUser() {
    if (this.formValidation(this.staffUserModel)) {
      //console.log("Form valid");
      let staffUser = {
        user: {
          first_name: this.staffUserModel.first_name,
          last_name: this.staffUserModel.last_name,
          email: this.staffUserModel.email,
          mobile: this.staffUserModel.mobile,
          is_staff: true,
          role: this.staffUserModel.role,
          gender: this.staffUserModel.gender,
          is_active: this.staffUserModel.is_active,
        },
        position: this.staffUserModel.position,
        uid: this.staffUserModel.uid,
      };

      this.updateStaffUserDetail(staffUser)
        .then((response: any) => {
          this.showSuccessMessage = true;
          this.successMessage = staffUser.user.email + " update successfully";
          //this.clearForm();
        })
        .catch((e: any) => {
          console.log(e);
        });

      console.log(staffUser);
    } else {
      console.log("Form invalid");
    }
  }

  getStaffUserDetail(uid: any) {
    this.fetchStaffUserDetail(uid)
      .then((response: any) => {
        let data = response.data;
        this.staffUserModel.uid = data.uid;
        this.staffUserModel.first_name = data.user.first_name;
        this.staffUserModel.last_name = data.user.last_name;
        this.staffUserModel.email = data.user.email;
        this.staffUserModel.gender = data.user.gender;
        this.staffUserModel.mobile = data.user.mobile;
        this.staffUserModel.role = data.user.role;
        this.staffUserModel.position = data.position;
        this.staffUserModel.is_active = data.user.is_active;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  mounted() {
    this.getRoleList();
    this.showSuccessMessage = false;
    if (this.$route.name == "staffUserDetail") {
      this.getStaffUserDetail(this.$route.params.uid);
    }
  }
}
</script>

<style>
</style>
