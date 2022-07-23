<template>
  <div class="w-full h-full">
    <Header />
    <div class="w-full pt-[4.9rem]">
      <div>
        <div class="flex w-[400px] flex-col fixed inset-y-0 pt-[4.9rem]">
          <div
            class="
              flex flex-col flex-grow
              pt-5
              bg-quaternary-gray
              overflow-y-auto
              border-0 border-r-2 border-secondary-gray
            "
          >
            <div class="mt-5 flex-1 flex flex-col">
              <nav class="flex-1 px-2 pb-4 space-y-1">
                <slot name="sidebar"></slot>
              </nav>
            </div>
          </div>
        </div>
        <!-- content -->
        <div class="md:pl-64 flex flex-col flex-1">
          <main>
            <slot name="content"></slot>
          </main>
        </div>
      </div>
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



<style scoped>
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ebebf0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>


