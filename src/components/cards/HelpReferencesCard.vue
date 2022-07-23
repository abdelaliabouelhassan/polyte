<template>
  <div class="w-full flex flex-col items-start space-y-16 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Help References</span>
    </div>
    <div class="flex flex-col items-start space-y-4 w-full">
      <div class="w-full justify-between flex items-center">
        <span class="text-xl font-normal font-Inter text-primary-black"
          >Manage my team</span
        >
        <a href="javascript:void(0)"><IconLink /></a>
      </div>
      <div class="w-full justify-between flex items-center">
        <span class="text-xl font-normal font-Inter text-primary-black"
          >How to integrate Polyte Player onto my site?</span
        >
        <a href="javascript:void(0)"><IconLink /></a>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "../../Icons/IconLink.vue";
export default {
  components: {
    IconLink,
  },
};
</script>