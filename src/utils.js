import {urls} from "./http"

const getRandomGifs = async() =>{
    try {
        const res = await fetch(`${urls.random}`);
        const parsedRes = await res.json();
        return parsedRes;
    } 
    catch (error) {
        console.log(error)
    }
};

const favouriteArray = JSON.parse(localStorage.getItem("favoriteGifs"));

export {getRandomGifs,favouriteArray};