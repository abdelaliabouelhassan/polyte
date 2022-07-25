<template>
  <div class="w-full h-full">
    <Header />
    <div class="w-full pt-[4.9rem]">
      <div class="relative">
        <button
         @click="openSidebar"
          type="button"
          class="
            p-3
            rounded-md
            border-r border-gray-200
            focus:outline-none focus:ring-2
            bg-secondary-gray
            text-primary-black
            focus:ring-inset focus:ring-secondary-gray
            absolute
            left-5
            top-10 xl:hidden
          "
        >
          <span class="sr-only">Open sidebar</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div
          v-show="show"
          class="relative z-40 xl:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

          <div class="fixed inset-0 flex z-40">
            <div
              class="
                relative
                flex-1 flex flex-col
                max-w-2xl
                w-full
                pt-5
                pb-4
                bg-quaternary-gray
                border-0 border-r-2 border-secondary-gray
              "
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  @click="CloseSideBar"
                  type="button"
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-white
                  "
                >
                  <span class="sr-only">Close sidebar</span>
                  <!-- Heroicon name: outline/x -->
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <slot name="sidebar"></slot>
            </div>

            <div class="flex-shrink-0 w-14" aria-hidden="true">
              <!-- Dummy element to force sidebar to shrink to fit close icon -->
            </div>
          </div>
        </div>
        <div
          class="
            flex
            w-0
            xl:w-[400px]
            flex-col
            fixed
            inset-y-0
            pt-[4.9rem]
            z-40
          "
        >
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
        <div class="xl:pl-64 flex flex-col flex-1">
          <main>
            <slot name="content"></slot>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import Header from "./header.vue";
export default {
  setup() {
    const show = ref(false);
    const CloseSideBar = () => {
      show.value = false;
    };
    const openSidebar = () => {
      show.value = true;
    };
    return {
      CloseSideBar,
      openSidebar,
      show,
    };
  },
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


