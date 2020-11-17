<template>
  <div class="table h-100">
    <div class="alert alert-secondary" role="alert">
      <p class="text-center">No customer found!</p>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr class="table-secondary">
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Md Nazmul Hasan</td>
          <td>hasan08sust@gmail.com</td>
          <td>01636990528</td>
          <td><span class="text-success">Active</span></td>
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
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "CustomerTable",
  components: {},
})
export default class CustomerTable extends Vue {
  @Prop({ type: String }) routeName!: string;

  packageList: any = [];
  customerList: any = [];

  mounted() {}
}
</script>

<style>
.edit-icon {
  color: #4a4d70 !important;
}
</style>
