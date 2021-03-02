const apiKey="wMqvSK3gHL65KRyFxTxyrNCUCJbskKtb"

const getRandomGifs = async() =>{
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`);
        const parsedRes = await res.json();
        console.log('parsedRes:',parsedRes);
        return parsedRes;
    } 
    catch (error) {
        console.log(error)
    }
};

const favouriteArray = JSON.parse(localStorage.getItem("favoriteGifs"));

export {
    getRandomGifs,
    favouriteArray
}