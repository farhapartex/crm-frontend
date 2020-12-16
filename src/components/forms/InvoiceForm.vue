<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-5 col-sm-12">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-12">
                <div class="form-group">
                  <label for="searchProduct">Search Product</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Search Product ..."
                  />
                </div>
              </div>

              <div class="col-md-12 col-lg-12 col-sm-12">
                <ul class="list-group">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Product A
                    <span class="badge badge-primary badge-pill">Grocery</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Product B
                    <span class="badge badge-primary badge-pill">Food</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center"
                  >
                    Product C
                    <span class="badge badge-primary badge-pill">Cloth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-7 col-sm-12">
            <div class="invoiceBox mx-auto">
              <p>Item List</p>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <td scope="col" style="width: 30%">Product Name</td>
                    <td scope="col" style="width: 20%">Count</td>
                    <td scope="col" style="width: 20%">Price Per</td>
                    <td scope="col" style="width: 20%">Total Price</td>
                    <td scope="col" style="width: 10%">Action</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product A</td>
                    <td>2</td>
                    <td>90</td>
                    <td>180</td>
                    <td>
                      <a href=""
                        ><span class="text-danger"
                          ><i class="fas fa-trash"></i></span
                      ></a>
                    </td>
                  </tr>
                  <tr>
                    <td>Product B</td>
                    <td>1</td>
                    <td>120</td>
                    <td>120</td>
                    <td>
                      <a href=""
                        ><span class="text-danger"
                          ><i class="fas fa-trash"></i></span
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="row mt-5">
                <div class="col-md-4 col-lg-4 col-sm-12">
                  <div class="form-group">
                    <select class="custom-select custom-select-sm">
                      <option selected>Discount Type</option>
                      <option value="1">Coupon</option>
                      <option value="2">Amount</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-5 col-lg-5 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Code/Amount"
                    />
                  </div>
                </div>

                <div class="col-md-3 col-lg-3 col-sm-12">
                  <div class="form-group">
                    <button class="btn btn-sm crm-btn w-100">Apply</button>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <div class="alert alert-info text-center" role="alert">
                    Create Invoice
                  </div>
                </div>

                <div class="col-md-6 col-lg-6 col-sm-12">
                  <div class="alert alert-info text-center" role="alert">
                    Total: 580 (BDT)
                  </div>
                </div>
              </div>
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

@Component({
  name: "InvoiceForm",
  components: {},
})
export default class InvoiceForm extends Vue {
  mounted() {}
}
</script>

<style>
.invoiceBox {
  width: 90%;
}
</style>
