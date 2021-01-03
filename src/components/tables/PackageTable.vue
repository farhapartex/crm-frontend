<template>
  <div class="table h-100">
    <!-- <div class="alert alert-secondary" role="alert">
      <p class="text-center">No service found!</p>
    </div> -->
    <div class="w-100 search-box mb-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 offset-7">
            <div class="mr-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search.."
              />
            </div>
          </div>
          <div class="col-2">
            <div class="">
              <router-link
                :to="{ name: 'packageCreate' }"
                class="btn btn-sm crm-btn w-100"
                >Create Package</router-link
              >
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
          <td>{{ packageObj.uid }}</td>
          <td>{{ packageObj.name }}</td>
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
              <a href=""
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
              ></a>
              <span> | </span>
              <a href=""
                ><span class="text-secondary"><i class="fas fa-eye"></i></span
              ></a>
              <span> | </span>
              <a href=""
                ><span class="text-danger"><i class="fas fa-trash"></i></span
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

  getPackageList() {
    this.fetchPackageList()
      .then((response: any) => {
        this.packageList = response.results;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  mounted() {
    this.getPackageList();
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
