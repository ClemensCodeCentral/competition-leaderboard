<template>
  <div id="app">
    <header class="toolbar">
      <a href="/" class="logo"></a>
      <span>Leaderboard <span class="beta-tag"><b>BETA</b></span>
      </span>
    </header>
    <header v-if="true">
      <div class="tab-container">
        <div class="tab" v-for="round in rounds">
          <span class="tab-content">
            <router-link :to="'/round/' + round.count">ROUND {{ round.count }}</router-link>
          </span>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
   <site-footer></site-footer>
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter";
import * as db from "./scripts/database";

export default {
  name: "app",
  components: {
    "site-footer": SiteFooter
  },
  data() {
    return {
      
    };
  }
};
</script>

<style>
body {
  margin: 0;
  background: #e0e0e0;
}

#app {
  font-family: "Roboto", "Noto", sans-serif;
  color: #e0e0e0;
}

main {
  text-align: center;
  margin-top: 40px;
  min-height: 70vh;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #f5f5f5;
  color: #000000;
  opacity: 87%;
}

header span {
  display: inline-block;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  vertical-align: middle;
}

header.toolbar {
  padding-top: 16px;
}

header:not(.toolbar) {
  height: 48px;
}

.logo {
  vertical-align: middle;
  display: inline-block;
  width: 192px;
  height: 24px;
  background-image: url("~/static/img/logo_long.svg");
  background-size: 192px 24px;
}

.beta-tag {
  font-size: 12px;
  display: inline;
  color: #000000;
}

.tab-container {
  display: flex;
  align-items: flex-start;

  height: 48px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  user-select: none;

  flex: 1 1 auto;
  flex-direction: row;
}

.tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;

  position: relative;
  padding: 0 8px;
  overflow: hidden;
  cursor: pointer;
  vertical-align: middle;
}

.tab-content > * {
  height: 100%;
  transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
  align-items: bottom;
  justify-content: center;
  flex: 1 1 auto;
}

.tab-content > a {
  text-decoration: none;
  color: #000000;
}

.tab-content[selected] > a {
  color: #000000;
}
</style>
