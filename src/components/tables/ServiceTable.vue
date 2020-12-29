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
                :to="{ name: 'serviceCreate' }"
                class="btn btn-sm crm-btn w-100"
                >Create Service</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <table class="table table-borderless" v-if="serviceList.length > 0">
      <thead>
        <tr class="table-crm">
          <th scope="col">UID</th>
          <th scope="col">Name</th>
          <th scope="col">Service Type</th>
          <th scope="col">Limit/Hour</th>
          <th scope="col">Created At</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in serviceList" :key="index">
          <td>{{ service.uid }}</td>
          <td>{{ service.name }}</td>
          <td>{{ service.service_type_dict.name }}</td>
          <td>{{ service.volume }}</td>
          <td>{{ service.created_at | moment("DD-MM-YYYY HH:MM:SS") }}</td>
          <td>
            <span class="text-success" v-if="service.is_active">Active</span>
            <span class="text-danger" v-else>Deactive</span>
          </td>
          <td>
            <p>
              <router-link
                :to="{ name: 'serviceUpdate', params: { uid: service.uid } }"
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
              ></router-link>
              <span> | </span>
              <a href=""
                ><span class="text-danger"><i class="fas fa-trash"></i></span
              ></a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-secondary text-center" v-else role="alert">
      Service list is empty!
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { FETCH_SERVICE_LIST } from "@/store/actions.names";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "ServiceTable",
  components: {},
})
export default class ServiceTable extends Vue {
  @Prop({ type: String }) routeName!: string;
  @Action(FETCH_SERVICE_LIST) fetchServiceList: any;

  serviceList: any = [];
  customerList: any = [];

  getServiceList() {
    this.fetchServiceList({})
      .then((response: any) => {
        this.serviceList = response.results;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  mounted() {
    this.getServiceList();
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
