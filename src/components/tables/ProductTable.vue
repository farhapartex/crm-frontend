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
                :to="{ name: 'productCreate' }"
                class="btn btn-sm crm-btn w-100"
                >Create Product</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr class="table-crm">
          <th scope="col">Product ID</th>
          <th scope="col">Category</th>
          <th scope="col">Name</th>
          <th scope="col">Count</th>
          <th scope="col">Sold</th>
          <th scope="col">Price (Per Pcs.)</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8as57a6s4d65</td>
          <td>Grocery</td>
          <td>Godrej Aer Fresh Green Room Spray</td>
          <td>120</td>
          <td>12</td>
          <td>239 BDT</td>
          <td><span class="text-success">In Stock</span></td>
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
          <td>8as5GHYU0065</td>
          <td>Grocery</td>
          <td>Godrej Aer Cool Twist Surf Blue 45 ..</td>
          <td>230</td>
          <td>192</td>
          <td>239 BDT</td>
          <td><span class="text-success">In Stock</span></td>
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
          <td>8as5G0065</td>
          <td>Grocery</td>
          <td>Godrej Aer Cool Twist Surf Blue 45 ..</td>
          <td>230</td>
          <td>192</td>
          <td>239 BDT</td>
          <td><span class="text-success">In Stock</span></td>
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
          <td>8as5G0065</td>
          <td>Grocery</td>
          <td>Meril Baby Gel Toothpaste & Brush (Orange) ..</td>
          <td>200</td>
          <td>200</td>
          <td>239 BDT</td>
          <td><span class="text-danger">Out of Stock</span></td>
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
  name: "ProductTable",
  components: {},
})
export default class ProductTable extends Vue {
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
