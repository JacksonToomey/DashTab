import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import updateTime from './updateTime';
import weatherPlugin from './weatherPlugin';
import notesPlugin from './notesStore';
import settingsPlugin from './settingsStore';

import currentTime from './currrentTime';
import settings from './settings';
import weather from './weather';
import notes from './notes';


const store = new Vuex.Store({
    modules: {
        now: currentTime,
        weather,
        settings,
        notes
    },
    plugins: [
        updateTime,
        weatherPlugin,
        notesPlugin,
        settingsPlugin,
    ]
});

export default store;