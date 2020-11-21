<template>
  <div class="container-fluid h-100">
    <AdminSummaryBoxView></AdminSummaryBoxView>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-5 col-sm-12">
          <div class="w-100 shadow p-3 mb-5 bg-white rounded">
            <h5>Recent Activity</h5>
            <ul class="recent-activity-list">
              <li>
                <p class="activity-text">
                  admin Package of Customer Md Nazmul Hasan Will expire on
                  2020-12-11
                </p>
                <p class="activity-date">16 Nov,2020</p>
              </li>
              <li>
                <p class="activity-text">
                  admin Package of Customer Md Nazmul Hasan Will expire on
                  2020-12-11
                </p>
                <p class="activity-date">16 Nov,2020</p>
              </li>
              <li>
                <p class="activity-text">
                  admin Package of Customer Md Nazmul Hasan Will expire on
                  2020-12-11
                </p>
                <p class="activity-date">16 Nov,2020</p>
              </li>
              <li>
                <p class="activity-text">
                  admin Package of Customer Md Nazmul Hasan Will expire on
                  2020-12-11
                </p>
                <p class="activity-date">16 Nov,2020</p>
              </li>
              <li>
                <p class="activity-text">
                  admin Package of Customer Md Nazmul Hasan Will expire on
                  2020-12-11
                </p>
                <p class="activity-date">16 Nov,2020</p>
              </li>
            </ul>
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
import AdminSummaryBoxView from "./AdminSummaryBox.vue";

@Component({
  name: "AdminDashboardView",
  components: { AdminSummaryBoxView },
})
export default class AdminDashboardView extends Vue {
  mounted() {}
}
</script>

<style>
.app-sidebar {
  background: #f3f2f2;
}

.recent-activity-list {
  list-style: none;
  padding: 0px !important;
}

.recent-activity-list > li {
  color: #000 !important;
  padding-top: 5px;
  padding-bottom: 5px;
}

.activity-text {
  font-size: 15px;
}

.activity-date {
  font-size: 12px;
}
</style>
