import React from 'react';
import { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {

     'Best Match' : 'best_match',
   'Higest Rated' : 'rating',
  'Most Reviewed' : 'review_count'

};

export class SearchBar extends Component {
    

  renderSortByOptions(){

    return Object.keys(sortByOptions).map(sortByOption => {

      // Stored object values in a variable. Accessing the sortByOptions 
      // values using the sortByOption parameter of the callback function.
      let sortByOptionValue = sortByOptions[sortByOption];

      return <li key={sortByOptionValue}>{sortByOption}</li>

    })
  }

  render(){
    return(
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          
            {this.renderSortByOptions()}
          
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>
    )
  }
};