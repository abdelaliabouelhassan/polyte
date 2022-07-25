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
            w-full
            modal-border
            max-w-7xl
          "
        >
          <div class="w-full h-full flex lg:flex-row flex-col items-start">
            <div
              class="
                lg:max-w-md
                w-full
                bg-[#F4F6F8]
                p-8
                flex flex-col
                items-start
                space-y-4
              "
            >
              <div
                v-for="(step, index, key) in steps"
                :key="key"
                class="w-full flex flex-col items-start space-y-4"
              >
                <div
                  class="w-full p-2 flex items-center space-x-2 rounded-[13px]"
                  :class="{
                    'bg-white': step.active,
                  }"
                >
                  <div
                    class="w-9 h-9 rounded-full flex"
                    :class="{
                      'bg-white': !step.active,
                      'rounded-color': step.active,
                      'bg-primary-green': step.step < StepIndex,
                    }"
                  >
                    <div class="m-auto">
                      <component
                        :is="step.icon"
                        :class="{
                          ' text-opacity-[0.156] text-primary-black':
                            !step.active,
                          ' text-white text-opacity-100': step.step < StepIndex,
                        }"
                      />
                    </div>
                  </div>
                  <span
                    class="
                      text-xl text-primary-black
                      font-normal font-Inter
                      text-left
                    "
                    :class="{ 'text-opacity-60': !step.active }"
                    >{{ step.title }}</span
                  >
                </div>
                <div
                  class="w-full h-[39px] pl-6"
                  v-if="index < steps.length - 1"
                >
                  <div class="w-px h-[39px] bg-[#D6D9DB]"></div>
                </div>
              </div>
            </div>
            <div class="lg:max-w-[490px] mx-auto w-full h-full py-8 relative px-8 lg:px-0 space-y-8 lg:space-y-0">
              <div class="w-full">
                <NewProjectCard v-if="StepIndex == 0" />
                <ProjectBriefingCard v-else-if="StepIndex == 1" />
                <InviteContent v-else-if="StepIndex == 2" />
                <SetPermissions v-else-if="StepIndex == 3" />
                <Summary v-else-if="StepIndex == 4" />
              </div>
              <div
                class="
                  w-full
                  lg:max-w-[480px]
                  lg:fixed
                  flex
                  justify-between
                  items-center
                  bottom-4 
                "
              >
                <div>
                  <button
                    @click="Cancel"
                    v-if="StepIndex == 0"
                    class="
                      text-primary-black
                      font-normal
                      text-base
                      font-Inter
                      bg-[#0013240F]
                      py-2
                      px-4
                      rounded-md
                      hover:bg-secondary-gray
                    "
                  >
                    Cancel
                  </button>
                  <button
                    @click="Back"
                    v-else
                    class="
                      text-primary-black
                      font-normal
                      text-base
                      font-Inter
                      bg-[#0013240F]
                      py-3
                      px-4
                      rounded-md
                      hover:bg-secondary-gray
                    "
                  >
                    <IconArrowLeft />
                  </button>
                </div>
                <div class="flex items-center space-x-2">
                  <button
                    @click="Skip"
                    v-if="StepIndex == 2"
                    class="
                      text-primary-black
                      font-normal
                      text-base
                      font-Inter
                      bg-[#0013240F]
                      py-2
                      px-4
                      rounded-md
                      hover:bg-secondary-gray
                    "
                  >
                    I will do it myself
                  </button>
                  <button
                    v-if="StepIndex < steps.length - 1"
                    @click="Next"
                    class="
                      text-white
                      font-bold
                      text-base
                      font-Inter
                      bg-primary-blue
                      py-2
                      px-4
                      rounded-md
                      hover:bg-opacity-80
                    "
                  >
                    Next
                  </button>
                  <button
                    v-if="StepIndex == steps.length - 1"
                    @click="Create"
                    class="
                      text-white
                      font-bold
                      text-base
                      font-Inter
                      bg-primary-blue
                      py-2
                      px-4
                      rounded-md
                      hover:bg-opacity-80
                    "
                  >
                    Create
                  </button>
                </div>
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
import IconPlus from "../../../Icons/IconPlus.vue";
import IconMessage from "../../../Icons/IconMessage.vue";
import IconProfile from "../../../Icons/IconProfile.vue";
import IconShild from "../../../Icons/IconShild.vue";
import IconCheck from "../../../Icons/IconCheck.vue";
import IconArrowLeft from "../../../Icons/IconArrowLeft.vue";
import NewProjectCard from "./cards/NewProjectCard.vue";
import ProjectBriefingCard from "./cards/ProjectBriefingCard.vue";
import InviteContent from "./cards/InviteContent.vue";
import SetPermissions from "./cards/SetPermissions.vue";
import Summary from "./cards/Summary.vue";
import { useStore } from "../../../stores/NewProjectStore.js";

export default {
  setup() {
    /// let  store = useStore(),
    const store = useStore();
    const open = ref(false);
    const steps = ref([
      {
        title: "New Project",
        active: true,
        icon: IconPlus,
        step: 0,
      },
      {
        title: "Project Briefing",
        active: false,
        icon: IconMessage,
        step: 1,
      },
      {
        title: "Invite Content Creator",
        active: false,
        icon: IconProfile,
        step: 2,
      },
      {
        title: "Permissions",
        active: false,
        icon: IconShild,
        step: 3,
      },
      {
        title: "Summary",
        active: false,
        icon: IconCheck,
        step: 4,
      },
    ]);
    const StepIndex = ref(0);
    const Next = () => {
      if (StepIndex.value < steps.value.length - 1) {
        StepIndex.value++;
      }

      steps.value.forEach((step, index) => {
        step.active = index == StepIndex.value;
      });
    };
    const Back = () => {
      if (StepIndex.value > 0) {
        StepIndex.value--;
      }
      steps.value.forEach((step, index) => {
        step.active = index == StepIndex.value;
      });
    };
    const Skip = () => {
      if (StepIndex.value < steps.value.length - 1) {
        StepIndex.value++;
      }
      steps.value.forEach((step, index) => {
        step.active = index == StepIndex.value;
      });
    };
    const Cancel = () => {
      open.value = false;
    };
    const OpenModal = () => {
      open.value = true;
    };
    const Create = () => {
      //create code here

      //clear store
      clear();
      //reset step index
      reset();
      //close modal after create
      open.value = false;
    };
    const reset = () => {
      StepIndex.value = 0;
      steps.value.forEach((step, index) => {
        step.active = index == StepIndex.value;
      });
    };
    const clear = () => {
      store.clear();
    };
    return {
      IconPlus,
      IconMessage,
      IconProfile,
      IconShild,
      IconCheck,
      steps,
      Next,
      Back,
      StepIndex,
      open,
      OpenModal,
      Cancel,
      store,
      Skip,
      Create,
      clear,
      reset,
    };
  },
  components: {
    IconArrowLeft,
    NewProjectCard,
    ProjectBriefingCard,
    InviteContent,
    SetPermissions,
    Summary,
  },
};
</script>


<style scoped>
.rounded-color {
  background-color: #f4f6f8;
}
</style>