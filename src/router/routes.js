import { createRouter, createWebHistory } from 'vue-router'

//pages
import Overview from '../views/Overview.vue'
import ManageContent from '../views/ManageContent.vue'
import ProjectIndex from '../views/ManageProjects/index.vue'
import Projects from '../views/ManageProjects/Projects.vue'
import ProjectDetails from '../views/ManageProjects/ProjectDetails.vue'
import Settings from '../views/Settings.vue'
const routes = [
    { path: '/', component: Overview, name: 'home' },
    { path: '/overview', component: Overview, name: 'overview' },
    { path: '/manage-content', component: ManageContent, name: 'manage-content' },
    { path: '/manage-projects', component: ProjectIndex, name: 'manage-projects',children:[
        { path: 'projects', component: Projects, name: 'manage-projects-projects' },
        { path: ':id', component: ProjectDetails, name: 'manage-projects-details' },
        { path: 'create', component: ProjectDetails, name: 'manage-projects-create' },
    ] },

    { path: '/settings', component: Settings, name: 'settings' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;