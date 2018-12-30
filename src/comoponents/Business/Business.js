import React from "react";
import {Component} from 'react'
import './Business.css';






class Business extends Component{
  render(){

    const { business } = this.props;
    

    return(
      
      <div className="Business">
      
      <div className="image-container">
        <li>
          <a href={business.url}>
            <img
              src={business.imageSrc} 
              target="_blank"
              alt="" />
          </a>
        </li>
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer">{business.address}</a>
          <p>{business.city}</p>
          <p>{business.state}</p>
          <p>{business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">4.5 stars</h3>
            <p>{business.reviewCount}</p>
            <p>{business.price}</p>
        </div>
      </div>
      </div>
    )
  }
};

export default Business;


