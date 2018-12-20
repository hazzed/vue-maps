
import Vue from 'vue';
import Router from 'vue-router';
import GoogleMap from '../components/GoogleMap';
import Home from '../components/Home';
import About from '../components/About';
import SignUp from '../components/SignUp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },  
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/demo',
      name: 'GoogleMap',
      component: GoogleMap,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});