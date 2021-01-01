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
    <table class="table table-borderless">
      <thead>
        <tr class="table-crm">
          <th scope="col">User ID</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Role</th>
          <th scope="col">Join date</th>
          <th scope="col">Last Login</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as8das764a6s5das</td>
          <td>Einer Haladin</td>
          <td>01636990528</td>
          <td>Admin</td>
          <td>22nd Oct, 2020</td>
          <td>30th Nov'20 02:10:23</td>
          <td><span class="text-success">Active</span></td>
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

        <tr>
          <td>as8das764a6s5das</td>
          <td>Farzana Yesmin</td>
          <td>01521321521</td>
          <td>Admin</td>
          <td>01st Jan, 2020</td>
          <td>28th Nov'20 02:10:23</td>
          <td><span class="text-success">Active</span></td>
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

        <tr>
          <td>as8das764a6s5das</td>
          <td>Mubasshir Ahmed</td>
          <td>01842559820</td>
          <td>Sales</td>
          <td>01st Jan, 2020</td>
          <td>28th Nov'20 02:10:23</td>
          <td><span class="text-success">Active</span></td>
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "StaffUserTable",
  components: {},
})
export default class StaffUserTable extends Vue {
  @Prop({ type: String }) routeName!: string;

  packageList: any = [];
  customerList: any = [];

  mounted() {}
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
