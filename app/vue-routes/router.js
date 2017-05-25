
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter ({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: require('../components/about.vue')
        }
    ]
});

export default router