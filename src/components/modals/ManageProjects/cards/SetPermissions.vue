<template>
  <div class="w-full flex flex-col items-start space-y-8">
    <div class="flex items-center space-x-4">
      <div
        class="
          w-[89px]
          h-[71px]
          rounded-xl
          overflow-hidden
          cursor-pointer
          group-hover:absolute group-hover:bottom-2
          bottom-0
          transition-all
          duration-300
          ease-in-out
        "
        :style="{ border: '6px solid ' + store.NewProject.color + '36' }"
      >
        <div
          class="w-full h-full flex relative"
          :style="{ background: store.NewProject.color }"
        >
          <div class="m-auto">
            <IconProject />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start space-y-1">
        <span
          class="
            text-xl text-primary-black text-opacity-40
            font-bold font-Inter
          "
          >{{ store.NewProject.name }}</span
        >
        <span class="text-xl font-bold text-primary-black font-Inter"
          >Set Permissions</span
        >
      </div>
    </div>
    <div class="flex flex-col items-start space-y-2">
      <span class="font-bold font-Inter text-primary-black text-lg"
        >This project can be seen and edited by my teammates</span
      >
      <div class="flex items-center space-x-2">
        <div>
          <input type="checkbox" v-model="store.Permissions.Privat" />
        </div>
        <span
          class="
            text-xl
            font-normal font-Inter
            text-opacity-60 text-primary-black
          "
          >{{ store.Permissions.Privat ? "Privat" : "Set Privat" }}</span
        >
      </div>

      <div class="flex items-start flex-col pt-10 space-y-4">
        <span class="text-xl text-primary-black font-bold font-Inter"
          >External Content Creators</span
        >
        <div class="flex flex-col items-start -space-y-2">
          <div class="flex items-center -space-x-10 -space-y-4">
            <label class="control control-checkbox">
              <input
                type="checkbox"
                v-model="store.Permissions.permissions"
                value="Can work on this project"
              />
              <div class="control_indicator"></div>
            </label>
            <span
              class="
                text-primary-black text-opacity-60 text-xl
                font-light font-Inter
              "
              >Can work on this project</span
            >
          </div>
          <div class="flex items-center -space-x-10 -space-y-4">
            <label class="control control-checkbox">
              <input
                type="checkbox"
                v-model="store.Permissions.permissions"
                value="Can deploy to my company"
              />
              <div class="control_indicator"></div>
            </label>
            <span
              class="
                text-primary-black text-opacity-60 text-xl
                font-light font-Inter
              "
              >Can deploy to my company</span
            >
          </div>
          <div class="flex items-center -space-x-10 -space-y-4">
            <label class="control control-checkbox">
              <input
                type="checkbox"
                v-model="store.Permissions.permissions"
                value="Can copy elements from my project"
              />
              <div class="control_indicator"></div>
            </label>
            <span
              class="
                text-primary-black text-opacity-60 text-xl
                font-light font-Inter
              "
              >Can copy elements from my project</span
            >
          </div>
          <div class="flex items-center -space-x-10 -space-y-4">
            <label class="control control-checkbox">
              <input
                type="checkbox"
                v-model="store.Permissions.permissions"
                value="Can manage my project"
              />
              <div class="control_indicator"></div>
            </label>
            <span
              class="
                text-primary-black text-opacity-60 text-xl
                font-light font-Inter
              "
              >Can manage my project</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import IconProject from "../../../../Icons/IconProject.vue";
import { useStore } from "../../../../stores/NewProjectStore.js";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  components: {
    IconProject,
  },
};
</script>

<style scoped>
.control {
  font-family: arial;
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 5px;
  padding-top: 3px;
  cursor: pointer;
  font-size: 16px;
}
.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.control_indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border: 0px solid #000000;
  border-radius: 6px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
  background: #cccccc;
}

.control input:checked ~ .control_indicator {
  background: #505efd;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:disabled ~ .control_indicator {
  background: #e6e6e6;
  opacity: 0.6;
  pointer-events: none;
}
.control_indicator:after {
  box-sizing: unset;
  content: "";
  position: absolute;
  display: none;
}
.control input:checked ~ .control_indicator:after {
  display: block;
}
.control-checkbox .control_indicator:after {
  left: 8px;
  top: 4px;
  width: 3px;
  height: 8px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
  border-color: #7b7b7b;
}
</style>


<style scoped>
input[type="checkbox"] {
  position: relative;
  width: 50px;
  height: 28px;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: #dedee3;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  transition: background 300ms linear;
}
input[type="checkbox"]::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  top: 4px;
  left: 4px;
  border-radius: 20px;
  background-color: #ffffff;
  transform: scale(1.1);
  transition: left 300ms linear;
}
input[type="checkbox"]:checked {
  background: #001324;
}
input[type="checkbox"]:checked::before {
  left: 26px;
  background-color: #dedee3;
}
</style>