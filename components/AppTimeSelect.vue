<template>
  <form class="selector">
    <label @click="setTarget(300)">
      <input checked name="time" type="radio">
      5分
    </label>
    <label @click="setTarget(600)">
      <input name="time" type="radio">
      10分
    </label>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setTarget']),
  },
};
</script>

<style scoped>
.selector {
  color: #fff;
  margin-top: 32px;
  font-size: 1.25rem;
}
</style>
