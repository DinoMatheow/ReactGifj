import axios from "axios";


export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        lang: 'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
        // api_key: '2kMFMOFtd6pmPJBHHbbNKaI5Xctmf6Bx'
    }
})
