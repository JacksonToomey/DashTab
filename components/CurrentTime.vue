<template>
    <div class="current-time">
        {{ now.format('h:mmA') }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment-timezone';


export default {
    computed: mapGetters({
        now: 'currentTime'
    })
}

</script>

<style lang="scss">
.current-time {
    font-size: 2em;
}
</style>