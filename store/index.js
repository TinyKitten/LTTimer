import Vuex from 'vuex';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const store = () =>
  new Vuex.Store({
    state: {
      audio: null,
      counter: 0,
      target: 300,
      started: false,
      subscription: null,
    },
    getters: {
      audio: state => state.audio,
      counter: state => state.counter,
      target: state => state.target,
      started: state => state.started,
      subscription: state => state.subscription,
    },
    mutations: {
      setAudio(state, audio) {
        state.audio = audio;
      },
      setStarted(state, flag) {
        state.started = flag;
      },
      setCompleted(state, flag) {
        state.completed = flag;
      },
      incrementCounter(state) {
        state.counter++;
      },
      resetCounter(state) {
        state.counter = 0;
      },
      setSubscription(state, sub) {
        state.subscription = sub;
      },
      setTarget(state, time) {
        state.target = time;
      },
    },
    actions: {
      start({ getters, commit }) {
        if (getters.started) {
          return;
        }

        commit('setStarted', true);
        const numbers = interval(1000);
        const obs = numbers.pipe(take(getters.target));
        const sub = obs.subscribe(n => {
          commit('incrementCounter');
          if (n === getters.target - 1) {
            commit('setStarted', false);
            commit('reset');
          }
        });
        commit('setSubscription', sub);
      },
      stop({ commit, getters }) {
        const sub = getters.subscription;
        sub.unsubscribe();
        commit('setStarted', false);
        commit('resetCounter');
        commit('setSubscription', null);
      },
    },
  });

export default store;
