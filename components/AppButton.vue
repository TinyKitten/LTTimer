<template>
  <div>
    <button v-if="!started" class="button" @click="_start()">START</button>
    <button v-else class="button" @click="stop()">STOP</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

import Gong from '@/assets/gong.wav';

export default {
  computed: {
    ...mapGetters(['started']),
  },
  methods: {
    ...mapMutations(['setAudio']),
    ...mapActions(['start', 'stop']),
    _start() {
      const preAudio = new Audio(Gong);
      preAudio.load();
      preAudio.play();
      const audio = new Audio(Gong);
      audio.load();
      this.setAudio(audio);
      this.start();
    },
  },
};
</script>

<style scoped>
.button {
  color: #fff;
  font-weight: bold;
  border: 4px solid #fff;
  background: none;
  font-size: 1.5rem;
  padding: 12px 24px;
  border-radius: 32px;
  margin-top: 32px;
}
.button:hover {
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.25);
}
</style>
