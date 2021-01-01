<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-3 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3">
          <b>Search Customer</b>
        </p>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <div class="form-group">
              <label class="sr-only">Customer ID</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="customer_id"
                placeholder="Customer ID"
              />
            </div>
          </div>

          <div class="col-auto">
            <div class="form-group">
              <label class="sr-only">Mobile</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="last_name"
                placeholder="Mobile"
              />
            </div>
          </div>

          <div class="col-auto">
            <div class="form-group">
              <button
                class="btn btn-sm crm-btn"
                @click="showPaymentForm = !showPaymentForm"
              >
                Search
              </button>
              <router-link
                :to="{ name: 'transactionList' }"
                class="btn btn-sm btn-secondary ml-3"
                >Back</router-link
              >
            </div>
          </div>
        </div>

        <!-- <div class="row mt-2">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Search</button>
              <router-link
                :to="{ name: 'transactionList' }"
                class="btn btn-sm btn-secondary ml-3"
                >Back</router-link
              >
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="shadow p-3 mb-3 bg-white rounded" v-if="showPaymentForm">
      <div class="container-fluid">
        <p class="mb-3">
          <b>Customer Payment Information</b>
        </p>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="">Customer ID</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="customer_id_disbales"
                value="7465as43a544rtT"
                disabled
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="">Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="mobile_disabled"
                value="Md Nazmul Hasan"
                disabled
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="">Current Package</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="mobile_disabled"
                value="Gold (8,700 BDT)"
                disabled
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="">Select Package</label>
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Package</option>
                <option value="1">Gold (4,500 BDT)</option>
                <option value="2">Silver (12,000 BDT)</option>
                <option value="3">Platinum (6,700 BDT)</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="">Payable amount (BDT)</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="payable_amount"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="">Payment Method</label>
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Payment Method</option>
                <option value="1">BKash</option>
                <option value="2">Invoice</option>
                <option value="3">Bank Transfer</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Submit</button>
              <router-link
                :to="{ name: 'transactionList' }"
                class="btn btn-sm btn-secondary ml-3"
                >Cancel</router-link
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
  name: "PaymentForm",
  components: {},
})
export default class PaymentForm extends Vue {
  showPaymentForm: boolean = false;
  mounted() {}
}
</script>

<style>
</style>
