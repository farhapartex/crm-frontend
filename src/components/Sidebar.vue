<template>
  <div class="w-100 h-100" id="sidebar">
    <div class="sidbear-header pt-3 pb-2">
      <h5 class="text-center">CRM Classic</h5>
    </div>

    <nav class="w-100 sidebar-menus">
      <AdminMenu></AdminMenu>
    </nav>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import AdminMenu from "./SidebarMenus/AdminMenu.vue";

@Component({
  name: "Sidbear",
  components: { AdminMenu },
})
export default class Sidbear extends Vue {
  @Prop({ type: String }) currentNav!: string;

  accessLevel: string = "SUPERADMIN";

  mounted() {}
}
</script>

<style>
.sidebar-menus > ul {
  padding: 0px !important;
  margin: 0px !important;
  list-style: none;
  padding: 7px 10px !important;
}

.sidebar-menus > ul > li {
  padding: 7px 10px;
  color: #404040;
  cursor: pointer;
}

.sidebar-menus > ul > li > p,
.sidebar-menus > ul > li > a {
  color: #404040;
  display: block;
  padding: 10px 12px !important;
  border-radius: 7px;
  text-decoration: none;
}

.sidebar-menus > ul > li > p:hover,
.sidebar-menus > ul > li > a:hover {
  background: #ccc;
}

.sub-navmenu {
  list-style: none;
  padding: 12px !important;
  background: #fff;
  border-radius: 10px;
}

.sub-navmenu > li {
  padding-top: 5px;
  padding-bottom: 5px;
}

.sub-navmenu > li > a {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
