import { useRef, useState } from "react";
import { Gif } from "../interfaces/gif.interface";
import { getGifQuery } from "../actions/get-gif-query";

// const gifsCache: Record<string, Gif[]> = {};
    
    export const useGif = () => {
        const [previousTerms, setpreviousTerms] = useState<string[]>([]);
        const [gif, setGif] = useState<Gif[]>([]);
        
        const gifsCache =useRef<Record<string, Gif[]>>({});
    
        const handleTermClicked = async(term:string)=> {
            if(gifsCache.current[term]){
                setGif(gifsCache.current[term]);
                return;
            }
        };
        const handlSearch = async(query:string = '') => {
            query = query.trim().toLowerCase();
            if ( query.length === 0 ) return;
            if (previousTerms.includes(query)) return;
    
            setpreviousTerms([query, ...previousTerms].slice(0,7));
    
            const gifs = await getGifQuery(query);
            setGif(gifs);

            gifsCache.current[query] = gifs;
            console.log(gifsCache)
        };

        return {

            //values
            previousTerms,
            gif,
            //Methods //Actions
            handlSearch,
            handleTermClicked

        }


    }
    