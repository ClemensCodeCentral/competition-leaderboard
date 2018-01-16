<template>
  <div id="card">
    <leaderboard-leaders>
    </leaderboard-leaders>
    <leaderboard-item v-for="(contestant, index) in contestants" :key="contestant.place">
    </leaderboard-item>
  </div>
</template>

<script>
import LeaderboardLeaders from "@/components/LeaderboardLeaders";
import LeaderboardItem from "@/components/LeaderboardItem";

export default {
  name: "leaderboard-card",
  components: {
    LeaderboardLeaders,
    LeaderboardItem
  },
  props: ["contestants"],
  data() {
    return {};
  }
};
</script>

<style scoped>
:host {
  display: block;
  position: relative;
  background-color: #212121;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

leaderboard-leaders {
  margin: 16px 16px 24px;
}
</style>