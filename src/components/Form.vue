<template>
  <div class="formBase w-100">
    <ServiceForm v-if="$route.name == 'serviceCreate'"></ServiceForm>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import ServiceForm from "./forms/ServiceForm.vue";

@Component({
  name: "BaseForm",
  components: {
    ServiceForm,
  },
})
export default class Form extends Vue {
  mounted() {}
}
</script>

<style>
</style>
