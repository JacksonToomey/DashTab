<template>
    <div class="settings">
        <span class="setting-button button" @click="show">
            <i class="mdi mdi-settings"></i>Settings
        </span>
        <div :class="[visible ? '' : 'hidden', 'settings-page']">
            <span class="settings-title">Settings page</span>
            <span class="close button" @click="hide">
                <i class="mdi mdi-close"></i>Close
            </span>
            <div class="settings-values">
                <div class="settings-value">
                    <span class="value-name">
                        Temp
                    </span>
                    <span class="value">
                        <span
                            :class="[unit == 'fahrenheit' ? 'selected' : '', 'temp-value']"
                            @click="setUnit('fahrenheit')">
                            &#x000B0;F
                        </span>
                        <span
                            :class="[unit == 'celcius' ? 'selected' : '', 'temp-value']"
                            @click="setUnit('celcius')">
                            &#x000B0;C
                        </span>
                    </span>
                </div>
                <div class="settings-value">
                    <span class="value-name">
                        Zip Code
                    </span>
                    <span class="value">
                        <input
                            class="zip-input"
                            type="text"
                            :value="zip"
                            @input="setLocation"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    computed: mapState({
        visible: state => state.settings.visible,
        unit: state => state.settings.weatherUnit,
        zip: state => state.settings.location,
    }),
    methods: {
        show() {
            this.$store.commit('setVisible');
        },
        hide() {
            this.$store.commit('setHidden');
        },
        setUnit(unit) {
            this.$store.commit('setWeatherUnit', unit);
        },
        setLocation(e) {
            this.$store.commit('setLocation', e.target.value)
        }
    }
}

</script>

<style lang="scss">
.settings {
    position: fixed;
    top: 0;
    right: 15px;
    .setting-button {
        font-size: 0.5em;
        cursor: pointer;
    }
    .settings-page {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: white;
        height: 100vh;

        &.hidden {
            display: none;
        }

        .settings-title {
            font-size: 1.5em;
            padding-bottom: 2px;
            margin-bottom: 40px;
            border-bottom: 1px solid;
            display: inline-block;
        }

        .close {
            cursor: pointer;
            font-size: 0.5em;
            position: fixed;
            top: 15px;
            right: 15px;
        }

        .settings-values {
            font-size: 1em;
            margin-top: 10px;
            text-align: left;
            width: 40%;
            margin-left: auto;
            margin-right: auto;
            clear: both;

            .settings-value {
                clear: both;
                .value-name {
                    float: left;
                    margin-bottom: 50px;
                }

                .value {
                    float: right;

                    .zip-input {
                        outline: none;
                        border: none;
                        text-align: right;
                        font-size: 0.8em;
                        border-bottom: 1px solid;
                        padding-bottom: 10px;
                    }

                    .temp-value {
                        cursor: pointer;
                        border: 1px solid;
                        padding: 10px;
                        text-align: center;
                        width: 50px;
                        display: inline-block;

                        &.selected {
                            background-color: black;
                            color: white;
                        }
                    }
                }
            }
        }
    }
}
</style>