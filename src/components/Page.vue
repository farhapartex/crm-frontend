<template>
  <div class="page h-100 pl-4 pr-4 pt-3 pb-3">
    <PageBoxHeader :pageHeader="pageHeader"></PageBoxHeader>
    <Table v-if="componentType == 'table'"></Table>
    <!-- <BaseForm v-if="componentType == 'form'"></BaseForm> -->
    <ViewPage v-if="componentType == 'view'"></ViewPage>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import PageBoxHeader from "./PageBoxHeader.vue";
import Table from "./Table.vue";
// import BaseForm from "./forms/formBase.vue";
import ViewPage from "./views/ViewPage.vue";

@Component({
  name: "Page",
  components: { PageBoxHeader, Table, ViewPage },
})
export default class Page extends Vue {
  @Prop({ type: String }) pageHeader!: string;
  @Prop({ type: String }) componentType!: string;
  mounted() {}
}
</script>

<style>
</style>
