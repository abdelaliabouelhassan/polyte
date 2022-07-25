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
//Settings
import SettingsIndex from '../views/Settings/index.vue'
import SettingsOverview from '../views/Settings/Overview.vue'
import SettingsSubscription from '../views/Settings/Subscription.vue'
import SettingsManageUsers from '../views/Settings/ManageUsers.vue'
import SettingsManageRoles from '../views/Settings/ManageRoles.vue'
import SettingsManageLicences from '../views/Settings/ManageLicences.vue'
import SettingsManageCompanies from '../views/Settings/ManageCompanies.vue'
import SettingsBilling from '../views/Settings/Billing.vue'
//user profile
import UserProfile from '../views/Profile/index.vue'
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
    {
        path: '/settings', component: SettingsIndex, name: 'app-settings', children: [
            { path: 'overview', component: SettingsOverview, name: 'app-settings-overview' },
            { path: 'subscription', component: SettingsSubscription, name: 'app-settings-subscription' },
            { path: 'manage-users', component: SettingsManageUsers, name: 'app-settings-manage-users' },
            { path: 'manage-roles', component: SettingsManageRoles, name: 'app-settings-manage-roles' },
            { path: 'manage-licences', component: SettingsManageLicences, name: 'app-settings-manage-licences' },
            { path: 'manage-companies', component: SettingsManageCompanies, name: 'app-settings-manage-companies' },
            { path: 'billing', component: SettingsBilling, name: 'app-settings-billing' },
        ]
    },
    { path: '/profile', component: UserProfile, name: 'profile' },

   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;