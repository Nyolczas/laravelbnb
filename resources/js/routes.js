import VueRouter from 'vue-router';
import Example2 from './components/Example2.vue';
import Bookables from './bookables/Bookables';

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "Főoldal",
    },{
        path: "/second",
        component: Example2,
        name: "Második oldal",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
