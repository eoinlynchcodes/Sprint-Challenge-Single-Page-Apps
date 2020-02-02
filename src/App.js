import React from 'react';
import Header from './components/Header.js';
import CharacterCard from './components/CharacterCard.js';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList.js';
import { Route, Switch, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* <SearchForm/> */}
      <Header />

      <Link to='/'>Home</Link>
      <Link to='/characterlist'>Character List</Link>
      {/* <Link to="/search">Search</Link> */}

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characterlist' component={CharacterList} />
      {/* <Route path="/search" component={SearchForm}/> */}
    </div>
  );
}
