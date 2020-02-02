import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  // 1 - Create search bar slice of state
  const [searchResult, setSearchResult] = useState('');

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        // console.log(response.data);
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .then(error => {
        if (error) {
          console.log(error);
        }
      });
  }, [characters]);

  const resultsFromSearch = characters.filter(item =>
    item.name.toLowerCase().includes(searchResult.toLowerCase())
  );

  // 2 - Create search bar onChange handler
  const search = event => {
    event.preventDefault();
    setSearchResult(event.target.value);
    setCharacters(resultsFromSearch);
  };

  return (
    <div className='character-list'>
      <SearchForm
      // 3 - pass the search state and state setter to search bar component
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        search={search}
      />

    {/* 4- Map over filtered results */}
      {resultsFromSearch.map((item, key) => {
        // console.log(item);
        return <CharacterCard item={item} key={key} />;
      })}
    </div>
  );
}
