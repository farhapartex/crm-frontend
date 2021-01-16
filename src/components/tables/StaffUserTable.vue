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
                :to="{ name: 'staffUserCreate' }"
                class="btn btn-sm crm-btn w-100"
                >Create User</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless" v-if="staffUserList.length > 0">
      <thead>
        <tr class="table-crm">
          <th scope="col">UID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
          <th scope="col">Role</th>
          <th scope="col">Join date</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(staffUser, index) in staffUserList" :key="index">
          <td>{{ staffUser.uid | truncate(25, "...") }}</td>
          <td>{{ staffUser.user.full_name }}</td>
          <td>{{ staffUser.user.email }}</td>
          <td>{{ staffUser.user.mobile }}</td>
          <td>{{ staffUser.user.role_detail.name }}</td>
          <td>
            {{ staffUser.user.date_joined | moment("DD-MM-YYYY") }}
          </td>
          <td>
            <span class="text-success" v-if="staffUser.user.is_active"
              >Active</span
            >
            <span class="text-danger" v-else>InActive</span>
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
    <div class="alert alert-secondary text-center" v-else role="alert">
      Staff user list is empty!
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { FETCH_STAFF_USER } from "@/store/actions.names";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "StaffUserTable",
  components: {},
})
export default class StaffUserTable extends Vue {
  @Prop({ type: String }) routeName!: string;
  @Action(FETCH_STAFF_USER) fetchStaffUserList: any;

  staffUserList: any = [];

  getStaffUserList(payload: any) {
    this.fetchStaffUserList(payload)
      .then((response: any) => {
        this.staffUserList = response.results;
        console.log(this.staffUserList);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  mounted() {
    this.getStaffUserList({});
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
