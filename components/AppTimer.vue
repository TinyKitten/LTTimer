<template>
  <section :class="{ diffused: isDiffusion }" class="timer">
    <p class="time">{{ mins }}:{{ secs }}</p>
    <p class="separator">-</p>
    <p class="time">{{ targetMin }}:00</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Bomb from '@/assets/bomb.mp3';

export default {
  computed: {
    ...mapGetters(['counter', 'target']),
    mins() {
      const cur = this.counter;
      if (!cur || cur < 60) {
        return '0';
      }
      return Math.floor(cur / 60) % 60;
    },
    secs() {
      const cur = this.counter;
      if (!cur) {
        return '00';
      }
      const secs = (cur % 60) % 60;
      return secs.toString().length === 1 ? `0${secs}` : secs;
    },
    isDiffusion() {
      return !this.counter ? false : this.counter % 2 != 0;
    },
    targetMin() {
      return Math.floor(this.target / 60) % 60;
    },
  },
};
</script>

<style scoped>
.timer {
  border-radius: 100%;
  border: 8px solid #fff;
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.25);
  max-width: 90%;
  max-height: auto;
  flex-direction: column;
  font-size: 2.5rem;
  transition: box-shadow 0.25s;
}
.time {
  font-weight: bold;
}
.diffused {
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.5);
}
</style>
