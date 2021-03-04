import { httpSevice } from "../../http";
import { message } from "ant-design-vue";

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
       console.log(result);
        if(result?.meta.msg === "OK") {
            commit("gifsSuccess");
            commit("gifsUpdate", result.data);
        }
        else {
            commit("gifsFailure");
            message.error(result?.meta.msg);
        }
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};