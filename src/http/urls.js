const BASE_URL="https://api.giphy.com/v1/gifs/search";
const RANDOM_BASE_URL="https://api.giphy.com/v1/gifs/trending"


const api_key="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb";


const urls = {
    search:(query,limit,count) => `${BASE_URL}?api_key=${api_key}&q="${query}"&limit=${limit}&count=${count}`,
    random: `${RANDOM_BASE_URL}?api_key=${api_key}`,
}

export {urls}