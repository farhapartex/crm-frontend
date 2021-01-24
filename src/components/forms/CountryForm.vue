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
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn" @click="createNewCountry">
                Save
              </button>
              <button class="btn btn-sm btn-warning ml-3" @click="clearForm">
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
import { CREATE_COUNTRY } from "@/store/actions.names";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "CountryForm",
  components: {},
})
export default class CountryForm extends Vue {
  @Action(CREATE_COUNTRY) createCountry: any;

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

  mounted() {}
}
</script>

<style>
</style>
