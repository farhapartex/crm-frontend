<template>
  <div class="base h-100">
    <AdminDashboardView></AdminDashboardView>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import AdminDashboardView from "./adminDashboard/AdminDashboardView.vue";

@Component({
  name: "DashboardView",
  components: { AdminDashboardView },
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
