const state = () => ({
    favorite: [],
});

const mutations ={
    changeFavoriteState(state, payload) {
        state.favorite = [...state.favorite,payload];
    },
}

export default {
    namespaced: true,
    state,
    mutations
};