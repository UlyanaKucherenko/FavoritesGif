import { httpSevice } from "../../http";

const state = () => ({
    gifs: [],
    loading:false,
    error:false,
    page:2
});

const  mutations ={
    gifsRequest(state) {
        state.loading=true,
        state.error=false
    },
    gifsSuccess(state) {
        state.loading=false,
        state.error=false
    },
    gifsFailure(state) {
        state.loading=false,
        state.error=true
    },
    gifsUpdate(state, payload) {
        state.gifs = [...payload];
    },

};
const  actions = {
    getGifsByQuery: async ({commit},{query,limit,offset}) =>{
        commit("gifsRequest");
        const result = await httpSevice.getGifsByQuery(query,limit,offset);
        if(result?.meta.msg === "OK") {
            commit("gifsSuccess");
            commit("gifsUpdate", result.data);
        }
        else {
            commit("gifsFailure");
            console.log(result?.meta.msg);
        }
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};