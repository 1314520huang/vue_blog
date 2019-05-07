// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Index from './components/Index'
import BlogList from './components/BlogList'
import Add from './components/Add'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Index},
        {path:'/list', component:BlogList},
        {path:'/add', component:Add}
    ]
});

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: {App},
    template: '<App/>'
})

