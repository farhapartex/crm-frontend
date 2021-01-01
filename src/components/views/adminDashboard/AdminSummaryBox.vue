<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-md-4 col-lg-4">
        <div class="w-100 shadow p-3 mb-5 bg-white rounded">
          <h5 class="">Income Status</h5>
          <!-- <h4 class="text-center pt-3 pb-3"><b>1,12,000 BDT</b></h4> -->
          <animated-number
            :value="todayIncomeValue"
            :formatValue="incomeStatusFormat"
            :duration="1300"
          />
          <p>Total Income: 23,00,000 BDT</p>
        </div>
      </div>

      <div class="col-md-4 col-lg-4">
        <div class="w-100 shadow p-3 mb-5 bg-white rounded">
          <h5 class="">Sales Status</h5>
          <animated-number
            :value="todaySalesValue"
            :formatValue="salesStatusFormat"
            :duration="1300"
          />
          <!-- <h4 class="text-center pt-3 pb-3"><b>1,12,000</b></h4> -->
          <p>Total Sales: 7800</p>
        </div>
      </div>

      <div class="col-md-4 col-lg-4">
        <div class="w-100 shadow p-3 mb-5 bg-white rounded">
          <h5 class="">Recent Customer</h5>
          <animated-number
            :value="todayCustomerValue"
            :formatValue="customerStatusFormat"
            :duration="1300"
          />
          <!-- <h4 class="text-center pt-3 pb-3"><b>234</b></h4> -->
          <p>Total Customer: 2450</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import AnimatedNumber from "animated-number-vue";

@Component({
  name: "AdminSummaryBoxView",
  components: { AnimatedNumber },
})
export default class AdminSummaryBoxView extends Vue {
  todayIncomeValue: any = 8755;
  todaySalesValue: any = 25;
  todayCustomerValue: any = 35;

  incomeStatusFormat(value: any) {
    return `<h4 class="text-center pt-3 pb-3"><b>${parseInt(
      value
    )} BDT</b></h4>`;
  }

  salesStatusFormat(value: any) {
    return `<h4 class="text-center pt-3 pb-3"><b>${parseInt(value)}</b></h4>`;
  }

  customerStatusFormat(value: any) {
    return `<h4 class="text-center pt-3 pb-3"><b>${parseInt(value)}</b></h4>`;
  }

  mounted() {}
}
</script>

<style>
.app-sidebar {
  background: #f3f2f2;
}
</style>
