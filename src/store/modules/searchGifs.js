const state = () => ({
    searchGifs: [],
});

const  mutations ={
    changeSearchGifsState(state, payload) {
        state.searchGifs = [...state.searchGifs, payload];
    },
};
const  actions = {
    addItemToSearchGifs: async ({commit}, payload) =>{
        commit("changeSearchGifsState", payload);
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};