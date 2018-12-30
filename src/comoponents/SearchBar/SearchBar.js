import React from 'react';
import { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
     'Best Match' : 'best_match',
   'Higest Rated' : 'rating',
  'Most Reviewed' : 'review_count'
};

export class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={ 
      term: '',
      location: '',
      sortBy: 'best_match'
      };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    } else {
      return '';
    }  
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  handleLocationChange(event){
    this.setState({location: event.target.value});
  }

  renderSortByOptions(){

    return Object.keys(sortByOptions).map(sortByOption => {

      // Stored object values in a variable. Accessing the sortByOptions 
      // values using the sortByOption parameter of the callback function.
      let sortByOptionValue = sortByOptions[sortByOption];

      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>

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
        <input onChange={this.handleTermChange} placeholder="Search Businesses" />
        <input onChange={this.handleLocationChange} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a href="/">Let's Go</a>
      </div>
    </div>
    )
  }
};