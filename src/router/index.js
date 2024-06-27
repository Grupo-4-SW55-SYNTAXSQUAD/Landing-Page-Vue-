import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../Peruventura/view/home.component.vue";
import About from "../Peruventura/view/about.component.vue";
import AboutTeamComponent from "../Peruventura/view/about-team.component.vue";
import Service from "../Peruventura/view/service.view.vue";
import ContactComponent from "../Peruventura/view/contact.component.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/about-team',
            name: 'about-team',
            component: AboutTeamComponent
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactComponent
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0, behavior: 'smooth' };
    }
});
