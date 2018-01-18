<template>
  <div id="app">
    <md-toolbar md-mode="reveal">
      <div>
        <a href="/" class="logo"></a>
        <span class="md-title">Leaderboard <span class="md-caption beta-tag"><b>PREVIEW</b></span></span>
      </div>
    </md-toolbar>
    <md-tabs md-sync-route v-if="rounds.length > 0">
      <md-tab v-for="round in rounds" :key="round.count" :md-label="'Round ' + round.count" :to="'/round/' + round.count"></md-tab>
    </md-tabs>
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
    SiteFooter
  },
  data() {
    return {
      rounds: [
        {
          problems: {
            "id-1": true,
            "id-2": true
          },
          count: 1,
          season: 1
        },
        {
          problems: {
            "id-1": true,
            "id-2": true
          },
          count: 2,
          season: 1
        }
      ],
      round: 1,
      contestants: [
        {
          "id-1": {
            name: "Jeff Dean",
            points: 9001,
            problems: {
              anotherid: true
            }
          },
          imageSrc:
            "http://i0.kym-cdn.com/entries/icons/medium/000/023/880/doggo.jpg"
        }
      ]
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
</style>
