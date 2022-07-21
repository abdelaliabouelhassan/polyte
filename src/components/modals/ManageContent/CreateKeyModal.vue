<template>
  <div
    v-if="open"
    class="relative z-50 font-Inter"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        fixed
        inset-0
        bg-[#00132422] bg-opacity-100
        transition-opacity
        overflow-hidden
      "
      style="backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px)"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="
          flex
          items-end
          sm:items-center
          justify-center
          min-h-full
          text-center
          sm:p-0
        "
      >
        <div
          class="
            relative
            bg-white
            rounded-[27px]
            p-10
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:w-full
            modal-border
            space-y-24
            max-w-5xl
          "
        >
          <span class="text-3xl text-primary-black font-bold">Create Key</span>
          <div class="w-full flex max-w-md mx-auto">
            <div class="m-auto w-full">
              <label
                for="email"
                class="block text-xl font-bold text-primary-black font-Inter"
                >Key Name</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="
                    w-full
                    bg-white
                    px-4
                    py-2
                    rounded-xl
                    outline-none
                    input-ring
                    text-bases
                    placeholder-primary-black placeholder-opacity-50
                    font-light font-Inter
                  "
                  placeholder="Enter Email"
                  aria-describedby="email-description"
                />
              </div>
              <p
                class="
                  mt-2
                  text-base
                  font-light
                  text-primary-black
                  font-Inter
                  text-opacity-50
                "
                id="email-description"
              >
                The key itself is generated automatically
              </p>
            </div>
          </div>

          <div class="w-full flex justify-between items-center">
            <button
             @click="close"
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                text-sm
                font-medium
                rounded-md
                shadow-sm
                text-primary-black
                bg-secondary-gray
                hover:bg-opacity-80
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-secondary-gray
              "
            >
              Cancel
            </button>
            <button
              @click="create"
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                text-sm
                font-medium
                rounded-md
                shadow-sm
                text-white
                bg-primary-blue
                hover:bg-opacity-80
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-primary-blue
              "
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const open = ref(false);

    const openModal = () => {
      open.value = true;
    };
    const close = ()  =>{
      open.value = false;
    }
    const create = () => {
      //code

      //close
      close();
    }
    return {
      openModal,
      open,
      create,
      close
    };
  },
};
</script>


