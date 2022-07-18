<template>
  <HomeLayout>
    <template v-slot:content>
    <div class=" py-16">
      <h1>Manage Poject page</h1>
    </div>
    </template>
  </HomeLayout>
</template>

<script>    
import HomeLayout from "../layouts/HomeLayout.vue";

export default {
  components: {
   HomeLayout
  },
};
</script>