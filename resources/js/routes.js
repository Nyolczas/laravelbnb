import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent.vue';
import Example2 from './components/Example2.vue';

const routes = [
    {
        path: "/",
        component: ExampleComponent,
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
