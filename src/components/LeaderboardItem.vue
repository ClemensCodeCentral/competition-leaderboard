<template>
  <div class="wrapper">
    <div class="place-tag"><b>{{ place }}</b></div>
    <img :src="imageSrc">
    <div>
      <div class="name-tag">{{ name }}</div>
      <div class="points-tag">{{ points }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leaderboard-item",
  props: ["place", "name", "points", "imageSrc"]
};
</script>

<style>
img {
  margin: 8px;
  height: 32px;
  width: 32px;
}

.place-tag {
  font-size: 24px;
}

.name-tag {
  font-size: 14px;
}
</style>