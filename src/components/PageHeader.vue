<template>
  <div class="page-header w-100 pt-3 pb-3 overflow-hidden">
    <ul class="left-list">
      <!-- <li>
        <span>
          <i class="fas fa-bars"></i>
        </span>
      </li>-->
      <li>
        <span class="mr-2">
          <i class="fas fa-th-large"></i>
        </span>
        <span>Admin</span>
      </li>
    </ul>
    <ul class="float-right right-list">
      <li>
        <span>
          <i class="far fa-bell"></i>
        </span>
      </li>
      <li>
        <span>
          <i class="far fa-envelope"></i>
        </span>
      </li>
      <li>
        <img
          src="../assets/user.jpg"
          class="rounded-circle"
          width="30"
          height="30"
          alt
          @click="showAuthNav = !showAuthNav"
        />
        <ul class="submenu" v-if="showAuthNav">
          <li>
            <router-link :to="{ name: 'adminProfile' }" class>
              <span>
                <i class="far fa-user-circle"></i>
              </span>
              <span class="ml-3">hasan08sust@gmail.com</span>
            </router-link>
          </li>
          <li class>
            <router-link :to="{ name: 'settingsList' }">
              <span>
                <i class="fas fa-cogs"></i>
              </span>
              <span class="ml-3">Settings</span>
            </router-link>
          </li>
          <li>
            <p class="text-danger" @click="signout">
              <span>
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span class="ml-3">Signout</span>
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { LOGOUT } from "../store/actions.names";

@Component({
  name: "PageHeader",
  components: {},
})
export default class PageHeader extends Vue {
  @Action(LOGOUT) logout: any;
  showAuthNav: boolean = false;
  setNavigationValue(item: string) {
    this.$emit("navigationValue", item);
  }

  signout() {
    this.logout()
      .then((result: any) => {
        this.$router.push("/auth/sign-in");
      })
      .catch((e: any) => {
        console.log("Error");
      });
  }

  mounted() {}
}
</script>

<style>
.page-header {
  background: #f2f2f2;
  border-left: 1px solid #fff;
}
.page-header > ul {
  list-style: none;
  padding: 0px !important;

  margin-right: 10px !important;
}
.right-list > li,
.left-list > li {
  float: left;
  margin-right: 30px;
  cursor: pointer;
  font-size: 20px;
}
.right-list {
  margin: 0px !important;
}
.left-list {
  margin: 0px !important;
  margin-left: 1.5rem !important;
  cursor: none;
}

.left-list > li {
  font-size: 18px;
  color: #3f51b5;
  font-weight: bold;
  text-decoration: none;
}

.right-list li img {
  vertical-align: none !important;
}

.submenu {
  list-style: none;
  position: absolute;
  background: #e6e6e6;
  z-index: 999;
  right: 0;
  padding: 0px !important;
  margin: 0px !important;
  margin-top: 10px !important;
  width: 265px;
  padding-left: 25px !important;
  padding-right: 10px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  /* margin-right: 10px; */
  /* overflow: hidden; */
}

.submenu > li {
  margin-top: 6px;
  margin-bottom: 7px;
  display: block;
}

.submenu > li > a {
  font-size: 15px;
  display: block;

  text-decoration: none;
  color: #404040;
}
</style>
