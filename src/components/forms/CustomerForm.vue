<template>
  <div class="addRoom w-100">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="container-fluid">
        <p class="mb-3">
          <b>Customer General Information (গ্রাহকের সাধারণ তথ্য)</b>
        </p>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="first_name"
                >First Name (নামের প্রথমাংশ)<span class="text-secondary"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="first_name"
                placeholder="First Name"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="last_name"
                >Last Name (নামের শেষাংশ)<span class="text-secondary"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="mobile"
                >Primary Mobile (প্রাথমিক মোবাইল)<span class="text-secondary"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="mobile"
                placeholder="mobile No"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="email">Email (ইমেইল)</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Gender (লিঙ্গ)<span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Gender (লিঙ্গ নির্বাচন করুন)</option>
                <option value="1">Male (পুরুষ)</option>
                <option value="2">Female (মহিলা)</option>
                <option value="3">Transgender (তৃতীয় লিঙ্গ)</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Country (দেশ)<span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Country (দেশ নির্বাচন করুন)</option>
                <option value="1">Bangladesh (বাংলাদেশ)</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Division (বিভাগ)<span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Division (বিভাগ নির্বাচন করুন)</option>
                <option value="1">Dhaka (পুরুষ)</option>
                <option value="2">Sylhet (মহিলা)</option>
                <option value="3">Barishal (তৃতীয় লিঙ্গ)</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >District (জেলা)<span class="text-secondary">*</span></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select District (জেলা নির্বাচন করুন)</option>
                <option value="1">Dhaka (পুরুষ)</option>
                <option value="2">Sylhet (মহিলা)</option>
                <option value="3">Transgender (তৃতীয় লিঙ্গ)</option>
              </select>
            </div>
          </div>

          <div class="col-md-6 col-lg-6 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Present Address (বর্তমান ঠিকানা)<span class="text-secondary"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Address (ঠিকানা)"
              />
            </div>
          </div>

          <div class="col-md-6 col-lg-6 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Permanent Address (স্থায়ী ঠিকানা)<span class="text-secondary"
                  >*</span
                ></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="email"
                placeholder="Address (ঠিকানা)"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="nid"
                >NID (ন্যাশনাল আইডি)<span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="nid"
                placeholder="NID"
              />
            </div>
          </div>
        </div>

        <p class="mb-3 mt-5">
          <b>Customer Organisation Information (গ্রাহকের প্রতিষ্ঠানের তথ্য)</b>
        </p>

        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="last_name"
                >Organisation Name (প্রতিষ্ঠানের নাম)</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="last_name"
                placeholder="Name (নাম)"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="user_role"
                >Organisation Type (ধরণ)<span class="text-secondary"
                  >*</span
                ></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>Select Type (ধরণ নির্বাচন করুন)</option>
                <option value="1">Dhaka (পুরুষ)</option>
                <option value="2">Sylhet (মহিলা)</option>
                <option value="3">Transgender (তৃতীয় লিঙ্গ)</option>
              </select>
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="permanent_address"
                >Total Employee (মোট কর্মচারী)</label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="permanent_address"
                placeholder="Total Employee (মোট কর্মচারী)"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="present_address"
                >Address (ঠিকানা)<span class="text-secondary">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm"
                id="present_address"
                placeholder="Address (ঠিকানা)"
              />
            </div>
          </div>

          <div class="col-md-3 col-lg-3 col-sm-12">
            <div class="form-group">
              <label for="present_address"
                >Relation with Organisation (সম্পর্ক)<span
                  class="text-secondary"
                  >*</span
                ></label
              >
              <select class="custom-select custom-select-sm" id="user_role">
                <option selected>
                  Select Relation (সম্পর্ক নির্বাচন করুন)
                </option>
                <option value="1">Managing Director (পুরুষ)</option>
                <option value="2">CEO (মহিলা)</option>
                <option value="3">HR & Admin (তৃতীয় লিঙ্গ)</option>
                <option value="3">Employee (তৃতীয় লিঙ্গ)</option>
              </select>
            </div>
          </div>

          <div class="col-md-12 col-lg-12 col-sm-12 mt-5">
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="deactive_user"
                />
                <label class="form-check-label" for="deactive_user">
                  <span class="text-danger"><b>Deactivated Customer</b></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="form-group">
              <button class="btn btn-sm crm-btn">Save</button>
              <button class="btn btn-sm btn-warning ml-3">Reset</button>
              <router-link
                :to="{ name: 'customerList' }"
                class="btn btn-sm btn-secondary ml-3"
                >Back</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  name: "CustomerForm",
  components: {},
})
export default class CustomerForm extends Vue {
  mounted() {}
}
</script>

<style>
</style>
