<template>
  <div class="base h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-2 h-100 app-sidebar">
          <Sidbear :currentNav="navValue"></Sidbear>
        </div>
        <div class="col-10 h-100">
          <div class="page h-100">
            <PageHeader @navigationValue="getNavigationValue"></PageHeader>
            <router-view />
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
import Sidbear from "../components/Sidebar.vue";
import PageHeader from "../components/PageHeader.vue";

@Component({
  name: "Base",
  components: { Sidbear, PageHeader },
})
export default class Base extends Vue {
  navValue: string = "application";
  getNavigationValue(item: any) {
    this.navValue = item;
  }
  mounted() {}
}
</script>

<style>
.app-sidebar {
  background: #f3f2f2;
}
</style>
