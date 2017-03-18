import localforage from 'localforage';

var settingsStore = localforage.createInstance({
    name: 'settings'
});


const settingsPlugin  = store => {
    settingsStore.getItem('weatherUnit')
    .then(weatherUnit => {
        if(weatherUnit) {
            store.commit('setWeatherUnit', weatherUnit)
        }
    })
    settingsStore.getItem('location')
    .then(location => {
        if(location) {
            store.commit('setLocation', location)
        }
    })
    // settingsStore.getItem('settings')
    // .then(settings => {
    //     if(settings) {
    //         store.commit('loadSettings', settings);
    //     }
    // });

    store.subscribe((mutation, state) => {
        switch(mutation.type) {
            case 'setWeatherUnit':
                settingsStore.setItem('weatherUnit', state.settings.weatherUnit);
                break;
            case 'setLocation':
                settingsStore.setItem('location', state.settings.location);
                break;
        }
    });
}

export default settingsPlugin;