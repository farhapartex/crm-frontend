<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="alert alert-primary" role="alert" v-if="successMessage">
        {{ successMessage }}
      </div>
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-12 col-lg-12 col-sm-12"
            v-if="pageType == 'update'"
          >
            <div class="form-group">
              <p>
                <b>Service UID: {{ service.uid }}</b>
              </p>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for=""
                >Service Name <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                v-bind:class="{ 'is-invalid': serviceValidationObj.name }"
                id="service_name"
                placeholder="Service Name"
                v-model="service.name"
              />
              <div class="invalid-feedback">Please enter a service name.</div>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for=""
                >Service Type <span class="text-secondary">*</span></label
              >
              <select
                class="custom-select custom-select-sm service-type"
                v-model="service.service_type"
                v-bind:class="{
                  'is-invalid': serviceValidationObj.service_type,
                }"
              >
                <option disabled selected>-- Select Service Type --</option>
                <option
                  :value="serviceType.id"
                  v-for="(serviceType, index) in serviceTypeList"
                  :key="index"
                >
                  {{ serviceType.name }}
                </option>
              </select>
              <div class="invalid-feedback">Please select a service type.</div>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for=""
                >Volume Type <span class="text-secondary">*</span></label
              >
              <select
                class="custom-select custom-select-sm volumeType"
                v-model="service.volume_type"
                v-bind:class="{
                  'is-invalid': serviceValidationObj.volume_type,
                }"
              >
                <option disabled selected>-- Select Volume Type --</option>
                <option value="HOUR">Hour</option>
                <option value="LIMIT">Limit</option>
              </select>
              <div class="invalid-feedback">Please enter a volume type.</div>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="volumeAmount"
                >Volume Amount <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="service_name"
                placeholder="Hours/Limit"
                v-model="service.volume"
                v-bind:class="{ 'is-invalid': serviceValidationObj.volume }"
              />
              <div class="invalid-feedback">Please enter volume amount.</div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button
                class="btn btn-sm crm-btn"
                @click="createNewService"
                v-if="pageType == 'new'"
              >
                Save
              </button>
              <button
                class="btn btn-sm crm-btn"
                @click="updateObject"
                v-else-if="pageType === 'update'"
              >
                Update
              </button>
              <button
                class="btn btn-sm btn-warning ml-3"
                v-if="pageType == 'new'"
                @click="clearForm"
              >
                Reset
              </button>
              <router-link
                :to="{ name: 'serviceList' }"
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
  CREATE_SERVICE,
  FETCH_SERVICE_DETAIL,
  FETCH_SERVICE_TYPE_LIST,
  UPDATE_SERVICE_DETAIL,
} from "@/store/actions.names";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "ServiceForm",
  components: {},
})
export default class ServiceForm extends Vue {
  @Prop({ type: String }) pageType!: string;
  @Action(FETCH_SERVICE_TYPE_LIST) fetchServiceTypeList: any;
  @Action(CREATE_SERVICE) createService: any;
  @Action(FETCH_SERVICE_DETAIL) fetchServiceDetail: any;
  @Action(UPDATE_SERVICE_DETAIL) updateServiceDetail: any;

  serviceTypeList: any = [];
  successMessage: any = null;

  service: any = {
    name: null,
    service_type: null,
    volume_type: null,
    volume: null,
    uid: null,
  };

  serviceValidationObj: any = {
    name: false,
    service_type: false,
    volume_type: false,
    volume: false,
  };

  getServiceTypeList() {
    this.fetchServiceTypeList()
      .then((response: any) => {
        if (response.success) {
          this.serviceTypeList = response.data;
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  formValidation(obj: any) {
    // foundError = true means --> found validation error
    delete obj["uid"];
    let foundError = false;
    Object.keys(obj).forEach((element: any) => {
      if (obj[element] == null || obj[element] == "") {
        this.serviceValidationObj[element] = true;
        foundError = true;
      }
    });

    return foundError;
  }

  clearForm() {
    this.service = {
      name: null,
      service_type: null,
      volume_type: null,
      volume: null,
      uid: null,
    };
  }

  clearValidationObj() {
    this.serviceValidationObj = {
      name: false,
      service_type: false,
      volume_type: false,
      volume: false,
    };
  }

  createNewService() {
    if (this.formValidation(this.service) == false) {
      this.createService(this.service)
        .then((response: any) => {
          this.clearForm();
          this.clearValidationObj();
          this.successMessage =
            "Service '" + response.name + "' created successfully";
        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  }

  getServiceDetail(uid: any) {
    this.fetchServiceDetail(uid)
      .then((response: any) => {
        if (response.success) {
          this.service = response.data;
        }
      })
      .catch((e: any) => {
        this.clearForm();
      });
  }

  updateObject() {
    this.updateServiceDetail(this.service)
      .then((response: any) => {
        this.successMessage =
          "Service '" + response.name + "' update successfully";
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  mounted() {
    this.successMessage = null;
    this.getServiceTypeList();

    if (this.$route.name == "serviceUpdate") {
      this.getServiceDetail(this.$route.params.uid);
    }

    console.log(this.$route.name);

    //this.formValidation(this.service);
  }
}
</script>

<style>
</style>
