<template>
  <div class="formBase w-100">
    <ServiceForm v-if="$route.name == 'serviceCreate'"></ServiceForm>
    <PackageForm v-if="$route.name == 'packageCreate'"></PackageForm>
    <StaffUserForm v-if="$route.name == 'staffUserCreate'"></StaffUserForm>
    <UserPasswordResetForm
      v-if="$route.name == 'staffUserPasswordReset'"
    ></UserPasswordResetForm>
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

@Component({
  name: "Form",
  components: {
    ServiceForm,
    PackageForm,
    StaffUserForm,
    UserPasswordResetForm,
  },
})
export default class Form extends Vue {
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
