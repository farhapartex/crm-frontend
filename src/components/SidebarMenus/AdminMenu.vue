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
            <router-link :to="{ name: 'activeCustomerList' }">
              <span>Active</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'pendingCustomerList' }">
              <span>Pending (10+)</span>
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
    <li v-if="accessLevel == 'ADMIN'">
      <p @click="menuList['supplement'] = !menuList['supplement']">
        <span class="mr-2">
          <i class="fas fa-box-open"></i>
        </span>
        <span>Supplement</span>
        <span class="float-right" v-if="menuList['supplement'] == false">
          <i class="fas fa-plus"></i>
        </span>
        <span class="float-right" v-if="menuList['supplement'] == true">
          <i class="fas fa-minus"></i>
        </span>
      </p>
      <transition name="fade">
        <ul class="sub-navmenu" v-if="menuList['supplement'] == true">
          <li>
            <router-link :to="{ name: 'activeSupplementList' }">
              <span>Active Supplement</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'inActiveSupplementList' }">
              <span>Inactive Supplement</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </li>
    <li v-if="accessLevel == 'ADMIN'">
      <p @click="menuList['tourTemplate'] = !menuList['tourTemplate']">
        <span class="mr-2">
          <i class="far fa-clone"></i>
        </span>
        <span>Tour Template</span>
        <span class="float-right" v-if="menuList['tourTemplate'] == false">
          <i class="fas fa-plus"></i>
        </span>
        <span class="float-right" v-if="menuList['tourTemplate'] == true">
          <i class="fas fa-minus"></i>
        </span>
      </p>
      <transition name="fade">
        <ul class="sub-navmenu" v-if="menuList['tourTemplate'] == true">
          <li>
            <router-link :to="{ name: 'activeTourTemplateList' }">
              <span>Active Tour Template</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'inactiveTourTemplateList' }">
              <span>Inactive Tour Template</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </li>
    <li v-if="accessLevel == 'ADMIN'">
      <p @click="menuList['tour'] = !menuList['tour']">
        <span class="mr-2">
          <i class="fas fa-warehouse"></i>
        </span>
        <span>Tour</span>
        <span class="float-right" v-if="menuList['tour'] == false">
          <i class="fas fa-plus"></i>
        </span>
        <span class="float-right" v-if="menuList['tour'] == true">
          <i class="fas fa-minus"></i>
        </span>
      </p>
      <transition name="fade">
        <ul class="sub-navmenu" v-if="menuList['tour'] == true">
          <li>
            <router-link :to="{ name: 'activeTourList' }">
              <span>Active Tour</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'inactiveTourList' }">
              <span>Inactive Tour</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </li>
    <li v-if="accessLevel == 'ADMIN'">
      <router-link :to="{ name: 'bookingList' }">
        <span class="mr-2">
          <i class="fas fa-calendar-alt"></i>
        </span>
        <span>Booking</span>
      </router-link>
    </li>
    <li v-if="accessLevel == 'ADMIN'">
      <router-link :to="{ name: 'activeCouponList' }">
        <span class="mr-2">
          <i class="fas fa-tags"></i>
        </span>
        <span>Coupon</span>
      </router-link>
    </li>

    <li v-if="accessLevel == 'ADMIN'">
      <router-link :to="{ name: 'bookingTransactionList' }">
        <span class="mr-2">
          <i class="fas fa-funnel-dollar"></i>
        </span>
        <span>Transactions</span>
      </router-link>
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
</style>
