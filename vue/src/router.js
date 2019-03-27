import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from './layouts/MainLayout';

Vue.use(Router);

const routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            { path: 'heroes', component: () => import('./components/heroes/Heroes') },
            { path: '/', redirect: '/heroes' },
            { path: 'tv', component: () => import('./components/television/Television') },
            { path: 'about', component: () => import('./components/about/About') }
        ]
    },
    { path: '*', redirect: '/heroes' }
];

export default new Router({
    mode: 'history',
    routes
});
