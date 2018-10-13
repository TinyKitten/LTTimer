<template>
  <section class="container">
    <app-timer />
    <app-button />
    <footer>
      <p class="credit">
        Copyright &copy; 2018
        <a href="https://tinykitten.me" target="_blank" rel="noopener noreferrer">TinyKitten</a>
      </p>
      <p class="github">
        <a href="https://github.com/TinyKitten/LTTimer" target="_blank" rel="noopener noreferrer">Fork Me on GitHub</a>
      </p>
    </footer>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import AppTimer from '@/components/AppTimer.vue';
import AppButton from '@/components/AppButton.vue';

import Bomb from '@/assets/bomb.mp3';

export default {
  components: {
    AppTimer,
    AppButton,
  },
  computed: {
    ...mapGetters(['started']),
  },
  watch: {
    started(flag) {
      if (!flag) {
        this.onCompleted();
      }
    },
  },
  methods: {
    onCompleted() {
      this.playBomb();
    },
    playBomb() {
      const audio = new Audio(Bomb);
      audio.play();
    },
  },
};
</script>

<style scoped>
.container {
  background: #e6b422;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  flex-direction: column;
}
a {
  color: #fff;
}
.credit {
  margin-top: 32px;
  text-align: center;
}
.github {
  text-align: center;
  margin-top: 8px;
}
</style>
