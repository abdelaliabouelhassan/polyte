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
          <div class="w-full flex mx-auto">
            <div class="m-auto flex flex-col items-center space-y-16 w-full">
              <div class="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85.666"
                  height="81.571"
                  viewBox="0 0 85.666 81.571"
                >
                  <path
                    id="Path_1307"
                    data-name="Path 1307"
                    d="M67.767,39.151q-5.8,4.77-11.76,9.308a1.345,1.345,0,0,0-.474,1.459Q57.69,57.1,59.574,64.364A2.317,2.317,0,0,1,56.089,66.9Q49.76,62.859,43.6,58.587a1.343,1.343,0,0,0-1.534,0q-6.16,4.271-12.489,8.309a2.317,2.317,0,0,1-3.485-2.532q1.883-7.267,4.042-14.446a1.344,1.344,0,0,0-.474-1.459Q23.7,43.921,17.9,39.15a2.317,2.317,0,0,1,1.331-4.1q7.493-.454,14.986-.619a1.346,1.346,0,0,0,1.242-.9q2.473-7.076,5.22-14.062a2.316,2.316,0,0,1,4.308,0q2.747,6.986,5.22,14.062a1.346,1.346,0,0,0,1.242.9q7.493.166,14.986.62a2.316,2.316,0,0,1,1.331,4.1M43.834,9.571V1a1,1,0,1,0-2,0v8.57a1,1,0,1,0,2,0M76.824,34.995l8.151-2.648a1,1,0,0,0-.619-1.9L76.2,33.091a1,1,0,1,0,.619,1.9M69.274,81.38a1,1,0,0,0,.221-1.4l-5.037-6.934a1,1,0,0,0-1.619,1.177l5.037,6.934a1,1,0,0,0,1.4.221m-51.486-.222,5.037-6.934a1,1,0,1,0-1.619-1.177l-5.037,6.934a1,1,0,0,0,1.619,1.177M10.1,34.351a1,1,0,0,0-.643-1.261L1.31,30.441a1,1,0,1,0-.619,1.9l8.151,2.648a1,1,0,0,0,1.261-.643"
                    transform="translate(0)"
                    fill="#001324"
                  />
                </svg>
              </div>
              <span class="text-3xl text-primary-black font-bold text-center"
                >Invite a friend to become Polyte</span
              >
              <div class="flex w-full">
                <div class="m-auto flex items-center space-x-8 ">
                  <div
                    class="
                      w-[120px]
                      h-[120px]
                      rounded-[19px]
                      flex
                      bg-tertiary-gray
                    "
                  >
                    <span class="m-auto text-3xl text-primary-black font-bold"
                      >MW</span
                    >
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.696"
                      height="14.938"
                      viewBox="0 0 17.696 14.938"
                    >
                      <path
                        id="Path_1306"
                        data-name="Path 1306"
                        d="M17.047,9.039h0l-5.25,5.25a2.219,2.219,0,0,1-3.138-3.138l1.463-1.463h-7.9a2.219,2.219,0,0,1,0-4.437h7.9L8.658,3.788A2.219,2.219,0,0,1,11.8.65l5.25,5.25a2.219,2.219,0,0,1,0,3.138"
                        transform="translate(0 0)"
                        fill="#001324"
                      />
                    </svg>
                  </div>
                  <div class="">
                    <label
                      for="email"
                      class="
                        block
                        text-xl
                        font-bold
                        text-primary-black
                        font-Inter
                      "
                      >I would like to invite the following friend:</label
                    >
                    <div class="mt-1">
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
                      The recipient will receive an email
                    </p>
                  </div>
                </div>
              </div>
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
              Save
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
    const close = () => {
      open.value = false;
    };
    const create = () => {
      //code

      //close
      close();
    };
    return {
      openModal,
      open,
      create,
      close,
    };
  },
};
</script>


