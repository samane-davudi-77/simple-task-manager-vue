import {createRouter, createWebHistory} from 'vue-router'

import MyAbout from '../views/MyAbout.vue'
import MyHome from '../views/MyHome.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MyHome
    },
    {
        path: '/about',
        name: 'MyAbout',
        component: MyAbout
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router