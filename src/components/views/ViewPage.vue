<template>
  <div class="baseView w-100">
    <DashboardView v-if="$route.name == 'dashboard'"></DashboardView>
    <SettingBase v-if="$route.name == 'settingsList'"></SettingBase>
    <SecurityView v-if="$route.name == 'accountSecurity'"></SecurityView>
    <AdminProfileView v-if="$route.name == 'adminProfile'"></AdminProfileView>
    <!-- <ManagePackageView v-if="$route.name=='managePackage'"></ManagePackageView>
     -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import SettingBase from "./SettingsView.vue";
import SecurityView from "./SecurityView.vue";
import DashboardView from "./DashboardView.vue";
import AdminProfileView from "./adminProfile.vue";
// import Dashboard from "./dashboard/dashboard.vue";

@Component({
  name: "ViewPage",
  components: { SettingBase, SecurityView, DashboardView, AdminProfileView },
})
export default class ViewPage extends Vue {
  mounted() {}
}
</script>

<style>
</style>