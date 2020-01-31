import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [ dataFromAPI, setDataFromAPI ] = useState([]);
  const [ characters, setCharacters ] = useState([]);
  const [ info, setInfo ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      // console.log(response.data);
      setCharacters(response.data.results);
      setInfo(response.data.info);
    })
    .then((error) => {
      if(error){
      console.log(error);
      }
    })
  }, []);

  return (
    <div className="character-list">
      {
        characters.map((item, key) => {
          console.log(item);
          return <div>
            <CharacterCard item={item} key={key}/>
            </div>;
        })
      }
    </div>
  );
}
