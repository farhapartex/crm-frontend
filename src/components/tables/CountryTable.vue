<template>
  <div class="table h-100">
    <!-- <div class="alert alert-secondary" role="alert">
      <p class="text-center">No customer found!</p>
    </div> -->

    <div class="w-100 search-box mb-4">
      <div class="container-fluid">
        <div class="row mb-3">
          <div class="col-2 offset-10">
            <div class="">
              <router-link
                :to="{ name: 'newCountry' }"
                class="btn btn-sm crm-btn w-100"
                ><span class="mr-2"><i class="fas fa-plus"></i></span>
                <span>Create Country</span></router-link
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 offset-7">
            <div class="mr-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search by uid, name .."
                @change="onChangeSearchValue($event)"
              />
            </div>
          </div>
          <div class="col-2">
            <div class="">
              <button class="btn btn-sm crm-btn w-100" @click="searchData">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table table-borderless" v-if="countryList.length > 0">
      <thead>
        <tr class="table-crm">
          <th scope="col">UID</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(country, index) in countryList" :key="index">
          <td>{{ country.uid }}</td>
          <td>{{ country.name }}</td>
          <td>
            <span class="text-success" v-if="country.is_active">Active</span>
            <span class="text-danger" v-else>Deactive</span>
          </td>
          <td>
            <p>
              <a href=""
                ><span class="edit-icon"><i class="fas fa-edit"></i></span
              ></a>
              <span> | </span>
              <a href=""
                ><span class="text-danger"><i class="fas fa-trash"></i></span
              ></a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="alert alert-secondary text-center" v-else role="alert">
      Country list is empty!
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { FETCH_COUNTRIES } from "@/store/actions.names";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "CountryTable",
  components: {},
})
export default class CountryTable extends Vue {
  @Prop({ type: String }) routeName!: string;
  @Action(FETCH_COUNTRIES) fetchCountries: any;

  countryList: any = [];

  searchObject: any = {
    generic_search: null,
  };

  getCountryList(payload: any) {
    this.fetchCountries(payload)
      .then((response: any) => {
        this.countryList = response.results;
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  onChangeSearchValue(event: any) {
    this.searchObject.generic_search = event.target.value;
    this.getCountryList(this.searchObject);
  }

  searchData() {
    this.getCountryList(this.searchObject);
  }

  mounted() {
    this.getCountryList({});
  }
}
</script>

<style>
.edit-icon {
  color: #4a4d70 !important;
}
</style>
