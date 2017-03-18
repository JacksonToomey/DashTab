
<template>
    <div class="app-main">
        <current-time></current-time>
        <day-progress></day-progress>
        <weather></weather>
        <h3>Things I want</h3>
        <ul>
            <li>Bus/Train schedules (After 4:45 pm)</li>
            <li>Next Day Work (After 4:45 pm)</li>
        </ul>
    </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import DayProgress from './components/DayProgress.vue';
import Weather from './components/Weather.vue';

    export default {
        components: {
            'current-time': CurrentTime,
            'day-progress': DayProgress,
            'weather': Weather,
        }
    }
</script>

<style lang="scss">
</style>