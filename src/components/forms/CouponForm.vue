<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3">
          <b>Coupon Information</b>
        </p>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="code"
                >Code <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="code"
                placeholder="Coupon code"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="coupon_type"
                >Coupon Type <span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm" id="coupon_type">
                <option selected>Select Type</option>
                <option value="1">Percentage</option>
                <option value="2">Amount</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="mobile"
                >Amount <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="mobile"
                placeholder="Percentage/Fixed Amount"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="email">Total Count </label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Total no. of coupon"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="valid_from"
                >Valid From <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="valid_from"
                placeholder="Date"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="valid_till"
                >Valid Till <span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="valid_till"
                placeholder="Date"
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
                :to="{ name: 'couponList' }"
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
  name: "CouponForm",
  components: {},
})
export default class CouponForm extends Vue {
  mounted() {}
}
</script>

<style>
</style>
