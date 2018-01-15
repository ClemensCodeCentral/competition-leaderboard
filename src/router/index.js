import Vue from 'vue';
import Router from 'vue-router';
import LeaderboardCard from '@/components/LeaderboardCard';
import Contestants from '@/components/Contestants';
import ProblemsList from '@/components/ProblemsList'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: LeaderboardCard,
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: LeaderboardCard,
    },
    {
      path: '/users',
      name: 'Users',
      component: Contestants,
    },
    {
      path: '/problems',
      name: 'Problems',
      component: ProblemsList,
    },
  ],
});
