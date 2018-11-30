import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppPost from './components/AppPost.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPost}
];

const router = new VueRouter({
  mode: 'history',
  routes
});
new Vue({
  
  router,
  render: h => h(App),
}).$mount('#app')
