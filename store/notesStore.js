import localforage from 'localforage';

var notesStore = localforage.createInstance({
    name: 'notes'
});


const notesPlugin  = store => {
    notesStore.getItem('note')
    .then(note => {
        if( ! note ) {
            note = '';
        }
        store.commit('setNote', note);
    });

    store.subscribe((mutation, state) => {
        if(mutation.type == 'setNote') {
            notesStore.setItem('note', state.notes.note);
        }
    });
}

export default notesPlugin;