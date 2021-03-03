const state = () => ({
    favorite: [],
});

const mutations ={
    changeFavoriteState(state, payload) {
        state.favorite = [...payload];
    },
};

export default {
    namespaced: true,
    state,
    mutations,

};