<template>
  <div class="page h-100 pl-4 pr-4 pt-3 pb-3">
    <PageBoxHeader :pageHeader="pageHeader"></PageBoxHeader>
    <Table v-if="componentType == 'table'"></Table>
    <Form v-if="componentType == 'form'" :pageType="pageType"></Form>
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
import { CHECK_TOKEN_VALIDATION, LOGOUT } from "@/store/actions.names";
import router from "@/router";

@Component({
  name: "Page",
  components: { PageBoxHeader, Table, Form, ViewPage },
})
export default class Page extends Vue {
  @Prop({ type: String }) pageHeader!: string;
  @Prop({ type: String }) pageType!: string;
  @Prop({ type: String }) componentType!: string;
  @Action(CHECK_TOKEN_VALIDATION) checkTokenValidation: any;
  @Action(LOGOUT) logout: any;

  signout() {
    this.logout()
      .then((result: any) => {
        this.$router.push("/auth/sign-in");
      })
      .catch((e: any) => {
        console.log("Error");
      });
  }

  mounted() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.checkTokenValidation({ token: token }).then((response: any) => {
        if (response.success && response.data.is_token_valid == false) {
          this.signout();
        }
      });
    }
  }
}
</script>

<style>
.crm-btn {
  background: #4a4d70 !important;
  color: #fff !important;
  border-color: #4a4d70 !important;
}
</style>
