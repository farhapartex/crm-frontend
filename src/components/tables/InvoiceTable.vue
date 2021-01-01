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
                :to="{ name: 'invoiceCreate' }"
                class="btn btn-sm crm-btn w-100"
                >Create Invoice</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr class="table-crm">
          <th scope="col">Invoice ID</th>
          <th scope="col">Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Amount (BDT)</th>
          <th scope="col">No. of Prodouct</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>615241231.1232</td>
          <td>Farzana Yesmin</td>
          <td>01636990528</td>
          <td>2048</td>
          <td>2</td>
          <td><span class="text-success">Paid</span></td>
          <td>
            <p>
              <a href=""
                ><span class="edit-icon"
                  ><i class="fas fa-file-download"></i></span
              ></a>
              <span> | </span>
              <a href=""
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
              ></a>
            </p>
          </td>
        </tr>
        <tr>
          <td>615241231.1232</td>
          <td>Md. Nazmul Hasan</td>
          <td>01795369669</td>
          <td>5480</td>
          <td>3</td>
          <td><span class="text-success">Paid</span></td>
          <td>
            <p>
              <a href=""
                ><span class="edit-icon"
                  ><i class="fas fa-file-download"></i></span
              ></a>
              <span> | </span>
              <a href=""
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
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
  name: "InvoiceTable",
  components: {},
})
export default class InvoiceTable extends Vue {
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
