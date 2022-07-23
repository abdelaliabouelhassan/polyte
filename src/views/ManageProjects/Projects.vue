<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <div class="w-full flex flex-col items-start space-y-10 px-5">
        <span class="text-primary-black font-bold text-3xl font-Inter"
          >All Projects</span
        >
        <div class="flex flex-col items-start space-y-4 w-full">
          <button
            @click="NewProject"
            type="button"
            class="
              w-full
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              shadow-sm
              text-lg
              font-normal font-Inter
              rounded-md
              text-white
              bg-primary-blue
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
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
              <span> New Project wizard</span>
            </div>
          </button>
          <button
            @click="openProject"
            type="button"
            class="
              w-full
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              shadow-sm
              text-lg
              font-normal font-Inter
              rounded-md
              text-primary-black
              bg-secondary-gray
              hover:bg-tertiary-gray
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-tertiary-gray
            "
          >
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
                  fill="#001324"
                />
              </svg>
              <span>Create empty project</span>
            </div>
          </button>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <div class="py-20 max-w-7xl m-auto px-4 pl-8 space-y-24">
        <div class="flex items-center justify-between w-full px-2">
          <span class="text-3xl font-bold text-primary-black">Projects</span>
          <div class="flex items-center space-x-4 max-w-xl w-full">
            <div class="max-w-[540px] w-full h-[46px] relative">
              <div class="absolute left-4 top-4">
                <IconSearch />
              </div>
              <input
                type="text"
                class="
                  w-full
                  h-full
                  rounded-lg
                  bg-white
                  outline-none
                  pl-10
                  px-4
                  placeholder-opacity-25 placeholder-primary-black
                  text-xl
                  font-light font-Inter
                  input-border
                "
                placeholder="Search"
              />
            </div>
            <button
              class="h-[46px] w-[56px] rounded-lg bg-white flex input-border"
            >
              <FilterIcon class="m-auto" />
            </button>
            <button
              class="h-[46px] w-[56px] rounded-lg bg-white flex input-border"
            >
              <SelectIcon class="m-auto" />
            </button>
            <button
              class="h-[46px] w-[56px] rounded-lg bg-white flex input-border"
            >
              <IconBlackStart class="m-auto" />
            </button>
          </div>
        </div>

        <div class="w-full grid grid-cols-4 gap-10">
          <div
            class="
              flex flex-col
              items-center
              space-y-2
              w-full
              h-full
              group
              hover:bg-white
              pb-20
              pt-4
              px-5
              rounded-xl
            "
            v-for="(project, index, key) in projects"
            :key="key"
          >
            <div class="w-[110px] h-[90px] relative">
              <div
                class="
                  w-[110px]
                  h-[90px]
                  rounded-xl
                  overflow-hidden
                  cursor-pointer
                  group-hover:absolute group-hover:bottom-2
                  bottom-0
                  transition-all
                  duration-300
                  ease-in-out
                "
                :style="{ border: '6px solid ' + project.color + '36' }"
              >
                <div
                  class="w-full h-full flex relative"
                  :style="{ background: project.color }"
                >
                  <div class="m-auto" @click="openProject">
                    <IconProject />
                  </div>

                  <div
                    class="absolute top-2 right-2"
                    v-if="project.favorite"
                    @click="project.favorite = !project.favorite"
                  >
                    <IconStar />
                  </div>
                  <button
                    class="absolute top-2 right-2 hidden group-hover:block"
                    v-else
                    @click="project.favorite = !project.favorite"
                  >
                    <IconStartOpacity />
                  </button>
                  <button class="absolute bottom-2 right-2">
                    <Iconshare />
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center flex-col space-y-2">
              <span class="font-normal font-Inter text-xl text-primary-black">{{
                project.name
              }}</span>
              <div class="flex -space-x-1 ">
                <img
                  v-for="(user, userindex, userkey) in project.users"
                  :key="userkey"
                  class="
                    inline-block
                    h-6
                    w-6
                    rounded-full
                    ring-2 ring-white
                    bg-[#DBDBDB]   hover:scale-125 ease-in-out duration-300 delay-150 hover:z-50
                  "
                  :src="user.image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewProjectModal ref="NewProjectModal" />
    </template>
  </SidebarLayout>
</template>

<script>
import SidebarLayout from "../../layouts/SidebarLayout.vue";
import IconSearch from "../../Icons/IconSearch.vue";
import FilterIcon from "../../Icons/FilterIcon.vue";
import SelectIcon from "../../Icons/SelectIcon.vue";
import IconBlackStart from "../../Icons/IconBlackStart.vue";
import IconProject from "../../Icons/IconProject.vue";
import IconStar from "../../Icons/IconStar.vue";
import IconStartOpacity from "../../Icons/IconStartOpacity.vue";
import Iconshare from "../../Icons/Iconshare.vue";
import NewProjectModal from "../../components/modals/ManageProjects/NewProjectModal.vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SidebarLayout,
    IconSearch,
    FilterIcon,
    SelectIcon,
    IconBlackStart,
    IconProject,
    IconStar,
    IconStartOpacity,
    Iconshare,
    NewProjectModal,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const NewProjectModal = ref(null);
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
        color: "#64BDFD",
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
        color: "#28F49E",
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
        color: "#001324",
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
      {
        name: "Adidas Sport Shoe",
        favorite: false,
        color: "#001324",
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
      {
        name: "Adidas Sport Shoe",
        favorite: false,
        color: "#FA5A3D",
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
      {
        name: "Adidas Sport Shoe",
        favorite: false,
        color: "#001324",
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

    const openProject = () => {
      router.push({ name: "manage-projects-details", params: { id: "1" } });
    };
    const NewProject = () => {
      NewProjectModal.value.OpenModal();
    };
    return {
      projects,
      openProject,
      NewProject,
      NewProjectModal,
    };
  },
};
</script>