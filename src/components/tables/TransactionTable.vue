<template>
  <div class="table h-100">
    <!-- <div class="alert alert-secondary" role="alert">
      <p class="text-center">No customer found!</p>
    </div> -->
    <div class="w-100 search-box mb-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 offset-1">
            <div class="mr-3">
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Year</option>
                <option
                  :value="year"
                  v-for="(year, index) in yearList"
                  :key="index"
                >
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-2">
            <div class="mr-3">
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Month</option>
                <option
                  :value="month['value']"
                  v-for="(month, index) in monthList"
                  :key="index"
                >
                  {{ month["name"] }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-3">
            <div class="mr-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search.."
              />
            </div>
          </div>
          <div class="col-2">
            <div class="mr-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Date.."
              />
            </div>
          </div>
          <div class="col-1">
            <div class="mr-3">
              <button class="btn btn-sm crm-btn w-100">Search</button>
            </div>
          </div>
          <div class="col-1">
            <div class="">
              <button class="btn btn-sm crm-btn w-100">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr class="table-crm">
          <th scope="col">Customer ID</th>
          <th scope="col">Name</th>
          <th scope="col">Ref.</th>
          <th scope="col">Amount</th>
          <th scope="col">Package</th>
          <th scope="col">Pay Method</th>
          <th scope="col">Pay Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>98798#$87a97axc</td>
          <td>Md Nazmul Hasan</td>
          <td>87a6sa76a4d</td>
          <td>12,000 BDT</td>
          <td>Gold</td>
          <td>Invoice</td>
          <td>11/03/2020 10:12:00</td>
          <td>
            <span class="text-success"><b>Paid</b></span>
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
  name: "TransactionTable",
  components: {},
})
export default class TransactionTable extends Vue {
  @Prop({ type: String }) routeName!: string;

  monthList: any = [
    { value: 1, name: "January" },
    { value: 2, name: "February" },
    { value: 3, name: "March" },
    { value: 4, name: "April" },
    { value: 5, name: "May" },
  ];

  yearList: any = [
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
  ];

  mounted() {}
}
</script>

<style>
.edit-icon {
  color: #4a4d70 !important;
}
</style>
