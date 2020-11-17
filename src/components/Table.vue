<template>
  <div class="table h-100">
    <CustomerTable
      :routeName="$route.name"
      v-if="$route.name == 'customerList'"
    ></CustomerTable>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import CustomerTable from "./tables/CustomerTable.vue";

@Component({
  name: "Table",
  components: {
    CustomerTable,
  },
})
export default class Table extends Vue {
  mounted() {}
}
</script>

<style>
.table-actions {
  list-style: none;
  padding: 0px !important;
  margin: 0px !important;
}

.table-actions > li {
  float: left;
  cursor: pointer;
}

.custom-add-btn {
  background: #3f51b5;
  color: #fff;
}

.custom-add-btn:hover {
  background: #3f51b5;
  color: #fff;
}

.form-search {
  display: block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>
