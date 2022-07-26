<template>
  <div class="w-full flex flex-col items-start space-y-4">
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
          >Project Briefing</span
        >
      </div>
    </div>
    <div
      class="w-full h-96 bg-white rounded-2xl overflow-hidden"
    >
      <editor
        v-model="content"
       
      />
    </div>
  </div>
</template>


<script>
import IconProject from "../../../../Icons/IconProject.vue";
import Editor from "../../../widgets/Editor.vue";

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
    Editor
  },
};
</script>


<style scoped>
textarea {
  resize: none;
}
</style>