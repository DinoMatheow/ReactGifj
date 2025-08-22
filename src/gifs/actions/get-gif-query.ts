
// import axios from 'axios';
import { GiphyResponse} from '../interfaces/gif.response';
import { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifQuery = async(query:string): Promise<Gif[]> => {
    
    const response = await giphyApi<GiphyResponse>('/search', {
        params:{
            q: query, 
            limit: 10, 
          
        }
    });
    // console.log(response.data);

    return response.data.data.map((gif)=> (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            height: Number(gif.images.original.height),
            width: Number(gif.images.original.width),

        }
    ));


}
