<template>
  <div class="container">
    <div class="contestant" v-for="contestant in contestants">
      <span class="name">{{ contestant.name }}</span><span class="break"></span>
      <span class="points">{{ contestant.points }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "leaderboard-contestants",
  props: ["contestants"]
};
</script>
<style scoped>
div.contestant {
  height: 72px;
}

div.contestant[alternate] {
  background-color: #e0e0e0;
}

.break {
  width: 16px;
}
</style>
