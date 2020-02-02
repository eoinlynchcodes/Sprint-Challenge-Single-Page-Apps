import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';

export default function SearchForm(props) {
  //  const searchArray = props.characters;
  //  const methodToUse = props.setCharacters;

  // const [ searchResult, setSearchResult ] = useState("");

  // const resultsFromSearch = searchArray.filter(item => item.name.toLowerCase().includes(searchResult.toLowerCase()));
  // const search = event => {
  //   event.preventDefault();
  //   // console.log(event);
  //   console.log(event.target.value);
  //   setSearchResult(event.target.value);
  //   console.log(resultsFromSearch);
  //   methodToUse(resultsFromSearch);
  // }

  return (
    <section className='search-form'>
      <form>
        <input
          type='text'
          placeholder='Search by Name'
          // 5 - pass changehandler props and value props
          onChange={props.search}
          value={props.searchResult}
        />
      </form>

      {/* 
     Need to make a new component - SearchCard. 
     Then send searchResult to that. 
     Then use the filter method to render the information that corresponds to the search result.
     */}
    </section>
  );
}
