import React from 'react';
import { Component } from 'react';
import './App.css';

import BusinessList from './comoponents/BusinessList/BusinessList';
import { SearchBar } from './comoponents/SearchBar/SearchBar';
import Yelp from './util/Yelp';


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  //  three pieces of information we'll send to the Yelp API
  searchYelp(term, location, sortBy){
   Yelp.searchYelp(term, location, sortBy).then((businesses) => {
     this.setState({ businesses: businesses });
   });
  }

  render() {
    return(
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App;
