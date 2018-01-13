'use strict';

const leaderboard = new Vue({
  el: '#leaderboard',
  data: {
    entrants: {
      
    },
  },
  methods: {
    loadData: function () {
      // TODO: Fetch from firebase
      this.entrants = [];
    },
  },
});