import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/index.vue';

const routes = [
    { 
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: () => import("@/pages/about.vue"),
    },
    {
        path: '/contact',
        component: () => import("@/pages/contact.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;