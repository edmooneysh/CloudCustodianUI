import Vue from 'vue';
import Router from 'vue-router';

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/newpolicy', component: 'SidebarNewPolicy' },
  { path: '/help', component: 'Help' },
  { path: '*', component: 'NotFound' },
];
const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`),
  };
});
Vue.use(Router);

export default new Router({
  routes,
  mode: 'history',
});
