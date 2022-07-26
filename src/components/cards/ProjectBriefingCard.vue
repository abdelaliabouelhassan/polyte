<template>
  <div class="w-full flex flex-col items-start space-y-4 relative">
    <span class="text-primary-black font-bold font-Inter text-3xl"
      >Project Briefing</span
    >
    <div class="w-full h-72">
      <editor
        v-model="content"
       
      />
    </div>
  </div>
</template>


<script>
import Editor from "../widgets/Editor.vue";

export default {
  data() {
    return {
      content: "",
    };
  },
  components: {
    Editor,
  },
};
</script>


<style scoped>
textarea {
  resize: none;
}
</style>