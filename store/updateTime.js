const updateTime  = store => {
    setInterval(() => {
        store.commit('updateTime');
    }, 1000);
};

export default updateTime;