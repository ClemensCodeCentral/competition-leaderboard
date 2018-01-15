<template>
  <div class="wrapper">
    <span class="place">{{ place }}</span>
    <img src="{{ imageSrc }}">
    <div>
      <div>{{ name }}</div>
      <div>{{ points }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leaderboard-item",
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

<style>
img {
  height: 32px;
  width: 32px;
}
</style>