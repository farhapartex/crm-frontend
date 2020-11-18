<template>
  <div class="page h-100 pl-4 pr-4 pt-3 pb-3">
    <PageBoxHeader :pageHeader="pageHeader"></PageBoxHeader>
    <Table v-if="componentType == 'table'"></Table>
    <Form v-if="componentType == 'form'"></Form>
    <ViewPage v-if="componentType == 'view'"></ViewPage>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import PageBoxHeader from "./PageBoxHeader.vue";
import Table from "./Table.vue";
import Form from "./Form.vue";
import ViewPage from "./views/ViewPage.vue";

@Component({
  name: "Page",
  components: { PageBoxHeader, Table, Form, ViewPage },
})
export default class Page extends Vue {
  @Prop({ type: String }) pageHeader!: string;
  @Prop({ type: String }) componentType!: string;
  mounted() {}
}
</script>

<style>
.crm-btn {
  background: #4a4d70 !important;
  color: #fff !important;
  border-color: #4a4d70 !important;
}
</style>
