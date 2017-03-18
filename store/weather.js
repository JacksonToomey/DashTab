export default {
    state: {
        expiration: null,
        weatherData: null,
        loaded: false,
        location: null,
    },
    mutations: {
        loadWeather(state, data) {
            state.loaded = true;
            state.expiration = data.expiration;
            state.weatherData = data.data;
            state.location = data.location;
        }
    }
}