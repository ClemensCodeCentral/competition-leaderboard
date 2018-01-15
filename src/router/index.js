import Vue from 'vue';
import Router from 'vue-router';
import LeaderboardCard from '@/components/LeaderboardCard';
import Contestants from '@/components/Contestants';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Leaderboard',
      component: LeaderboardCard,
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: LeaderboardCard,
    },
    {
      path: '/users',
      name: 'Contestants',
      component: Contestants,
    },
  ],
});
