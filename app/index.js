/**
 * Created by raniys on 5/24/17.
 */

import Vue from 'vue'
import router from './vue-routes/router'
import App from './app.vue'

import "./styles/style.css"


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});