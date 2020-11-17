<template>
  <div class="base h-100">
    <div class="container-fluid h-100">
      <div class="row h-100"></div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "Base",
  components: {},
})
export default class Dashboard extends Vue {
  mounted() {}
}
</script>

<style>
.app-sidebar {
  background: #f3f2f2;
}
</style>
