<template>
    <div class="notes">
        <textarea
            :value="note"
            @input="updateNote"
            :rows="lineCount">
        </textarea>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    computed: mapState({
        note: state => {
            let note = state.notes.note;
            if(note.trim() == '') {
                return 'Notes...';
            }
            return note;
        },
        lineCount: state => state.notes.note.split(/\n/).length
    }),
    methods: {
        updateNote(e) {
            this.$store.commit('setNote', e.target.value);
        }
    }
}

</script>

<style lang="scss">
.notes {
    textarea {
        text-align: center;
        width: 60%;
        resize: none;
        font-size: 0.7em;
        overflow-y: hidden;
        outline: none;
        border: none;
        padding: 5px;
        padding-bottom: 15px;
    }
}
</style>