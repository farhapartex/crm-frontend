<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
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
              />
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
              />
            </div>
          </div>

          <div class="col-md-4 col-lg-4 col-sm-12">
            <div class="form-group">
              <label for="service_name"
                >Validity <span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm service-type">
                <option selected>-- Select Service Type --</option>
                <option value="1">3 Months</option>
                <option value="2">6 Months</option>
                <option value="3">HR</option>
              </select>
            </div>
          </div>

          <div class="col-md-4 col-lg-4 col-sm-12">
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
          </div>

          <div class="col-md-4 col-lg-4 col-sm-12">
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="isPrivatePackage"
                  @click="isPrivatePackage = !isPrivatePackage"
                />
                <label class="form-check-label" for="isPrivatePackage">
                  Private Package
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Save</button>
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

@Component({
  name: "PackageForm",
  components: { Multiselect },
})
export default class PackageForm extends Vue {
  isPrivatePackage: boolean = false;

  options: any = [
    { name: "Contacts", code: "vu" },
    { name: "Inventory", code: "js" },
    { name: "HR", code: "os" },
    { name: "Transaction", code: "transaction" },
    { name: "Sales", code: "sales" },
  ];
  value: any = "";

  addTag(newTag: any) {
    const tag = {
      name: newTag,
      code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
    };
    this.options.push(tag);
    this.value.push(tag);
  }

  mounted() {}
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>
