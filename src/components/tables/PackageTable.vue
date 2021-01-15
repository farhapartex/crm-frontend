<template>
  <div class="table h-100">
    <!-- <div class="alert alert-secondary" role="alert">
      <p class="text-center">No service found!</p>
    </div> -->
    <div class="w-100 search-box mb-4">
      <div class="container-fluid">
        <div class="row mb-3">
          <div class="col-2 offset-10">
            <div class="">
              <router-link
                :to="{ name: 'packageCreate' }"
                class="btn btn-sm crm-btn w-100"
                ><span class="mr-2"><i class="fas fa-plus"></i></span
                ><span>Create Package</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 offset-7">
            <div class="mr-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search by uid, name.."
                @change="onChangeGenericSearchText($event)"
              />
            </div>
          </div>
          <div class="col-2">
            <div class="">
              <button class="btn btn-sm crm-btn w-100" @click="searchData">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr class="table-crm">
          <th scope="col">UID</th>
          <th scope="col">Name</th>
          <th scope="col">Used</th>
          <th scope="col">Service Count</th>
          <th scope="col">Validity</th>
          <th scope="col">Price</th>
          <th scope="col">Privacy</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(packageObj, index) in packageList" :key="index">
          <td>{{ packageObj.uid | truncate(25, "...") }}</td>
          <td>{{ packageObj.name }}</td>
          <td>0</td>
          <td>{{ packageObj.total_service }}</td>
          <td>
            {{ packageObj.validity_json.amount }}
            {{ packageObj.validity_json.validity_type }}
          </td>
          <td>{{ packageObj.price }} BDT</td>
          <td>
            <span v-if="packageObj.is_private">Private</span
            ><span v-else>Public</span>
          </td>
          <td>
            <span class="text-success" v-if="packageObj.is_active">Active</span>
            <span class="text-danger" v-else>Deactive</span>
          </td>
          <td>
            <p>
              <router-link
                :to="{ name: 'packageUpdate', params: { uid: packageObj.uid } }"
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
              ></router-link>
              <span> | </span>
              <a href=""
                ><span class="text-danger"><i class="fas fa-ban"></i></span
              ></a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { FETCH_PACKAGE_LIST } from "@/store/actions.names";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "PackageTable",
  components: {},
})
export default class PackageTable extends Vue {
  @Prop({ type: String }) routeName!: string;
  @Action(FETCH_PACKAGE_LIST) fetchPackageList: any;

  packageList: any = [];
  searchObject: any = {
    generic_search: null,
    service_type_id: null,
  };

  getPackageList(payload: any) {
    this.fetchPackageList(payload)
      .then((response: any) => {
        this.packageList = response.results;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  onChangeGenericSearchText(event: any) {
    this.searchObject.generic_search = event.target.value;
  }

  searchData() {
    this.getPackageList(this.searchObject);
  }

  mounted() {
    this.getPackageList({});
  }
}
</script>

<style>
.edit-icon {
  color: #4a4d70 !important;
}

.search-box .col-3,
.search-box .col-2 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
