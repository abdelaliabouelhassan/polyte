<template>
  <div class="w-full flex flex-col items-start space-y-4">
    <span class="text-primary-black font-bold font-Inter text-3xl"
      >Statistics</span
    >
    <div class="w-full bg-white rounded-2xl overflow-hidden input-border">
      <div class="flex items-center w-full">
        <div
          class="
            p-5
            border-0 border-r-4 border-b-4 border-tertiary-gray
            w-full
            h-16
          "
        >
          <span class="text-xl font-light text-primary-black font-Inter"
            >Project Size: <span class="font-bold"> 827 mb</span></span
          >
        </div>
        <div class="p-5 border-0 border-b-4 border-tertiary-gray w-full h-16">
          <span class="text-xl font-light text-primary-black font-Inter"></span>
        </div>
      </div>
      <div class="flex items-center w-full">
        <div
          class="
            p-5
            border-0 border-r-4 border-tertiary-gray
            w-full
            flex flex-col
            items-start
            space-y-2
          "
        >
          <div class="flex items-center space-x-3">
            <IconAssemble />
            <span class="text-xl font-light font-Inter text-primary-black"
              >27 Asemblies</span
            >
          </div>
          <div class="flex items-center space-x-3">
            <IconGeometries />
            <span class="text-xl font-light font-Inter text-primary-black"
              >581 Geometries</span
            >
          </div>
          <div class="flex items-center space-x-3">
            <IconMaterials />
            <span class="text-xl font-light font-Inter text-primary-black"
              >14 Materials</span
            >
          </div>
        </div>
        <div class="p-5 w-full flex flex-col items-start space-y-2">
          <div class="flex items-center space-x-3">
            <IconTextures />
            <span class="text-xl font-light font-Inter text-primary-black"
              >78 Textures</span
            >
          </div>
          <div class="flex items-center space-x-3">
            <IconVariant />
            <span class="text-xl font-light font-Inter text-primary-black"
              >592 Variants</span
            >
          </div>
          <div class="flex items-center space-x-3">
            <IconAnimations />
            <span class="text-xl font-light font-Inter text-primary-black"
              >5 Animations</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import IconAssemble from "../../icons/IconAssemble.vue";
import IconGeometries from "../../icons/IconGeometries.vue";
import IconAnimations from "../../icons/IconAnimations.vue";
import IconVariant from "../../icons/IconVariant.vue";
import IconTextures from "../../icons/IconTextures.vue";
import IconMaterials from "../../icons/IconMaterials.vue";
export default {
  components: {
    IconAssemble,
    IconGeometries,
    IconAnimations,
    IconVariant,
    IconTextures,
    IconMaterials
  },
};
</script>

