<template>
    <div class="current-time">
        {{ progress }}%
    </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment-timezone';


export default {
    computed: mapState({
        progress: state => {
            var startTime = moment.tz(state.settings.startTime, state.settings.timezone);
            var endTime = moment.tz(state.settings.endTime, state.settings.timezone);
            var now = state.now.currentTime.tz(state.settings.timezone);
            if( now > endTime ) {
                return 100;
            }

            if ( now < startTime ) {
                return 0;
            }
            var total = endTime - startTime;
            var current = endTime - now;
            var percent = current / total;
            percent = percent * 100;
            return Math.round( percent );
        }
    })
}

</script>

<style lang="scss">
</style>