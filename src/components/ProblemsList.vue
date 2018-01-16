<template>
  <tbody>
    <div class="problem" v-for="problem in problems">
      <span>{{ problem.title }}</span>
      <span>{{ problem.description }}</span>
      <div class="subgoals-block">
        <div class="subgoal" v-for="subgoal in problem.subgoals">
          <div class="complete-icon" :complete="subgoal.complete"></div>
          <span class="subgoal-points">{{ subgoal.points }}</span> - <span>{{ subgoal.description }}</span>
        </div>
      </div>
    </div>
  </tbody>
</template>
<script>
export default {
  name: "problems-list",
  props: ["problems"]
};
</script>
<style scoped>
.problem {
  /* TODO  */
}

.subgoals-block {
  /* TODO */
  background: #E0E0E0;
}

.complete-icon {
  display: inline-block;
  height: 16px;
  width: 16px;
}

.complete-icon[complete] {
  /* TODO */
}

.subgoal-points {
  font-size: 13px;
}
</style>
