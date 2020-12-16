<template>
  <div class="table h-100">
    <CustomerTable
      :routeName="$route.name"
      v-if="$route.name == 'customerList'"
    ></CustomerTable>
    <ServiceTable
      :routeName="$route.name"
      v-if="$route.name == 'serviceList'"
    ></ServiceTable>
    <PackageTable
      :routeName="$route.name"
      v-if="$route.name == 'packageList'"
    ></PackageTable>
    <StaffUserTable
      :routeName="$route.name"
      v-if="$route.name == 'staffUserList'"
    ></StaffUserTable>
    <TransactionTable
      :routeName="$route.name"
      v-if="$route.name == 'transactionList'"
    ></TransactionTable>
    <ContactTable
      :routeName="$route.name"
      v-if="$route.name == 'contactList'"
    ></ContactTable>
    <ProductTable
      :routeName="$route.name"
      v-if="$route.name == 'productList'"
    ></ProductTable>
    <InvoiceTable
      :routeName="$route.name"
      v-if="$route.name == 'invoiceList'"
    ></InvoiceTable>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import CustomerTable from "./tables/CustomerTable.vue";
import ServiceTable from "./tables/ServiceTable.vue";
import PackageTable from "./tables/PackageTable.vue";
import StaffUserTable from "./tables/StaffUserTable.vue";
import TransactionTable from "./tables/TransactionTable.vue";
import ContactTable from "./tables/ContactTable.vue";
import ProductTable from "./tables/ProductTable.vue";
import InvoiceTable from "./tables/InvoiceTable.vue";

@Component({
  name: "Table",
  components: {
    CustomerTable,
    ServiceTable,
    PackageTable,
    StaffUserTable,
    TransactionTable,
    ContactTable,
    ProductTable,
    InvoiceTable,
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

.table-crm {
  background: #4a4d70;
  color: #e6e6e6;
  font-weight: normal;
}

.table-crm th {
  color: #e6e6e6;
  font-weight: normal;
  font-size: 15px;
}

table td {
  font-size: 14px;
}
</style>
