import { createRouter, createWebHistory } from 'vue-router'

//home
import Overview from '../views/Overview.vue'
//manage-content
import ManageContentIndex from '../views/ManageContent/index.vue'
import ManageContentProducts from '../views/ManageContent/Products.vue'
import ManageContentOverview from '../views/ManageContent/Overview.vue'
import VariantOptions from '../views/ManageContent/VariantOptions.vue'
import CameraViews from '../views/ManageContent/CameraViews.vue'
import Integrateion from '../views/ManageContent/Integrateion.vue'
//manage-projects
import ProjectIndex from '../views/ManageProjects/index.vue'
import Projects from '../views/ManageProjects/Projects.vue'
import ProjectDetails from '../views/ManageProjects/ProjectDetails.vue'


import Settings from '../views/Settings.vue'
const routes = [
    { path: '/', component: Overview, name: 'home' },
    { path: '/overview', component: Overview, name: 'overview' },
    {
        path: '/manage-content', component: ManageContentIndex, name: 'manage-contents', children: [
            { path: 'Products', component: ManageContentProducts, name: 'manage-contents-Products' },
            { path: ':id/overview', component: ManageContentOverview, name: 'manage-contents-overview' },
            { path: ':id/variant-options', component: VariantOptions, name: 'manage-contents-variant-options' },
            { path: ':id/camera-views', component: CameraViews, name: 'manage-contents-camera-views' },
            { path: ':id/integrateion', component: Integrateion, name: 'manage-contents-integrateion' },
        ]
    },
    {
        path: '/manage-projects', component: ProjectIndex, name: 'manage-projects', children: [
            { path: 'projects', component: Projects, name: 'manage-projects-projects' },
            { path: ':id', component: ProjectDetails, name: 'manage-projects-details' },
            { path: 'create', component: ProjectDetails, name: 'manage-projects-create' },
        ]
    },


    { path: '/settings', component: Settings, name: 'settings' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;