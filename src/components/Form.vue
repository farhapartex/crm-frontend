<template>
  <div class="formBase w-100">
    <ServiceForm
      v-if="$route.name == 'serviceCreate' || $route.name == 'serviceUpdate'"
      :pageType="pageType"
    ></ServiceForm>
    <PackageForm
      v-if="$route.name == 'packageCreate' || $route.name == 'packageUpdate'"
      :pageType="pageType"
    ></PackageForm>
    <StaffUserForm v-if="$route.name == 'staffUserCreate'"></StaffUserForm>
    <UserPasswordResetForm
      v-if="$route.name == 'staffUserPasswordReset'"
    ></UserPasswordResetForm>
    <CustomerForm v-if="$route.name == 'customerCreate'"></CustomerForm>
    <PaymentForm v-if="$route.name == 'paymentCreate'"></PaymentForm>
    <ContactForm v-if="$route.name == 'contactCreate'"></ContactForm>
    <ProductForm v-if="$route.name == 'productCreate'"></ProductForm>
    <InvoiceForm v-if="$route.name == 'invoiceCreate'"></InvoiceForm>
    <CouponForm v-if="$route.name == 'couponCreate'"></CouponForm>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import ServiceForm from "./forms/ServiceForm.vue";
import PackageForm from "./forms/PackageForm.vue";
import StaffUserForm from "./forms/StaffUserForm.vue";
import UserPasswordResetForm from "./forms/UserPasswordResetForm.vue";
import CustomerForm from "./forms/CustomerForm.vue";
import PaymentForm from "./forms/PaymentForm.vue";
import ContactForm from "./forms/ContactForm.vue";
import ProductForm from "./forms/ProductForm.vue";
import InvoiceForm from "./forms/InvoiceForm.vue";
import CouponForm from "./forms/CouponForm.vue";

@Component({
  name: "Form",
  components: {
    ServiceForm,
    PackageForm,
    StaffUserForm,
    UserPasswordResetForm,
    CustomerForm,
    PaymentForm,
    ContactForm,
    ProductForm,
    InvoiceForm,
    CouponForm,
  },
})
export default class Form extends Vue {
  @Prop({ type: String }) pageType!: string;
  mounted() {}
}
</script>

<style>
.multiselect__option--highlight {
  background: #4a4d70 !important;
  outline: none;
  color: #fff;
}

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #4a4d70 !important;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}

.multiselect__tag-icon:after {
  content: "\D7";
  color: #fff;
  font-size: 14px;
}

.multiselect__tags {
  min-height: none !important;
  display: block;
  padding: 0px !important;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: #fff;
  font-size: 14px;
}

.multiselect__select {
  position: absolute;
  width: 40px;
  height: 30 !important;
  right: 1px;
  top: 1px;
  padding: 4px 8px;
  text-align: center;
  transition: transform 0.2s ease;
}

.form-group label {
  font-size: 14px;
}
</style>
