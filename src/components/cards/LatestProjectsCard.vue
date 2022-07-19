<template>
  <div class="w-full flex flex-col items-start space-y-4 font-Inter">
    <div class="flex justify-between items-center w-full">
      <span class="text-primary-black font-bold text-3xl">Latest Projects</span>
      <button
        class="
          text-primary-black text-xl
          font-normal
          py-2
          px-4
          rounded-md
          bg-primary-gray hover:bg-gray-300 
        "
      >
        All Projects
      </button>
    </div>
    <div
      class="w-full bg-white rounded-2xl overflow-hidden card-border space-y-10"
    >
      <div class="grid grid-cols-2 gap-10 p-6">
        <div
          class="flex flex-col items-center space-y-2"
          v-for="(project, index, key) in projects"
          :key="key"
        >
          <div
            class="w-[110px] h-[90px] rounded-xl overflow-hidden cursor-pointer"
            :style="{ border: '6px solid ' + project.color + '36' }"
          >
            <div
              class="w-full h-full flex relative"
              :style="{ background: project.color }"
            >
              <div class="m-auto">
                <IconProject />
              </div>

              <div class="absolute top-2 right-2" v-if="project.favorite">
                <IconStar />
              </div>
            </div>
          </div>

          <div class="flex items-center flex-col space-y-2">
            <span class="font-normal font-Inter text-xl text-primary-black">{{
              project.name
            }}</span>
            <div class="flex -space-x-1 overflow-hidden">
              <img
                v-for="(user, userindex, userkey) in project.users"
                :key="userkey"
                class="
                  inline-block
                  h-6
                  w-6
                  rounded-full
                  ring-2 ring-white
                  bg-[#DBDBDB]
                "
                :src="user.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          flex
          justify-between
          items-center
          w-full
          border-0 border-t-4 border-tertiary-gray
          py-6
          px-4
          rounded-t-md
        "
      >
        <button class="flex w-full bg-primary-blue hover:bg-opacity-90 py-2 px-2 rounded-lg max-w-xs m-auto">
          <div class="m-auto flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.885"
              height="13.885"
              viewBox="0 0 13.885 13.885"
            >
              <path
                id="Path_33"
                data-name="Path 33"
                d="M12.635,5.692H8.193V1.25a1.25,1.25,0,1,0-2.5,0V5.692H1.25a1.25,1.25,0,0,0,0,2.5H5.693v4.442a1.25,1.25,0,1,0,2.5,0V8.192h4.442a1.25,1.25,0,0,0,0-2.5"
                fill="#fff"
              />
            </svg>

            <span class="text-xl text-white font-normal font-Inter"
              >New Project wizard</span
            >
          </div>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import IconProject from "../../Icons/IconProject.vue";
import IconStar from "../../Icons/IconStar.vue";
export default {
  components: {
    IconProject,
    IconStar,
  },
  setup() {
    const projects = ref([
      {
        name: "Adidas Sport Shoe",
        favorite: true,
        color: "#FFC964",
        users: [
          {
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        name: "Adidas Sport Shoe",
        favorite: false,
        color: "#FF648E",
        users: [
          {
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        name: "Adidas Sport Shoe",
        favorite: false,
        color: "#16F49E",
        users: [
          {
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        ],
      },
      {
        name: "Adidas Sport Shoe",
        favorite: false,
        color: "#6482FF",
        users: [
          {
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
          },
          {
            image:
              "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
          
        ],
      },
    ]);
   
    return {
      projects,
    };
  },
};
</script>



<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px;
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