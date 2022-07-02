import axios from 'axios';




export const fetchCurrency = (cur1,cur2) => axios.get(`https://api.fastforex.io/fetch-one?from=${cur1}&to=${cur2}&api_key=40313675c5-9f861dc43a-reel9q`);
export const fetchCurrencyUsd = () => axios.get(`https://api.fastforex.io/fetch-one?from=USD&to=UAH&api_key=40313675c5-9f861dc43a-reel9q`);
export const fetchCurrencyEur = () => axios.get(`https://api.fastforex.io/fetch-one?from=EUR&to=UAH&api_key=40313675c5-9f861dc43a-reel9q`);

