import Vue from 'vue';
import Router from 'vue-router';
// import Header from '@/components/header/header';
import Goods from '@/components/goods/goods';
import Seller from '@/components/seller/seller';
import Ratings from '@/components/ratings/ratings';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
});
