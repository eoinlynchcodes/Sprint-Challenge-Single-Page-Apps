import React, { useState } from "react";
import CharacterList from './CharacterList';
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
 
  const [ searchResult, setSearchResult ] = useState("");

  const search = event => {
    event.preventDefault();
    console.log(event);
    setSearchResult(event.target.value);
    }

  return (
    <section className="search-form">

     <form>
       <input 
       type="text"
       placeholder="Search by Name"
       onChange={search}
       /> 
       <br></br>
       <button onSubmit={() => search()}>Search</button>
     </form>

     <CharacterList />

    </section>
  );
}
