import React, { Component } from 'react';
import './App.css';
import { Business } from './comoponents/Business/Business';
import { BusinessList } from './comoponents/BusinessList/BusinessList';
import { SearchBar } from './comoponents/SearchBar/SearchBar';


export class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default App;
