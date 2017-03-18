<template>
    <div class="day-progress">
        <div
        class="progress-display"
        :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment-timezone';


export default {
    computed: mapState({
        progress(state) {
            var startTime = moment.tz(state.settings.startTime, state.settings.timezone);
            var endTime = moment.tz(state.settings.endTime, state.settings.timezone);
            var now = this.$store.getters.currentTime;
            if( now > endTime ) {
                return 100;
            }

            if ( now < startTime ) {
                return 0;
            }
            var total = endTime - startTime;
            var current = now - startTime;
            var percent = current / total;
            percent = percent * 100;
            return Math.round( percent );
        }
    })
}

</script>

<style lang="scss">
.day-progress {
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    height: 5px;
    border-bottom: 1px solid;

    .progress-display {
        width: 0%;
        background-color: black;
        height: inherit;
    }
}
</style>