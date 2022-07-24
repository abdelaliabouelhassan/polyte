<template>
  <div
    v-if="open"
    class="relative z-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        fixed
        inset-0
        bg-[#00132422] bg-opacity-100
        transition-opacity
        overflow-hidden
      "
      style="backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px)"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          sm:items-center
          justify-center
          min-h-full
          text-center
          sm:p-0
        "
      >
        <div
          class="
            relative
            bg-white
            rounded-[27px]
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:w-full
            modal-border
            max-w-[1201px]
          "
        >
          <div class="w-full flex">
            <div class="w-[496px] bg-[#F4F6F8] col-span-2 p-6 space-y-10">
              <div>
                <span
                  class="
                    text-3xl
                    font-normal
                    text-primary-black text-opacity-50
                  "
                  >Choose subscription</span
                >
              </div>

              <div class="w-full flex flex-col items-start space-y-4">
                <button
                  @click="selectSub(sub)"
                  v-for="(sub, index, key) in Subsriptions"
                  :key="key"
                  class="
                    w-full
                    rounded-xl
                    flex
                    items-center
                    space-x-4
                    hover:bg-white
                    px-5
                    py-2
                    ring-primary-blue
                  "
                  :class="{
                    'ring-4 bg-white':
                      sub.selected && index < Subsriptions.length - 1,
                    ' bg-white  border-4  border-primary-blue ':
                      sub.selected && index >= Subsriptions.length - 1,
                    'hover:border-primary-blue hover:border-4 border-dashed':
                      index >= Subsriptions.length - 1,
                  }"
                >
                  <div>
                    <IconSub1
                      :maincolor="sub.color"
                      :border="sub.border_color"
                    />
                  </div>
                  <div class="flex flex-col items-start space-y-1">
                    <span
                      class="text-primary-black font-bold text-xl font-Inter"
                      >{{ sub.title }}</span
                    >
                    <span
                      class="
                        text-primary-black
                        font-normal
                        text-xl
                        font-Inter
                        text-opacity-60
                      "
                      >{{ sub.subtitle }}</span
                    >
                  </div>
                </button>
              </div>
            </div>
            <div class="p-10 space-y-10 col-span-4 w-[705px]">
              <div class="flex flex-col items-start space-y-2">
                <span class="text-primary-black font-bold text-3xl">{{
                  selectedSub.package.title
                }}</span>
                <p
                  class="text-primary-black font-normal text-xl text-opacity-60"
                  v-html="selectedSub.package.subtitle"
                ></p>
              </div>

              <div
                class="grid grid-cols-2 gap-5 w-full"
                v-if="selectedSub.package.project"
              >
                <div
                  class="
                    w-full
                    py-2.5
                    px-4
                    pl-10
                    rounded-xl
                    bg-white
                    border-4
                    bordr-[#F4F6F8]
                    flex
                  "
                >
                  <div class="flex items-center space-x-6">
                    <div>
                      <IconProject1 />
                    </div>
                    <div class="flex flex-col items-start space-y-1">
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left
                        "
                        >Projects</span
                      >
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left text-opacity-50
                        "
                        >{{ selectedSub.package.project }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-full
                    py-2.5
                    px-4
                    pl-10
                    rounded-xl
                    bg-white
                    border-4
                    bordr-[#F4F6F8]
                    flex
                  "
                >
                  <div class="flex items-center space-x-6">
                    <div><Icon3dScenes /></div>
                    <div class="flex flex-col items-start space-y-1">
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left
                        "
                        >3D Scenes</span
                      >
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left text-opacity-50
                        "
                        >{{ selectedSub.package.scenes }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-full
                    py-2.5
                    px-4
                    pl-10
                    rounded-xl
                    bg-white
                    border-4
                    bordr-[#F4F6F8]
                    flex
                  "
                >
                  <div class="flex items-center space-x-6">
                    <div><IconCloud /></div>
                    <div class="flex flex-col items-start space-y-1">
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left
                        "
                        >Cloud Storage</span
                      >
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left text-opacity-50
                        "
                        >{{ selectedSub.package.cloud }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-full
                    py-2.5
                    px-4
                    pl-10
                    rounded-xl
                    bg-white
                    border-4
                    bordr-[#F4F6F8]
                    flex
                  "
                >
                  <div class="flex items-center space-x-6">
                    <div><IconImpression /></div>
                    <div class="flex flex-col items-start space-y-1">
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left
                        "
                        >Impressions</span
                      >
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left text-opacity-50
                        "
                        >{{ selectedSub.package.impression }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-full
                    py-2.5
                    px-4
                    pl-10
                    rounded-xl
                    bg-white
                    border-4
                    bordr-[#F4F6F8]
                    flex
                  "
                >
                  <div class="flex items-center space-x-6">
                    <div><IconUser /></div>
                    <div class="flex flex-col items-start space-y-1">
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left
                        "
                        >Users</span
                      >
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left text-opacity-50
                        "
                        >{{ selectedSub.package.users }}</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-full
                    py-2.5
                    px-4
                    pl-10
                    rounded-xl
                    bg-white
                    border-4
                    bordr-[#F4F6F8]
                    flex
                  "
                >
                  <div class="flex items-center space-x-6">
                    <div><IconSupport /></div>
                    <div class="flex flex-col items-start space-y-1">
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left
                        "
                        >Support Levle</span
                      >
                      <span
                        class="
                          text-primary-black
                          font-bold font-Inter
                          text-xl text-left text-opacity-50
                        "
                        >{{ selectedSub.package.support }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="w-full flex justify-between items-center"
                v-if="selectedSub.package.project"
              >
                <div class="flex items-center space-x-2">
                  <input type="checkbox" v-model="isMonthly" />
                  <span
                    class="
                      text-xl text-primary-black text-opacity-60
                      font-normal font-Inter
                    "
                    >Monthly Billing</span
                  >
                </div>

                <div class="flex flex-col items-start">
                  <span class="font-bold text-3xl text-primary-black font-Inter"
                    >{{
                        !isMonthly
                        ? selectedSub.package.Monthlyprice
                        : selectedSub.package.Yearlyprice
                    }}€ / month</span
                  >
                  <span
                    class="
                      text-xl
                      font-normal
                      text-primary-black text-opacity-60
                    "
                    >{{
                      !isMonthly
                        ? selectedSub.package.totalMonthly
                        : selectedSub.package.totalYearly
                    }}€ billed annually</span
                  >
                </div>
              </div>

              <div
                class="w-full flex pb-10"
                v-if="!selectedSub.package.project"
              >
                <button
                  class="
                    font-bold
                    m-auto
                    text-xl
                    bg-primary-blue
                    text-white
                    py-2
                    px-8
                    rounded-lg
                    hover:bg-secondary-blue
                  "
                >
                  Contact Sales
                </button>
              </div>

              <div class="w-full flex justify-between items-center">
                <button
                  @click="Cancel"
                  class="
                    text-primary-black
                    font-normal
                    text-xl
                    bg-tertiary-gray
                    py-2
                    px-4
                    rounded-lg
                    hover:bg-secondary-gray
                  "
                >
                  Cancel
                </button>
                <button
                  v-if="selectedSub.package.project"
                  @click="Continue"
                  class="
                    font-bold
                    text-xl
                    bg-primary-blue
                    text-white
                    py-2
                    px-4
                    rounded-lg
                    hover:bg-secondary-blue
                  "
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";

import { useStore } from "../../../stores/NewProjectStore.js";
import IconSub1 from "../../../Icons/IconSub.vue";
import IconProject1 from "../../../Icons/IconProject1.vue";
import Icon3dScenes from "../../../Icons/Icon3dScenes.vue";
import IconCloud from "../../../Icons/IconCloud.vue";
import IconImpression from "../../../Icons/IconImpression.vue";
import IconUser from "../../../Icons/IconUser.vue";
import IconSupport from "../../../Icons/IconSupport.vue";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    /// let  store = useStore(),
    const store = useStore();
    const open = ref(false);
    const isMonthly = ref(false);
    const Subsriptions = ref([
      {
        title: "Polyte Maker",
        subtitle: "Ideal for Content Creators",
        color: "#FF581A",
        border_color: "#BF3806",
        selected: true,
        package: {
          title: "Polyte Maker",
          subtitle:
            '<p class="text-primary-black font-normal text-xl text-opacity-60">The <span class="font-bold">Polyte Maker</span> subscriptionis aimed at agencies and individuals looking to create contentas a service.</p>',
          project: "Unlimited",
          impression: "1.500 / month",
          users: "Up to 1 User",
          support: "Partner Manager",
          scenes: "Unlimited",
          cloud: "5 GB",
          Monthlyprice: "39",
          totalMonthly: "468",
          Yearlyprice: "49",
          totalYearly: "588",
        },
      },
      {
        title: "Polyte Business",
        subtitle: "Ideal for small business",
        color: "#D817FC",
        border_color: "#8800A2",
        selected: false,
        package: {
          title: "Polyte Business",
          subtitle:
            '<p class="text-primary-black font-normal text-xl text-opacity-60">The <span class="font-bold">Polyte Business subscription </span>is ideal for companies that want to sell their products in their online shop with an emotional and interactive experience.</p>',
          project: "Unlimited",
          impression: "20.000 / month",
          users: "Up to 2 User",
          support: "E-Mail",
          scenes: "Unlimited",
          cloud: "800 GB",
          Monthlyprice: "495",
          totalMonthly: "5.508",
          Yearlyprice: "499",
          totalYearly: "5.988",
        },
      },
      {
        title: "Polyte Business Pro",
        subtitle: "Ideal for large business",
        color: "#FFED65",
        border_color: "#C69800",
        selected: false,
        package: {
          title: "Polyte Business Pro",
          subtitle:
            '<p class="text-primary-black font-normal text-xl text-opacity-60">The Polyte <span class="font-bold">Business Pro subscription</span> is aimed at companies that sell many products in their online shop and need an attractive, scalable solution.</p>',
          project: "Unlimited",
          impression: "40.000 / month",
          users: "Up to 5 User",
          support: "Account Manager",
          scenes: "Unlimited",
          cloud: "1.5 TB",
          Monthlyprice: "536",
          totalMonthly: "6.486",
          Yearlyprice: "599",
          totalYearly: "7.188",
        },
      },
      {
        title: "Custom",
        subtitle: "Need to scale with Polyte?",
        color: "#155188",
        border_color: "#001324",
        selected: false,
        package: {
          title: "Polyte Custom",
          subtitle:
            '<p class="text-primary-black font-normal text-xl text-opacity-60">Need to scale with Polyte? </br> The other subscriptions don’t suit your situation and you have big plans? </br> </br> Contact Polyte sales and get a suitable offer</p>',
        },
      },
    ]);

    const selectSub = (sub) => {
      Subsriptions.value.forEach((s) => {
        s.selected = false;
      });
      sub.selected = true;
    };
    //computed selected subscription
    const selectedSub = computed(() => {
      return Subsriptions.value.find((s) => s.selected);
    });

    const Cancel = () => {
      open.value = false;
    };
    const OpenModal = () => {
      open.value = true;
    };
    const Continue = () => {
      //create code here

      //close modal after create
      open.value = false;
    };

    return {
      Continue,
      Cancel,
      OpenModal,
      open,
      store,
      Subsriptions,
      selectedSub,
      selectSub,
      isMonthly
    };
  },
  components: {
    IconSub1,
    IconProject1,
    Icon3dScenes,
    IconCloud,
    IconImpression,
    IconUser,
    IconSupport,
  },
};
</script>





<style scoped>
input[type="checkbox"] {
  position: relative;
  width: 50px;
  height: 28px;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: #001324;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background 300ms linear;
}
input[type="checkbox"]::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 4px;
  left: 4px;
  border-radius: 20px;
  background-color: #f7f7fa;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: left 300ms linear;
}
input[type="checkbox"]:checked {
  background: #5361ff;
}
input[type="checkbox"]:checked::before {
  left: 26px;
  background-color: #f7f7fa;
}
</style>