<template>
    <div class="current-time">
        {{ now.format() }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment-timezone';


export default {
    computed: mapState({
        now: state => state.now.currentTime.tz(state.settings.timezone)
    })
}

</script>

<style lang="scss">
</style>