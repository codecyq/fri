import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/index')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },

]
//挂载router
const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router
