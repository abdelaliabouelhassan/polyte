<template>
  <div class="w-full flex flex-col items-start space-y-16">
    <div class="flex items-center space-x-4">
      <div
        class="
          w-[89px]
          h-[71px]
          rounded-xl
          overflow-hidden
          cursor-pointer
          group-hover:absolute group-hover:bottom-2
          bottom-0
          transition-all
          duration-300
          ease-in-out
        "
        :style="{ border: '6px solid ' + store.NewProject.color + '36' }"
      >
        <div
          class="w-full h-full flex relative"
          :style="{ background: store.NewProject.color }"
        >
          <div class="m-auto">
            <IconProject />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start space-y-1">
        <span
          class="
            text-xl text-primary-black text-opacity-40
            font-bold font-Inter
          "
          >{{ store.NewProject.name }}</span
        >
        <span class="text-xl font-bold text-primary-black font-Inter"
          >Invite Content Creator</span
        >
      </div>
    </div>
    <div class="w-full flex flex-col items-start space-y-16">
      <div class="flex flex-col items-start space-y-4">
        <p class="text-lg font-light text-primary-black font-Inter text-left">
          Content creators can help you create the digital models you Need for
          your product experiences. Thy are specialized to maximize the output.
        </p>
        <div class="flex justify-between w-full items-center">
          <span
            class="
              text-lg text-primary-black text-opacity-50
              font-bold font-Inter
            "
            >You don’t know any one to help?</span
          >
          <button
            class="
              text-primary-black
              font-normal
              text-sm
              font-Inter
              bg-[#0013240F]
              py-2
              px-4
              rounded-md
              hover:bg-secondary-gray
            "
          >
            Get in touch
          </button>
        </div>
      </div>

      <div class="w-full">
        <label
          for="email"
          class="block text-xl font-bold text-primary-black font-Inter"
          >Invite 3D Content Creator:</label
        >
        <div class="mt-1">
          <input
            v-model="store.InviteContent.email"
            type="email"
            name="email"
            id="email"
            class="
              w-full
              bg-white
              px-4
              py-2
              rounded-xl
              outline-none
              input-ring
              text-bases
              placeholder-primary-black placeholder-opacity-50
              font-light font-Inter
            "
            placeholder="Enter Email"
            aria-describedby="email-description"
          />
        </div>
        <p
          class="
            mt-2
            text-base
            font-light
            text-primary-black
            font-Inter
            text-opacity-50
          "
          id="email-description"
        >
          You can add a content creator later
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import IconProject from "../../../../Icons/IconProject.vue";
import { useStore } from "../../../../stores/NewProjectStore.js";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    IconProject,
  },
};
</script>


<style scoped>
textarea {
  resize: none;
}
</style>