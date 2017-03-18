import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import updateTime from './updateTime';
import weatherPlugin from './weatherPlugin';

import currentTime from './currrentTime';
import settings from './settings';
import weather from './weather';


const store = new Vuex.Store({
    modules: {
        now: currentTime,
        weather,
        settings
    },
    plugins: [
        updateTime,
        weatherPlugin
    ]
});

export default store;