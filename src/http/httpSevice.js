import { urls } from "../http/index.js";

class HttpSevice {
  _fetchData = async (url, config = {}) => {
    try {
      const res = await fetch(url, config);
      const parsedRes = await res.json();
      return parsedRes;
    } catch (error) {
      console.log(error);
      return error
    }
  };
 
  getGifsByQuery = (query,limit,offset) => this._fetchData(urls.search(query,limit,offset));
}

export const httpSevice = new HttpSevice();