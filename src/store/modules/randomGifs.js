const state = () => ({
    randomGifs: [],
});

const  mutations ={
    changeRandomGifsState(state, payload) {
        state.randomGifs = [...state.randomGifs, payload];
    },
};
const  actions = {
    addItemToRandomGifs: async ({commit}, payload) =>{
        commit("changeRandomGifsState", payload);
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};