import React, { useState } from "react";
import CharacterList from './CharacterList';
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {

 const searchArray = props.characters;
 const methodToUse = props.setCharacters;

  const [ searchResult, setSearchResult ] = useState("");

  const search = event => {
    event.preventDefault();
    console.log(event);
    // console.log(event);
    setSearchResult(event.target.value);
    const resultsFromSearch = searchArray.filter(item => {
      // console.log(item.name);
      return item.name.toLowerCase().includes(searchResult);
    });
    // console.log(resultsFromSearch);
    methodToUse(resultsFromSearch);
  }

  return (
    <section className="search-form">

     <form>
       <input 
       type="text"
       placeholder="Search by Name"
       onChange={search}
       value={searchResult}
       /> 
       <br></br>
       {/* <button onSubmit={() => search()}>Search</button> */}
     </form>

     {/* 
     Need to make a new component - SearchCard. 
     Then send searchResult to that. 
     Then use the filter method to render the information that corresponds to the search result.
     */}

    </section>
  );
}
