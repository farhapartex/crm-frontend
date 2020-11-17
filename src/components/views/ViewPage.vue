<template>
  <div class="baseView w-100">
    <SettingBase v-if="$route.name == 'settingsList'"></SettingBase>
    <!-- <ManagePackageView v-if="$route.name=='managePackage'"></ManagePackageView>
    <Dashboard v-if="$route.name=='dashboard'"></Dashboard> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import SettingBase from "./SettingsView.vue";
// import ManagePackageView from "./ManagePackgeView.vue";
// import Dashboard from "./dashboard/dashboard.vue";

@Component({
  name: "ViewPage",
  components: { SettingBase },
})
export default class ViewPage extends Vue {
  mounted() {}
}
</script>

<style>
</style>