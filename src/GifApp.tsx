import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SerchBar } from "./shared/components/SerchBar";
import { useGif } from "./gifs/hooks/useGif";

export const GifApp = () => {

    const { previousTerms, gif, handlSearch, handleTermClicked } = useGif();

  return (
    
    <>
        {/* Header  */}
        <CustomHeader title="My Gifs" description="Search Gif"/>

        {/* Search  */}
        <SerchBar  
        placeholder="Search Gif" 
        onQuery={handlSearch }
        />
        {/* Busquedas  */}
        <PreviousSearch  searches={previousTerms}  onLabelClicked={handleTermClicked} />
        {/* Gif  */}
        <GifList  gifs={ gif } />




    </>


  )
}
