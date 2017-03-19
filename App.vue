
<template>
    <div class="app-main">
        <div class="widget">
            <current-time></current-time>
            <day-progress></day-progress>
        </div>
        <div class="widget">
            <weather></weather>
        </div>
        <div class="widget">
            <notes></notes>
        </div>
        <settings></settings>
    </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue';
import DayProgress from './components/DayProgress.vue';
import Weather from './components/Weather.vue';
import Notes from './components/Notes.vue';
import Settings from './components/Settings.vue';

    export default {
        components: {
            'current-time': CurrentTime,
            'day-progress': DayProgress,
            'weather': Weather,
            'notes': Notes,
            'settings': Settings,
        }
    }
</script>

<style lang="scss">
 * {
     padding: 0;
     margin: 0;
 }

 .button {
    padding: 10px;
    transition: background-color 150ms, box-shaddow 150ms, color 150ms;
     &:hover {
        background-color: black;
        color: white;
        box-shadow: 3px 3px 3px #afafaf;
     }
 }

 body {
    font-size: 2em;
    font-family: Candara,Calibri,Segoe,'Segoe UI',Optima,Arial,sans-serif;
    .app-main {
         text-align: center;
         margin-top: 40px;
         margin-left: 10px;
         margin-right: 10px;

         .widget {
             margin-bottom: 60px;
         }
     }
 }

</style>