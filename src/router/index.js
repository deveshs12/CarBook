import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../components/layout/DefaultLayout.vue';
import HomePage from '../page/HomePage.vue';
import AboutPage from '../page/AboutPage.vue';
import BlogPage from '../page/BlogPage.vue';
import ContactPage from '../page/ContactPage.vue';
import ServicesPage from '../page/ServicePage.vue';
import PricingPage from '../page/PricingPage.vue';
import CarsPage from '../page/CarsPage.vue';
import CarDetails from '../../src/page/CarDetails.vue'
import BlogDetails from '../page/BlogDetail.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
           { 
                path: '',
                name: 'home',
                component: HomePage,
            },
            {
                path: '/about',
                name: 'about',
                component: AboutPage,
            },
            {
                path: '/blogs',
                name: 'blogs',
                component: BlogPage,
            },
            {
                path: '/blog/:id',
                name: "blogDetails",
                component: BlogDetails,
            },
            {
                path: '/contact',
                name: 'contact',
                component: ContactPage,
            },
            {
                path: '/services',
                name: 'services',
                component: ServicesPage,
            },
            {
                path: '/pricing',
                name: 'pricing',
                component: PricingPage,
            },
            {
                path: '/cars',
                name: 'cars',
                component: CarsPage,
            },
            {
                path:'/car/:id',
                name: 'carDetails',
                component: CarDetails,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return { top: 0 };
    }
});

export default router;
