<template>
  <div class="w-full h-full">
    <Header />
    <div class="w-full py-16 px-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<script>
import Header from "./header.vue";
export default {
  components: {
    Header,
  },
};
</script>