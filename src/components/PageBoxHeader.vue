<template>
  <div class="pageBoxHeader mb-4">
    <p class="page-header-title">{{ pageHeader }}</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "PageBoxHeader",
  components: {},
})
export default class PageBoxHeader extends Vue {
  @Prop({ type: String }) pageHeader!: string;
  mounted() {}
}
</script>

<style>
.page-header-title {
  font-size: 18px;
}
</style>
