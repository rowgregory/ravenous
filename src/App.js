import React from 'react';
import { Component } from 'react';
import './App.css';

import BusinessList from './comoponents/BusinessList/BusinessList';
import { SearchBar } from './comoponents/SearchBar/SearchBar';



const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Lucas Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];

export class App extends Component {

  //  three pieces of information we'll send to the Yelp API
  searchYelp(term, location, sortBy){
    console.log(`You are searching for ${term}, ${location}, and ${sortBy} `);
  }

  render() {
    return(
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businesses} />
      </div>
    )
  }
}

export default App;
