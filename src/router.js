import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import HomeContainer from './components/tabbar/HomeContainer.vue'


var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },

    ]
})

export default router