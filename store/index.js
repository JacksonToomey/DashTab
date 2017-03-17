import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import updateTime from './updateTime';

import currentTime from './currrentTime';
import settings from './settings';


const store = new Vuex.Store({
    modules: {
        now: currentTime,
        settings
    },
    plugins: [updateTime]
});

export default store;