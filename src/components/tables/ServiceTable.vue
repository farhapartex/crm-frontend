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
                :to="{ name: 'serviceCreate' }"
                class="btn btn-sm crm-btn w-100"
                ><span class="mr-2"><i class="fas fa-plus"></i></span>
                <span>Create Service</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 offset-4">
            <div class="mr-3">
              <select
                class="custom-select custom-select-sm service-type"
                @change="onChangeServiceType($event)"
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
            </div>
          </div>
          <div class="col-3">
            <div class="mr-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search by uid, name, type etc.."
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
              <a
                href=""
                @click="singleObj = service"
                data-toggle="modal"
                data-target="#exampleModalCenter"
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

    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <span class="text-danger">Are you sure want to delete?</span>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-sm btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-sm btn-danger"
              @click="deleteObject"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import {
  DELETE_SERVICE_DETAIL,
  FETCH_SERVICE_LIST,
  FETCH_SERVICE_TYPE_LIST,
} from "@/store/actions.names";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "ServiceTable",
  components: {},
})
export default class ServiceTable extends Vue {
  @Prop({ type: String }) routeName!: string;
  @Action(FETCH_SERVICE_LIST) fetchServiceList: any;
  @Action(FETCH_SERVICE_TYPE_LIST) fetchServiceTypeList: any;
  @Action(DELETE_SERVICE_DETAIL) deleteServiceTypeList: any;

  serviceList: any = [];
  serviceTypeList: any = [];
  searchObject: any = {
    generic_search: null,
    service_type_id: null,
  };
  singleObj: any = null;

  getServiceList(payload: any) {
    this.fetchServiceList(payload)
      .then((response: any) => {
        this.serviceList = response.results;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

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

  deleteObject() {
    console.log(this.singleObj);
    this.deleteServiceTypeList(this.singleObj)
      .then((response: any) => {
        this.$router.go(0);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  onChangeServiceType(event: any) {
    this.searchObject.service_type_id = event.target.value;
  }

  onChangeGenericSearchText(event: any) {
    this.searchObject.generic_search = event.target.value;
  }

  searchData() {
    this.getServiceList(this.searchObject);
  }

  mounted() {
    this.getServiceTypeList();
    this.getServiceList({});
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
