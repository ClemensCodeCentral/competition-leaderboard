<template>
  <section id="leaders">
    <div class="wrapper" v-for="leader in leaders">
      <img :src="leader.imageSrc" :alt="'Profile image for ' + leader.name">
      <div class="place">{{ leader.place }}</div>
      <div class="name-tag">{{ leader.name }}</div>
      <div class="points-tag">{{ leader.points }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "leaderboard-leaders",
  props: ["leaders"]
};
</script>

<style scoped>
img {
  height: 128px;
  width: 128px;
}

.name-tag {
  font-size: 20px;
}

.points-tag {
  font-size: 14px;
}
</style>