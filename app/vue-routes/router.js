
import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/about.vue'
import Test from '../components/test.vue'

Vue.use(VueRouter);

const router = new VueRouter ({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'test',
            path: '/test',
            component: Test
        }
    ]
});

export default router