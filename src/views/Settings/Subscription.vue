<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <SideBar />
    </template>
    <template v-slot:content>
      <div class="py-10 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div
          class="
            max-w-3xl
            w-full
            rounded-2xl
            bg-white
            card-border
            m-auto
            space-y-10
          "
        >
          <div class="w-full space-y-10 py-10 px-14">
            <div class="w-full flex items-center space-x-3">
              <div class="flex flex-col items-center space-y-2">
                <IconSub :border="'#8800A2'" :maincolor="'#D817FC'" />
              </div>
              <span class="text-3xl font-bold font-Inter text-primary-black"
                >Polyte Business</span
              >
            </div>
            <div class="grid grid-cols-2 gap-5 w-full">
              <div
                class="
                  w-full
                  py-2.5
                  px-4
                  pl-10
                  rounded-xl
                  bg-tertiary-gray
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
                      >Unlimited</span
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
                  bg-tertiary-gray
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
                      >Unlimited</span
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
                  bg-tertiary-gray
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
                      >800 GB</span
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
                  bg-tertiary-gray
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
                      >20.000 / month</span
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
                  bg-tertiary-gray
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
                      >Up to 2 User</span
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
                  bg-tertiary-gray
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
                      >E-Mail</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full flex">
              <div class="m-auto flex flex-col items-start space-y-1">
                <span class="text-3xl font-bold text-primary-black"
                  >459€ / month</span
                >
                <span
                  class="text-xl font-normal text-primary-black text-opacity-50"
                  >5.508€ billed annually</span
                >
              </div>
            </div>
          </div>
          <div class="w-full">
            <p
              class="
                text-center text-xl text-primary-black text-opacity-60
                font-normal
              "
            >
              Your subscription will automatically renew on Nov 29, 2022
            </p>
          </div>
          <div
            class="
              w-full
              flex
              justify-between
              items-center
              border border-t-4 border-[#f7f7fa]
              py-5
              px-14
            "
          >
            <button
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
              Cancel subscription
            </button>
            <button
              @click="openModal"
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
              Upgrade
            </button>
          </div>
        </div>
        <SubscriptionModal ref="SubscriptionModal" />
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import SideBar from "./includes/SideBar.vue";
import IconSub from "../../Icons/IconSub.vue";
import IconProject1 from "../../Icons/IconProject1.vue";
import Icon3dScenes from "../../Icons/Icon3dScenes.vue";
import IconCloud from "../../Icons/IconCloud.vue";
import IconImpression from "../../Icons/IconImpression.vue";
import IconUser from "../../Icons/IconUser.vue";
import IconSupport from "../../Icons/IconSupport.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import SubscriptionModal from "../../components/modals/Settings/SubscriptionModal.vue";
export default {
  components: {
    SidebarLayout,
    SideBar,
    IconSub,
    IconProject1,
    Icon3dScenes,
    IconCloud,
    IconImpression,
    IconUser,
    IconSupport,
    SubscriptionModal,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const SubscriptionModal = ref(null);
    const openModal = () => {
      SubscriptionModal.value.OpenModal();
    };
    return {
      router,
      route,
      openModal,
      SubscriptionModal,
    };
  },
};
</script>


