<template>
    <div class="weather">
        {{ weather }}
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
            return Math.round((temp * (9/5)) - 459.67);
        }
    })
}

</script>

<style lang="scss">
</style>