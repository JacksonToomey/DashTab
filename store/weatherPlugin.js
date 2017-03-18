import axios from 'axios';
import localforage from 'localforage';
import keys from './keys';

var weatherStore = localforage.createInstance({
    name: 'weather'
});


const loadWeather = store => {
    let apiKey = keys.weatherKey;
    let zip = store.state.settings.location + ',us';
    axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            APPID: apiKey,
            zip,
        }
    }).then(resp => {
        var expiration = store.state.now._current.clone().add(2, 'hours').unix();
        var payload = {
            data: resp.data,
            location: zip,
            expiration
        }
        store.commit('loadWeather', payload);
        weatherStore.setItem('weather', payload);
    })
}


const expired = store => {
    let expiration = store.state.weather.expiration;
    if( ! expiration ) {
        return true;
    }
        let now = store.state.now._current.unix();
        if(now >= expiration) {
            return true;
        }

    return false;
}


const weatherPlugin  = store => {
    weatherStore.getItem('weather')
    .then(weather => {
        if( ! weather ) {
            loadWeather(store);
        }
        else {
            if(expired(store)) {
                loadWeather(store);
            }
            else {
                store.commit('loadWeather', weather);
            }
        }
    });

    setInterval(() => {
        if(expired(store)) {
            loadWeather(store);
        }
    }, 1800000)

    store.subscribe((mutation, state) => {
        switch(mutation.type) {
            case 'setLocation':
                if(state.weather.location != state.settings.location) {
                    loadWeather(store);
                }
                break;
        }
    });
};

export default weatherPlugin;