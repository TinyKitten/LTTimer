import Vuex from 'vuex';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const store = () =>
  new Vuex.Store({
    state: {
      counter: 0,
      target: 300,
      started: false,
      subscription: null,
    },
    getters: {
      counter: state => state.counter,
      target: state => state.target,
      started: state => state.started,
      subscription: state => state.subscription,
    },
    mutations: {
      setStarted(state, flag) {
        state.started = flag;
      },
      setCompleted(state, flag) {
        state.completed = flag;
      },
      increment(state) {
        state.counter++;
      },
      reset(state) {
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
        commit('setStarted', true);
        const numbers = interval(1000);
        const obs = numbers.pipe(take(getters.target));
        const sub = obs.subscribe(n => {
          commit('increment');
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
        commit('reset');
      },
    },
  });

export default store;
