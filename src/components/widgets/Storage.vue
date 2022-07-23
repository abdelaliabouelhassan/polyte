<template>
  <div class="w-full flex flex-col items-start space-y-2 font-Inter">
    <div class="w-full flex justify-between items-center pr-4">
      <span class="text-primary-black text-xl font-light font-Inter"
        >Storage</span
      >
    </div>
    <div
      class="
        w-full
        rounded-2xl
        bg-white
        py-6
        px-4
        space-y-4
        flex flex-col
        items-start
      "
    >
      <div class="flex items-center justify-between w-full">
        <span
          class="
            text-xl
            font-bold font-Inter
            text-primary-black text-opacity-80
          "
          >18 GB used
        </span>
        <span
          class="
            text-xl
            font-light font-Inter
            text-primary-black text-opacity-100
          "
          >500 GB</span
        >
      </div>

      <div class="w-full bg-quinary-gray rounded-full overflow-hidden h-3">
        <div class="w-40 bg-primary-blue h-full"></div>
      </div>


      <div class=" flex flex-col items-start space-y-2 pt-2" v-if="showMessage">
        <span class=" font-bold text-xl text-primary-black">You have used 24% of your storage</span>
        <span class=" font-light text-xl text-primary-black text-opacity-50">The storage relates to both products and editor projects</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    showMessage:{
      type:Boolean,
      default:false
    }
  }
}
</script>