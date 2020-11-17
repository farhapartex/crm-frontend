<template>
  <ul>
    <li>
      <router-link :to="{ name: 'dashboard' }">
        <span class="mr-2">
          <i class="fas fa-home"></i>
        </span>
        <span>Dashboard</span>
      </router-link>
    </li>
    <li v-if="accessLevel == 'SUPERADMIN'">
      <p @click="menuList['customer'] = !menuList['customer']">
        <span class="mr-2">
          <i class="fas fa-users"></i>
        </span>
        <span>Customer</span>
        <span class="float-right" v-if="menuList['customer'] == false">
          <i class="fas fa-plus"></i>
        </span>
        <span class="float-right" v-if="menuList['customer'] == true">
          <i class="fas fa-minus"></i>
        </span>
      </p>
      <transition name="fade">
        <ul class="sub-navmenu" v-if="menuList['customer'] == true">
          <li>
            <router-link :to="{ name: 'customerList' }">
              <span>Create Customer</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'customerList' }">
              <span>Customer List</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </li>
    <li v-if="accessLevel == 'SUPERADMIN'">
      <p @click="menuList['transaction'] = !menuList['transaction']">
        <span class="mr-2">
          <i class="fas fa-chart-line"></i>
        </span>
        <span>Payment</span>
        <span class="float-right" v-if="menuList['transaction'] == false">
          <i class="fas fa-plus"></i>
        </span>
        <span class="float-right" v-if="menuList['transaction'] == true">
          <i class="fas fa-minus"></i>
        </span>
      </p>
      <transition name="fade">
        <ul class="sub-navmenu" v-if="menuList['transaction'] == true">
          <li>
            <router-link :to="{ name: 'transactionList' }">
              <span>Transaction</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'newPayment' }">
              <span>New Payment</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </li>
    <li v-if="accessLevel == 'SUPERADMIN'">
      <p @click="menuList['packages'] = !menuList['packages']">
        <span class="mr-2">
          <i class="fas fa-box-open"></i>
        </span>
        <span>Package</span>
        <span class="float-right" v-if="menuList['packages'] == false">
          <i class="fas fa-plus"></i>
        </span>
        <span class="float-right" v-if="menuList['packages'] == true">
          <i class="fas fa-minus"></i>
        </span>
      </p>
      <transition name="fade">
        <ul class="sub-navmenu" v-if="menuList['packages'] == true">
          <li>
            <router-link :to="{ name: 'packageList' }">
              <span>Package List</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'servicePlaneList' }">
              <span>Service Plan</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </li>
    <li>
      <router-link :to="{ name: 'settingsList' }">
        <span class="mr-2">
          <i class="fas fa-cogs"></i>
        </span>
        <span>Settings</span>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "AdminMenu",
  components: {},
})
export default class AdminMenu extends Vue {
  //   @Action(RETRIEVE_AUTH_FROM_STORE) retrieveAuth: any;
  //   @Getter(ACCESS_LEVEL) accessLevel: any;
  accessLevel: string = "SUPERADMIN";
  menuList: any = {
    customer: false,
    packages: false,
    transaction: false,
    supplement: false,
    tourTemplate: false,
    tour: false,
    booking: false,
    coupon: false,
    report: false,
  };

  //   getAuthInfo() {
  //     this.retrieveAuth()
  //       .then(() => {})
  //       .catch((e: any) => {});
  //   }
  mounted() {
    // this.getAuthInfo();
  }
}
</script>

<style>
ul > li {
  font-size: 14px;
  color: #3f51b5 !important;
}
</style>
