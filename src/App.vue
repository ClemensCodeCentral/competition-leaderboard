<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
      <div class="tab-container" v-if="rounds.length > 0" v-for="round in rounds">
        <div class="tab">
          <div>ROUND {{ round.count }}</div>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import * as db from './scripts/database';

export default {
  name: 'app',
  computed: {
    rounds: function () {
      return db.fetchRounds();
    },
  },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Roboto', 'Noto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.tab-container {

}

div.tab {
  height: 48px;
  padding: 8px;
  font-size: 14px;
  overflow: hidden;
  user-select: none;
}

div.tab[selected] {
}
</style>
