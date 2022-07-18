import { createRouter, createWebHistory } from 'vue-router'

//pages
import Overview from '../views/Overview.vue'
import ManageContent from '../views/ManageContent.vue'
import ManageProjects from '../views/ManageProjects.vue'
import Settings from '../views/Settings.vue'
const routes = [
    { path: '/', component: Overview, name: 'home' },
    { path: '/overview', component: Overview, name: 'overview' },
    { path: '/manage-content', component: ManageContent, name: 'manage-content' },
    { path: '/manage-projects', component: ManageProjects, name: 'manage-projects' },
    { path: '/settings', component: Settings, name: 'settings' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;