import { useEffect, useState } from "react";

interface Props {
    placeholder:string;
    onQuery: (query:string) => void;

}
export const SerchBar = ({placeholder = 'Search ', onQuery}: Props) => {

  const [query, setQuery] = useState('');

  useEffect( ()=> {
    const timoutId = setTimeout(() => {
      onQuery(query)
    }, 700);

    return ()=> {
      clearTimeout(timoutId);
    }

  }, [query, onQuery]);



const handlSearch = () => {
    onQuery(query);
    // setQuery('');
};

const handlekeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
  if (event.key === 'Enter'){
    handlSearch();
  }
};


  return (
    <div className="search-container">
    <input type="text" 
    placeholder={ placeholder }
    value={ query }
    onChange={ (event)=> setQuery(event.target.value) }
    onKeyDown={ handlekeyDown}
    />
    <button  onClick={ handlSearch }>Search</button>
    
     </div>

  )
}
