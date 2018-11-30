import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPost from './components/AppPost.vue'
import SinglePost from './components/SinglePost.vue'
import AddPost from './components/AddPost.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPost},
  { path: '/posts/:id', component: SinglePost},
  { path: '/add', component: AddPost}
];

const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  
  router,
  render: h => h(App),
}).$mount('#app')
