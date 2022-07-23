<template>
  <div
    v-if="open"
    class="relative z-50"
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
            text-left
            overflow-hidden
            shadow-xl
            transform
            transition-all
            sm:w-full
            modal-border
            max-w-5xl
            p-10
          "
        >
          <div class="w-full flex flex-col items-start space-y-4">
            <div class="flex flex-col items-start space-y-4 w-full">
              <div class="flex items-center space-x-2 w-full">
                <IconProfile />
                <span class="font-bold font-Inter text-3xl text-primary-black"
                  >Create new User</span
                >
              </div>
              <div class="flex items-center space-x-2">
                <span
                  class="
                    text-xl
                    font-light font-Inter
                    text-primary-black text-opacity-50
                  "
                  >Company:</span
                >
                <select
                  name=""
                  id=""
                  class="
                    bg-white
                    border-[3px] border-secondary-gray
                    outline-none
                    rounded-xl
                    py-2
                    px-2
                    text-xl text-primary-black
                    focus:border-secondary-blue
                    font-bold
                    w-full
                  "
                >
                  <option value="">Berghain GmbH</option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-10 w-full">
                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Display Name</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="
                        bg-white
                        px-4
                        py-2
                        rounded-xl
                        border-[3px] border-secondary-gray
                        outline-none
                        focus:border-secondary-blue
                        text-bases
                        placeholder-primary-black placeholder-opacity-50
                        font-light font-Inter
                        w-full
                      "
                      placeholder="Enter Name"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
                <div></div>
                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Given Name</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="
                        bg-white
                        px-4
                        py-2
                        rounded-xl
                        border-[3px] border-secondary-gray
                        outline-none
                        focus:border-secondary-blue
                        text-bases
                        placeholder-primary-black placeholder-opacity-50
                        font-light font-Inter
                        w-full
                      "
                      placeholder="Enter Name"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Surname</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="
                        bg-white
                        px-4
                        py-2
                        rounded-xl
                        border-[3px] border-secondary-gray
                        outline-none
                        focus:border-secondary-blue
                        text-bases
                        placeholder-primary-black placeholder-opacity-50
                        font-light font-Inter
                        w-full
                      "
                      placeholder="Enter Surname"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Email</label
                  >
                  <div class="mt-1 w-full">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="
                        bg-white
                        px-4
                        py-2
                        rounded-xl
                        border-[3px] border-secondary-gray
                        outline-none
                        focus:border-secondary-blue
                        text-bases
                        placeholder-primary-black placeholder-opacity-50
                        font-light font-Inter
                        w-full
                      "
                      placeholder="Enter Email"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
                <div class="m-auto w-full space-y-2">
                  <label
                    for="email"
                    class="
                      block
                      text-xl
                      font-bold
                      text-primary-black
                      font-Inter
                    "
                    >Role</label
                  >
                  <div class="mt-1 w-full">
                    <select
                      name=""
                      id=""
                      class="
                        bg-white
                        border-[3px] border-secondary-gray
                        outline-none
                        rounded-xl
                        py-2
                        px-2
                        text-xl text-primary-black
                        focus:border-secondary-blue
                        font-bold
                        w-full
                      "
                    >
                      <option value="">Artist</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="w-full flex justify-between items-center pt-24">
                <button
                  @click="Cancel"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    px-8
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
                  @click="Create"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    px-10
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
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";

import IconArrowLeft from "../../../Icons/IconArrowLeft.vue";
import IconProfile from "../../../Icons/ProfileIcon.vue";
import { useStore } from "../../../stores/NewProjectStore.js";

export default {
  setup() {
    /// let  store = useStore(),
    const store = useStore();
    const open = ref(false);

    const Cancel = () => {
      open.value = false;
    };
    const OpenModal = () => {
      open.value = true;
    };
    const Create = () => {
      //create code here

      //close modal after create
      open.value = false;
    };

    return {
      Create,
      Cancel,
      OpenModal,
      open,
      store,
    };
  },
  components: {
    IconArrowLeft,
    IconProfile,
  },
};
</script>


<style scoped>
.rounded-color {
  background-color: #f4f6f8;
}
</style>