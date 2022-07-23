<template>
  <div class="w-full flex flex-col items-start space-y-8">
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
          >Summary</span
        >
      </div>
    </div>
    <div class="w-full flex flex-col items-start space-y-10">
      <div class="flex flex-col items-start space-y-5 w-full">
        <div class="grid grid-cols-3 gap-5 w-full">
          <span class="text-xl text-primary-black font-bold font-Inter"
            >Name</span
          >
          <span
            class="
              text-xl text-primary-black
              font-normal font-Inter
              text-opacity-60
              col-span-2
            "
            >{{ store.NewProject.name }}</span
          >
        </div>
        <div class="grid grid-cols-3 gap-5 w-full">
          <span class="text-xl text-primary-black font-bold font-Inter"
            >Briefing</span
          >
          <span
            class="
              text-xl text-primary-black
              font-normal font-Inter
              text-opacity-60
              col-span-2
            "
            >{{ store.ProjectBriefing.content }}</span
          >
        </div>
      </div>
      <div class="flex flex-col items-start space-y-5 w-full">
        <div class="grid grid-cols-3 gap-5 w-full">
          <span class="text-xl text-primary-black font-bold font-Inter"
            >External</span
          >
          <span
            class="
              text-xl text-primary-black
              font-normal font-Inter
              text-opacity-60
              col-span-2
            "
            >{{ store.InviteContent.email }}</span
          >
        </div>
        <div class="grid grid-cols-3 gap-5 w-full">
          <span class="text-xl text-primary-black font-bold font-Inter"
            >Visible</span
          >
          <span
            class="
              text-xl text-primary-black
              font-normal font-Inter
              text-opacity-60
              col-span-2
            "
            >{{
              store.Permissions.Privat
                ? "This Project can't be seen by my team mates"
                : "This Project can be seen by my team mates"
            }}
          </span>
        </div>
        <div class="grid grid-cols-3 gap-5 w-full">
          <span class="text-xl text-primary-black font-bold font-Inter"
            >Permissions</span
          >
          <span
            class="
              text-xl text-primary-black
              font-normal font-Inter
              text-opacity-60
              col-span-2
            "
            >{{ store.Permissions.permissions.length }} Permissions set</span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
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
