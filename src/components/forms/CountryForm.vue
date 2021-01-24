<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="alert alert-primary" role="alert" v-if="showSuccessMessage">
        {{ successMessage }}
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="first_name"
                >Name <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="name"
                placeholder="Name"
                v-model="countryModel.name"
              />
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12" v-if="pageType == 'update'">
            <div class="form-group">
              <label for="user_role">Status</label>
              <select
                class="custom-select custom-select-sm"
                id="user_role"
                v-model="countryModel.is_active"
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
                @click="createNewCountry"
                v-if="pageType == 'new'"
              >
                Save
              </button>
              <button
                class="btn btn-sm crm-btn"
                @click="updateForm"
                v-else-if="pageType == 'update'"
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
                :to="{ name: 'countryList' }"
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
  CREATE_COUNTRY,
  FETCH_COUNTRY_DETAILS,
  UPDATE_COUNTRY_DETAILS,
} from "@/store/actions.names";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "CountryForm",
  components: {},
})
export default class CountryForm extends Vue {
  @Prop({ type: String }) pageType!: string;
  @Action(CREATE_COUNTRY) createCountry: any;
  @Action(FETCH_COUNTRY_DETAILS) fetchCountryDetails: any;
  @Action(UPDATE_COUNTRY_DETAILS) updateCountryDetails: any;

  countryModel: any = {
    uid: null,
    name: null,
    is_active: null,
  };

  countryModelValidationObj: any = {
    name: false,
    uid: false,
    is_active: false,
  };
  successMessage: string = "";
  showSuccessMessage: boolean = false;

  formValidation(obj: any) {
    let formValid = true;
    Object.keys(obj).forEach((element: any) => {
      if (element == "uid" || element == "is_active") {
        this.countryModelValidationObj[element] = false;
      } else if (
        obj[element] == null ||
        obj[element] == "" ||
        obj[element] === []
      ) {
        this.countryModelValidationObj[element] = true;
        formValid = false;
      } else {
        this.countryModelValidationObj[element] = false;
      }
    });

    return formValid;
  }

  clearForm() {
    this.countryModel = {
      uid: null,
      name: null,
      is_active: null,
    };
  }

  getCountryDetails(uid: any) {
    this.fetchCountryDetails(uid)
      .then((response: any) => {
        this.countryModel = response.data;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  createNewCountry() {
    delete this.countryModel.uid;
    delete this.countryModel.is_active;

    //console.log(this.countryModel);

    this.createCountry(this.countryModel)
      .then((response: any) => {
        this.successMessage = this.countryModel.name + " created successfully";
        this.showSuccessMessage = true;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  updateForm(payload: any) {
    this.updateCountryDetails(this.countryModel)
      .then((response: any) => {
        this.successMessage = this.countryModel.name + " updated successfully";
        this.showSuccessMessage = true;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  mounted() {
    if (this.$route.name == "countryDetails") {
      this.getCountryDetails(this.$route.params.uid);
    }
  }
}
</script>

<style>
</style>
