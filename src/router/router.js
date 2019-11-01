import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter);

function dynamicPropsFn(route) {
    const now = new Date();
    return {
        name: (now.getFullYear() + parseInt(route.params['years'])) + '!'
    }
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },// No props, no nothing
    {
        path: '/hello/:name',
        component: Home,
        props: true
    }, // Pass route.params to props,布尔类型
    {
        path: '/static',
        component: Home,
        props: {name: 'world'}
    }, // static values，对象类型
    {
        path: '/dynamic/:years',
        component: Home,
        props: dynamicPropsFn
    }, // custom logic for mapping between route and props，函数类型
    {
        path: '/attrs',
        component: Home,
        props: {name: 'attrs'}
    },//对象类型
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/model',
        component: () => import('@/views/model.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'router-link-active'
});

export default router
