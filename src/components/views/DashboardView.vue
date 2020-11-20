<template>
  <div class="base h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-4 col-lg-4">
          <div class="w-100 shadow p-3 mb-5 bg-white rounded">
            <h5 class="">Income Status</h5>
            <h4 class="text-center pt-3 pb-3"><b>1,12,000 BDT</b></h4>
            <p>Total Income: 23,00,000 BDT</p>
          </div>
        </div>

        <div class="col-md-4 col-lg-4">
          <div class="w-100 shadow p-3 mb-5 bg-white rounded">
            <h5 class="">Sales Status</h5>
            <h4 class="text-center pt-3 pb-3"><b>1,12,000 BDT</b></h4>
            <p>Total Sales: 7800</p>
          </div>
        </div>

        <div class="col-md-4 col-lg-4">
          <div class="w-100 shadow p-3 mb-5 bg-white rounded">
            <h5 class="">Recent Customer</h5>
            <h4 class="text-center pt-3 pb-3"><b>234</b></h4>
            <p>Total Customer: 2450</p>
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
  name: "DashboardView",
  components: {},
})
export default class DashboardView extends Vue {
  mounted() {}
}
</script>

<style>
.app-sidebar {
  background: #f3f2f2;
}
</style>
