<template>
  <div class="table h-100">
    <!-- <div class="alert alert-secondary" role="alert">
      <p class="text-center">No customer found!</p>
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
                :to="{ name: 'couponCreate' }"
                class="btn btn-sm crm-btn w-100"
                >Create Coupon</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr class="table-crm">
          <th scope="col">Code</th>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Total</th>
          <th scope="col">Applied</th>
          <th scope="col">Validity</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>WINTER-20</td>
          <td>PERCENTAGE</td>
          <td>10</td>
          <td>30</td>
          <td>12</td>
          <td>30th Dec, 2020</td>
          <td>
            <span class="text-success"><b>Valid</b></span>
          </td>
          <td>
            <p>
              <a href=""
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
              ></a>
              <span> | </span>
              <a href=""
                ><span class="text-danger"><i class="fas fa-trash"></i></span
              ></a>
            </p>
          </td>
        </tr>
        <tr>
          <td>WINTER-MAC</td>
          <td>AMOUNT</td>
          <td>500</td>
          <td>30</td>
          <td>12</td>
          <td>30th Dec, 2020</td>
          <td>
            <span class="text-warning"><b>Invalid</b></span>
          </td>
          <td>
            <p>
              <a href=""
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
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
  name: "CouponTable",
  components: {},
})
export default class CouponTable extends Vue {
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
</style>
