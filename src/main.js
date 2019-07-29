import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = '';

import Vuex from 'vuex'
Vue.use('Vuex')


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'



import router from './router.js'


import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})