
<template>
    <div class="app-main">
        <current-time></current-time>
        <day-progress></day-progress>
        <h3>Things I want</h3>
        <ul>
            <li>Weather</li>
            <li>Bus/Train schedules (After 4:45 pm)</li>
            <li>Next Day Work (After 4:45 pm)</li>
            <li>Settings</li>
        </ul>
    </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import DayProgress from './components/DayProgress.vue';

    export default {
        components: {
            'current-time': CurrentTime,
            'day-progress': DayProgress
        }
    }
</script>

<style lang="scss">
</style>