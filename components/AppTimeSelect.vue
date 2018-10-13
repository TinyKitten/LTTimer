<template>
  <form class="selector">
    <label @click="onClick(300)">
      <input :disabled="started" checked name="time" type="radio">
      5分
    </label>
    <label @click="onClick(600)">
      <input :disabled="started" name="time" type="radio">
      10分
    </label>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['started']),
  },
  methods: {
    ...mapMutations(['setTarget']),
    onClick(num) {
      if (!this.started) {
        this.setTarget(num);
      }
    },
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
