<template>
    <div class="weather">
        <span v-html="weather"></span>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    computed: mapState({
        weather: state => {
            if( ! state.weather.loaded ) {
                return null;
            }
            var temp = state.weather.weatherData.main.temp;
            if(state.settings.weatherUnit == 'fahrenheit') {
                let tempVal = Math.round((temp * (9/5)) - 459.67);
                return tempVal.toString() + '&#x000B0;F';
            }
            else {
                let tempVal = Math.round(temp - 273.15);
                return tempVal.toString() + '&#x000B0;C';
            }
        },
    })
}

</script>

<style lang="scss">
.weather {
    font-size: 2em;
}
</style>