import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppList from './pages/AppList.vue';
import AppContact from './pages/AppContact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'home',
        component: AppHome
        },
        {
        path: '/projects',
        name: 'projects',
        component: AppList
        },
        {
        path: '/contact',
        name: 'contact',
        component: AppContact
        }
    ]
});

export { router };