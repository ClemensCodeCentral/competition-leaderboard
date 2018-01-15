<template>
  <div class="wrapper">
    <span class="place">{{ place }}</span>
    <img src="{{ imageSrc }}">
    <div>{{ name }}</div>
    <div>{{ points }}</div>
  </div>
</template>

<script>
export default {
  name: "leaderboard-leaders",
  data() {
    return {
      name,
      points,
      place,
      imageSrc
    };
  }
};
</script>

<style scoped>
img {
  height: 32px;
  width: 32px;
}
</style>