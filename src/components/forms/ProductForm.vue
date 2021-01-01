<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3">
          <b>Product Information</b>
        </p>
        <div class="row">
          <div class="col-md-9 col-lg-9 col-sm-12">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="form-group">
                  <label for="product_name">Product Name</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="product_name"
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="category"
                    >Category <span class="text-secondary">*</span></label
                  >
                  <select class="custom-select custom-select-sm" id="category">
                    <option selected>Select Category</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Transgender</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="sub_category"
                    >Sub Category <span class="text-secondary">*</span></label
                  >
                  <select
                    class="custom-select custom-select-sm"
                    id="sub_category"
                  >
                    <option selected>Select Sub Category</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Transgender</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="email">Price (Per pcs.) </label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="email"
                    placeholder="Price (BDT)"
                  />
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="email">Current Stock amount</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="email"
                    placeholder="Stock amount"
                  />
                </div>
              </div>

              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="form-group">
                  <label for="productImage">Product Image</label>
                  <input
                    type="file"
                    class="form-control-file form-control-sm"
                    id="productImage"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="w-100 product-img d-block">
              <img
                src="../../assets/non-loading-img.png"
                class="w-100 d-block"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Save</button>
              <button class="btn btn-sm btn-warning ml-3">Reset</button>
              <router-link
                :to="{ name: 'productList' }"
                class="btn btn-sm btn-secondary ml-3"
                >Back</router-link
              >
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
  name: "ProductForm",
  components: {},
})
export default class ProductForm extends Vue {
  mounted() {}
}
</script>

<style>
.product-img {
  display: block;
}
</style>
