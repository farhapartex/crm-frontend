<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="alert alert-primary" role="alert" v-if="showSuccessMessage">
        {{ successMessage }}
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9 col-lg-9 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-lg-4 col-sm-12" v-if="isPrivatePackage">
                <div class="form-group">
                  <label for="service_name"
                    >Customer ID <span class="text-secondary">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="service_name"
                    placeholder="Customer ID"
                    v-model="packageModel.name"
                    v-bind:class="{ 'is-invalid': packageValidationObj.name }"
                  />
                  <div class="invalid-feedback">
                    Please enter a Customer ID.
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12" v-else>
                <div class="form-group">
                  <label for="service_name"
                    >Package Name <span class="text-secondary">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="service_name"
                    placeholder="Service Name"
                    v-model="packageModel.name"
                    v-bind:class="{ 'is-invalid': packageValidationObj.name }"
                  />
                  <div class="invalid-feedback">
                    Please enter a package name.
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="service_name"
                    >Validity <span class="text-secondary">*</span></label
                  >
                  <select
                    class="custom-select custom-select-sm service-type"
                    v-model="packageModel.validity"
                    v-bind:class="{
                      'is-invalid': packageValidationObj.validity,
                    }"
                  >
                    <option selected>-- Select Service Validity --</option>
                    <option
                      :value="validity.id"
                      v-for="(validity, index) in packagevalidityList"
                      :key="index"
                    >
                      {{ validity.amount }} {{ validity.validity_type }}
                    </option>
                  </select>
                  <div class="invalid-feedback">Please select validity.</div>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="service_name"
                    >Package Price <span class="text-secondary">*</span></label
                  >
                  <input
                    type="number"
                    class="form-control form-control-sm"
                    id="package_price"
                    placeholder="Price"
                    v-model="packageModel.price"
                    v-bind:class="{ 'is-invalid': packageValidationObj.price }"
                  />
                  <div class="invalid-feedback">Please enter pakage price.</div>
                </div>
              </div>

              <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="isPrivatePackage"
                      v-model="packageModel.is_private"
                      @click="isPrivatePackage = !isPrivatePackage"
                    />
                    <label class="form-check-label" for="isPrivatePackage">
                      Private Package
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="row">
              <!-- <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="form-group">
                  <label class="typo__label">Add Services</label>
                  <multiselect
                    v-model="value"
                    tag-placeholder="Add this as new tag"
                    label="name"
                    track-by="code"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                    :placeholder="'Select Servcies'"
                    @tag="addTag"
                  ></multiselect>
                </div>
              </div> -->

              <div class="col-md-12 col-lg-12 col-sm-12" id="service_List_box">
                <label for="">Select Services <span>*</span></label>
                <div
                  class="text-danger mb-1"
                  v-if="packageValidationObj.services"
                >
                  Please select services.
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="selectAll"
                    @click="selectAllService"
                    v-model="selectAll"
                  />
                  <label class="custom-control-label" for="selectAll"
                    ><b>Select All</b></label
                  >
                </div>
                <div
                  class="custom-control custom-checkbox"
                  v-for="(service, index) in serviceList"
                  :key="index"
                >
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    :id="service.uid"
                    v-model="serviceIds[index]"
                    @click="addServiceId(service.id, index)"
                  />
                  <label class="custom-control-label" :for="service.uid">{{
                    service.name
                  }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn" @click="createNewPackage">
                Save
              </button>
              <button class="btn btn-sm btn-warning ml-3">Reset</button>
              <router-link
                :to="{ name: 'packageList' }"
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
import Multiselect from "vue-multiselect";
import {
  CREATE_PACKAGE,
  FETCH_PACKAGE_VALIDITY,
  FETCH_SERVICE_LIST,
} from "@/store/actions.names";

@Component({
  name: "PackageForm",
  components: { Multiselect },
})
export default class PackageForm extends Vue {
  @Action(FETCH_PACKAGE_VALIDITY) fetchPackageValidity: any;
  @Action(FETCH_SERVICE_LIST) fetchServiceList: any;
  @Action(CREATE_PACKAGE) createPackage: any;

  isPrivatePackage: boolean = false;

  packagevalidityList: any = [];
  serviceList: any = [];
  serviceIds: any = [];
  selectAll: boolean = false;
  showSuccessMessage: boolean = false;
  successMessage: string = "Package created successfully";

  packageModel: any = {
    name: null,
    price: null,
    validity: null,
    is_private: false,
    services: [],
  };

  packageValidationObj: any = {
    name: false,
    price: false,
    validity: false,
    services: false,
  };
  value: any = "";

  // addTag(newTag: any) {
  //   const tag = {
  //     name: newTag,
  //     code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
  //   };
  //   this.options.push(tag);
  //   this.value.push(tag);
  // }

  addServiceId(id: any, index: any) {
    //this.serviceIds.push(id);
    this.serviceIds[index] = !this.serviceIds[index];
    //console.log(this.serviceIds);
  }

  selectAllService() {
    this.serviceIds = Array(this.serviceIds.length).fill(!this.selectAll);
    this.selectAll = !this.selectAll;
    //console.log(this.serviceIds);
  }

  getServiceList(payload: any) {
    this.fetchServiceList(payload)
      .then((response: any) => {
        this.serviceList = response.results;
        this.serviceIds = Array(this.serviceList.length).fill(false);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  getPackageValidityList() {
    this.fetchPackageValidity()
      .then((response: any) => {
        if (response.success) {
          this.packagevalidityList = response.data;
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  addServiceToModel() {
    for (let i = 0; i < this.serviceList.length; i++) {
      if (this.serviceIds[i]) {
        this.packageModel.services.push(this.serviceList[i].id);
      }
    }
  }

  formValidation(obj: any) {
    // foundError = true means --> found validation error
    //delete obj["is_private"];
    let foundError = false;
    Object.keys(obj).forEach((element: any) => {
      if (element == "is_private") {
        this.packageValidationObj[element] = false;
      } else if (
        obj[element] == null ||
        obj[element] == "" ||
        obj[element] === []
      ) {
        this.packageValidationObj[element] = true;
        foundError = true;
      } else {
        this.packageValidationObj[element] = false;
      }
    });

    return foundError;
  }

  clearForm() {
    this.packageModel = {
      name: null,
      price: null,
      validity: null,
      is_private: false,
      services: [],
    };
    this.serviceIds = Array(this.serviceList.length).fill(false);
    this.selectAll = false;
  }

  createNewPackage() {
    this.addServiceToModel();
    if (this.formValidation(this.packageModel) == false) {
      this.createPackage(this.packageModel)
        .then((response: any) => {
          this.showSuccessMessage = true;
          this.clearForm();
        })
        .catch((e: any) => {
          console.log(e);
        });
      console.log(this.packageModel);
    } else {
      console.log("Form is not valid");
    }
  }

  mounted() {
    this.getPackageValidityList();
    this.getServiceList({ is_active: true });
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
#service_List_box {
  font-size: 14px;
}
</style>
